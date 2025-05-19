import { useState, useEffect, useRef } from 'react';

const NewMessageForm = ({ onSubmitMessage }) => {
  const [content, setContent] = useState('');
  const handleChange = (evt) => {
    setContent(evt.target.value);
  };
  const handleKeyDown = (evt) => {
    if (evt.key === 'Enter' && evt.shiftKey) {
      evt.preventDefault();
      evt.target.form.requestSubmit();
    }
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (content && content.trim().length > 0) {
      onSubmitMessage(content);
      setContent('');
    }
  };
  const inputRef = useRef(null);
  useEffect(() => inputRef.current.focus(), []);

  return (
    <form className="compose-message" onSubmit={handleSubmit}>
      <textarea
        placeholder="请输入消息…"
        value={content}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <input type="submit" value="发送" />
    </form>
  );
};

export default NewMessageForm;
