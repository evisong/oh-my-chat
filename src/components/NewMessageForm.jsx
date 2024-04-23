import { useState, useEffect, useRef } from 'react';
import { css } from '@linaria/core';

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

const NewMessageForm = ({ onSubmitMessage }) => {
  const [content, setContent] = useState('');
  const handleChange = (evt) => {
    setContent(evt.target.value);
  };
  const handleKeyUp = (evt) => {
    if (evt.key === 'Enter' && evt.ctrlKey) {
      evt.preventDefault();
      evt.target.form.requestSubmit();
    }
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmitMessage(content);
    setContent('');
  };
  const inputRef = useRef(null);
  useEffect(() => inputRef.current.focus(), []);

  return (
    <form className={composeMessageStyles} onSubmit={handleSubmit}>
      <textarea
        placeholder="请输入消息…"
        value={content}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        ref={inputRef}
      />
      <input type="submit" value="发送" />
    </form>
  );
};

export default NewMessageForm;
