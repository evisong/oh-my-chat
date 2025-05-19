import { useState } from 'react';
import { css, cx } from '@linaria/core';
import reactLogo from '../assets/react.svg';

const mockThreads = [
  {
    id: 1,
    contactName: '小帅',
    contactAvatar: reactLogo,
    updateTime: '2023-11-04',
    latestMessage: '书的主题是现代React Web应用的设计开发实践。',
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

const threadListItemStyles = css`
  height: 80px;
  & > a {
    padding: 0 1.2rem;
    display: flex;
    align-items: center;
    column-gap: 1.2rem;
    height: 100%;
    &:hover,
    &:active {
      background-color: #ffffff77;
    }
    & > img {
      border-radius: 50%;
      flex: 0 0 2rem;
      height: 2rem;
      background-color: #eeeeee;
    }
  }
`;
const threadStyles = css`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  overflow: hidden;
  & > .contact-name {
    flex: 2;
    font-size: 1.2rem;
    color: #000000;
  }
  & > .update-time {
    flex: 1;
    color: #9a9a9a;
  }
  & > .latest-message {
    flex: 0 0 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #9a9a9a;
  }
`;
const activeStyles = css`
  background-color: #ffffff99;
`;

const ThreadListItem = ({
  contactName,
  contactAvatar,
  updateTime,
  latestMessage,
  active,
  onClick,
}) => (
  <li className={cx(threadListItemStyles, active && activeStyles)}>
    <a href="#" onClick={onClick}>
      <img src={contactAvatar} alt="头像" />
      <div className={threadStyles}>
        <span className="contact-name">{contactName}</span>
        <span className="update-time">{updateTime}</span>
        <span className="latest-message">{latestMessage}</span>
      </div>
    </a>
  </li>
);

const threadListStyles = css`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ThreadList = ({ selectedThreadId, onClickThreadItem }) => {
  const [threads, setThreads] = useState(mockThreads);

  return (
    <ul className={threadListStyles}>
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
