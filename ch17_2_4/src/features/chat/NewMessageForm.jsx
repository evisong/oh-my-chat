import { useRef, useImperativeHandle, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { css } from '@linaria/core';

const sendButtonStyles = css`
  padding: 0.5rem 0;
  width: 4rem;
`;

function SendButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={sendButtonStyles}
      data-testid="sendMessageButton"
    >
      {pending ? '发送中...' : '发送'}
    </button>
  );
}

const composeMessageStyles = css`
  margin: 1.2rem;
  flex: 0 0 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0 1.2rem;

  & > textarea {
    flex: 1;
    height: 5rem;
  }

  & > .form-error {
    margin-bottom: -1.2rem;
    flex: 0 0 100%;
    font-size: 0.7rem;
    vertical-align: top;
    color: red;
  }
`;

const NewMessageForm = ({ onSubmitMessage, ref }) => {
  const handleKeyDown = (evt) => {
    if (evt.key === 'Enter' && evt.shiftKey) {
      evt.preventDefault();
      evt.target.form.requestSubmit();
    }
  };
  const [state, formAction, pending] = useActionState(
    async (currentState, formData) => {
      const content = formData.get('message');
      if (content && content.trim().length > 0) {
        await onSubmitMessage(content);
        return { success: true };
      } else {
        return { success: false, error: '消息内容不能为空' };
      }
    },
    { success: true }
  );
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
        disabled={pending}
      />
      <SendButton />
      {!state.success && <div className="form-error">{state.error}</div>}
    </form>
  );
};

export default NewMessageForm;
