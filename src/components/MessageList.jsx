import reactLogo from '../assets/react.svg';

const MessageList = () => (
  <ul className="message-list">
    <li className="from-me">
      <img src={reactLogo} className="avatar" alt="头像" />
      <p className="message">你好React！</p>
    </li>
    <li>
      <img src={reactLogo} className="avatar" alt="头像" />
      <p className="message">你好React！</p>
    </li>
    <li className="from-me">
      <img src={reactLogo} className="avatar" alt="头像" />
      <p className="message">
        欢迎阅读《现代React
        Web应用设计开发实践》，你现在看到的是本书的样例应用。
      </p>
    </li>
    <li>
      <img src={reactLogo} className="avatar" alt="头像" />
      <p className="message">这款应用有名字吗？</p>
    </li>
    <li className="from-me">
      <img src={reactLogo} className="avatar" alt="头像" />
      <p className="message">有的，就叫《我聊》。</p>
    </li>
  </ul>
);

export default MessageList;
