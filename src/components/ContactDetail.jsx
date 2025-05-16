import { useContext, useState } from 'react';
import { css } from '@linaria/core';
import NavigationContext from '../context/NavigationContext.jsx';
import useChatStore from '../stores/chatStore.js';

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
  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateContact({ ...contact, name });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={contactDetailStyles}>
        <img src={contact.avatar} className="avatar" alt="头像" />
        <div className="contact-name">
          <input type="text" value={name} onChange={handleChange} />
        </div>
      </div>
      <div className={contactActionsStyles}>
        <button className="primary-button" type="submit">
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
  const { gotoChatView } = useContext(NavigationContext);
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
        <button onClick={gotoChatView} className="primary-button">
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
