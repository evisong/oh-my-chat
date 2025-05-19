import { useState } from 'react';
import { useNavigate } from 'react-router';
import { css } from '@linaria/core';
import useChatStore from '#stores/chatStore.js';

const contactDetailStyles = css`
  flex: 2;
  padding: 5rem 30% 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .avatar {
    border-radius: 50%;
    width: 5;
    height: 5rem;
    background-color: #eeeeee;
  }

  & > .contact-name {
    margin: 1.2rem;
    font-size: 1.6rem;
  }

  & .form-error {
    font-size: 0.7rem;
    vertical-align: top;
    color: red;
  }
`;
const contactActionsStyles = css`
  flex: 1;
  padding: 2rem 30%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 1rem;

  & > .primary-button {
    flex: 2 0 100%;
    height: 2rem;
  }

  & > .secondary-button {
    flex: 1;
    min-width: 6rem;
    height: 2rem;
  }
`;

const ContactEdit = ({ contact, onClose }) => {
  const updateContact = useChatStore((state) => state.updateContact);
  const [name, setName] = useState(contact.name);
  const handleChange = (evt) => {
    setName(evt.target.value);
  };
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (name.length === 0 || name.length > 20) {
      setErrors((e) => ({ ...e, name: '联系人名称不应为空且不超过20个字' }));
    } else {
      setErrors({});
      setIsLoading(true);
      try {
        const response = await fetch(`/api/contacts/${contact.id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...contact, name }),
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const updated = await response.json();
        updateContact(updated);
        onClose();
      } catch (error) {
        console.error('更新联系人信息失败', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={contactDetailStyles}>
        <img src={contact.avatar} className="avatar" alt="头像" />
        <div className="contact-name">
          <input type="text" value={name} onChange={handleChange} />
          {errors.name && <div className="form-error">{errors.name}</div>}
        </div>
      </div>
      <div className={contactActionsStyles}>
        <button className="primary-button" type="submit" disabled={isLoading}>
          保存
        </button>
        <button className="secondary-button" type="button" onClick={onClose}>
          取消
        </button>
      </div>
    </form>
  );
};

const ContactDetail = ({ contact }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const removeContact = useChatStore((state) => state.removeContact);

  if (!contact) {
    return <div className={contactDetailStyles}>请选择联系人</div>;
  }

  const { id, name, avatar } = contact;
  return isEditing ? (
    <ContactEdit contact={contact} onClose={() => setIsEditing(false)} />
  ) : (
    <>
      <div className={contactDetailStyles}>
        <img src={avatar} className="avatar" alt="头像" />
        <div className="contact-name">{name}</div>
      </div>
      <div className={contactActionsStyles}>
        <button onClick={() => navigate('/chat')} className="primary-button">
          发消息
        </button>
        <button onClick={() => setIsEditing(true)} className="secondary-button">
          修改联系人
        </button>
        <button onClick={() => removeContact(id)} className="secondary-button">
          删除联系人
        </button>
      </div>
    </>
  );
};

export default ContactDetail;
