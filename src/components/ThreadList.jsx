import { useState } from 'react';
import reactLogo from '../assets/react.svg';

const mockThreads = [
  {
    id: 1,
    contactName: '小帅',
    contactAvatar: reactLogo,
    updateTime: '2023-11-04',
    latestMessage: '书名是《现代React Web应用设计开发实践》',
  },
  {
    id: 2,
    contactName: '小白',
    contactAvatar: reactLogo,
    updateTime: '2023-11-03',
    latestMessage: '有的，就叫《我聊》。',
  },
  {
    id: 3,
    contactName: '小美',
    contactAvatar: reactLogo,
    updateTime: '2023-11-02',
    latestMessage: '现代React Web应用设计开发实践',
  },
  {
    id: 4,
    contactName: '大壮',
    contactAvatar: reactLogo,
    updateTime: '2023-11-02',
    latestMessage: 'Web应用的名字叫《我聊》',
  },
  {
    id: 5,
    contactName: '老宋',
    contactAvatar: reactLogo,
    updateTime: '2023-10-31',
    latestMessage: '项目名为oh-my-chat',
  },
];

const ThreadListItem = ({
  contactName,
  contactAvatar,
  updateTime,
  latestMessage,
  active,
  onClick,
}) => (
  <li className={active ? 'active' : undefined}>
    <a href="#" onClick={onClick}>
      <img src={contactAvatar} className="avatar" alt="头像" />
      <div className="thread">
        <span className="contact-name">{contactName}</span>
        <span className="update-time">{updateTime}</span>
        <span className="latest-message">{latestMessage}</span>
      </div>
    </a>
  </li>
);

const ThreadList = ({ selectedThreadId, onClickThreadItem }) => {
  const [threads, setThreads] = useState(mockThreads);

  return (
    <ul className="thread-list">
      {threads.map((thread) => (
        <ThreadListItem
          key={thread.id}
          active={thread.id === selectedThreadId}
          onClick={() => onClickThreadItem(thread.id)}
          {...thread}
        />
      ))}
    </ul>
  );
};

export default ThreadList;
