import { useRef, useImperativeHandle } from 'react';
import { useFormStatus } from 'react-dom';
import { css } from '@linaria/core';

const sendButtonStyles = css`
  padding: 0.5rem 0;
  width: 4rem;
`;

function SendButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={sendButtonStyles}>
      {pending ? '发送中...' : '发送'}
    </button>
  );
}

const composeMessageStyles = css`
  margin: 1.2rem;
  flex: 0 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.2rem;

  & > textarea {
    flex: 1;
    height: 5rem;
  }
`;

const NewMessageForm = ({ onSubmitMessage, ref }) => {
  const handleKeyDown = (evt) => {
    if (evt.key === 'Enter' && evt.shiftKey) {
      evt.preventDefault();
      evt.target.form.requestSubmit();
    }
  };
  const formAction = async (formData) => {
    const content = formData.get('message');
    if (content && content.trim().length > 0) {
      await onSubmitMessage(content);
    }
  };
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
  }));

  return (
    <form className={composeMessageStyles} action={formAction}>
      <textarea
        name="message"
        placeholder="请输入消息…"
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <SendButton />
    </form>
  );
};

export default NewMessageForm;
