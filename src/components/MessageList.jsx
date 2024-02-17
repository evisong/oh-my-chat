const MessageList = ({ messages }) => (
  <ul className="message-list">
    {messages.map(({ id, content, from, fromAvatar }) => (
      <li key={id} className={from === 'me' ? 'from-me' : undefined}>
        <img src={fromAvatar} className="avatar" alt="头像" />
        <p className="message">{content}</p>
      </li>
    ))}
  </ul>
);

export default MessageList;
