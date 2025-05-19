import reactLogo from '../assets/react.svg';

const ThreadList = () => {
  const threads = [
    {
      id: 1,
      contactName: '小帅',
      updateTime: '2023-11-04',
      latestMessage: '书的主题是现代React Web应用的设计开发实践。',
    },
    {
      id: 2,
      contactName: '小白',
      updateTime: '2023-11-03',
      latestMessage: '有的，就叫《我聊》。',
      active: true,
    },
    {
      id: 3,
      contactName: '小美',
      updateTime: '2023-11-02',
      latestMessage: '现代React Web应用设计开发实践',
    },
    {
      id: 4,
      contactName: '大壮',
      updateTime: '2023-11-02',
      latestMessage: 'Web应用的名字叫《我聊》',
    },
    {
      id: 5,
      contactName: '老宋',
      updateTime: '2023-10-31',
      latestMessage: '项目名为oh-my-chat',
    },
  ];

  return (
    <ul className="thread-list">
      {threads.map((thread) => (
        <li key={thread.id} className={thread.active && 'active'}>
          <a href="#">
            <img src={reactLogo} className="avatar" alt="头像" />
            <div className="thread">
              <span className="contact-name">{thread.contactName}</span>
              <span className="update-time">{thread.updateTime}</span>
              <span className="latest-message">{thread.latestMessage}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ThreadList;
