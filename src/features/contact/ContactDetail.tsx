import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { css } from '@linaria/core';
import useChatStore from '#stores/chatStore.js';
import FormField from '#components/FormField.jsx';
import { Contact, ContactGroupEnum } from '#types/Contact.types.ts';

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

interface ContactEditProps {
  contact: Contact;
  onClose: () => void;
}

const ContactEdit: React.FC<ContactEditProps> = ({ contact, onClose }) => {
  const updateContact = useChatStore((state) => state.updateContact);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm({ defaultValues: contact });
  const avatar = watch('avatar');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const doSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/contacts/${contact.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const updated = await response.json();
      updateContact(updated);
      onClose();
    } catch (error) {
      setError('root.serverError', { message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(doSubmit)}>
      <div className={contactDetailStyles}>
        <img src={avatar} className="avatar" alt="头像" />
        <FormField
          label="名称"
          error={errors.name && '联系人名称不应为空且不超过20个字'}
        >
          <input
            type="text"
            {...register('name', { required: true, maxLength: 20 })}
          />
        </FormField>
        <FormField label="分组" error={errors.group}>
          <label>
            <input
              type="radio"
              value={ContactGroupEnum.Colleague}
              {...register('group')}
            />
            同事
          </label>
          <label>
            <input
              type="radio"
              value={ContactGroupEnum.Classmate}
              {...register('group')}
            />
            同学
          </label>
          <label>
            <input
              type="radio"
              value={ContactGroupEnum.Friend}
              {...register('group')}
            />
            亲友
          </label>
        </FormField>
        <FormField label="简介" error={errors.intro}>
          <textarea {...register('intro')} />
        </FormField>
        <FormField label="头像" error={errors.avatar}>
          <input type="hidden" {...register('avatar')} />
          <input
            type="file"
            {...register('avatarFile', {
              onChange: (evt) => {
                if (evt.target.files.length > 0) {
                  // 模拟上传头像并获取新URL
                  const newUrl = URL.createObjectURL(evt.target.files[0]);
                  setValue('avatar', newUrl);
                }
              },
            })}
          />
        </FormField>
        {errors.root?.serverError && (
          <div className="form-error">{errors.root.serverError.message}</div>
        )}
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

interface ContactDetailProps {
  contact: Contact;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ contact }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const removeContact = useChatStore((state) => state.removeContact);

  if (!contact) {
    return <div className={contactDetailStyles}>请选择联系人</div>;
  }

  const { id, name, avatar, group, intro } = contact;
  return isEditing ? (
    <ContactEdit contact={contact} onClose={() => setIsEditing(false)} />
  ) : (
    <>
      <div className={contactDetailStyles}>
        <img src={avatar} className="avatar" alt="头像" />
        <div className="contact-name">{name}</div>
        <FormField label="分组">
          <div>
            {!group && '未分组'}
            {group === ContactGroupEnum.Colleague && '同事'}
            {group === ContactGroupEnum.Classmate && '同学'}
            {group === ContactGroupEnum.Friend && '亲友'}
          </div>
        </FormField>
        <FormField label="简介">
          <div>{intro || '暂无'}</div>
        </FormField>
      </div>
      <div className={contactActionsStyles}>
        <button
          onClick={() => navigate('/chat?contactId=' + id)}
          className="primary-button"
          data-testid="jumpToThreadsButton"
        >
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
