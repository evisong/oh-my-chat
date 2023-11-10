import { useState } from 'react';
import reactLogo from './assets/react.svg';
import contactIcon from './assets/icon-contact.svg';
import menuIcon from './assets/icon-menu.svg';
import messageIcon from './assets/icon-message.svg';
import './App.css';

const ThreadsPane = () => {
  const threads = [
    {
      id: 1,
      contactName: '小帅',
      updateTime: '2023-11-04',
      latestMessage: '书名是《现代React Web应用设计开发实践》',
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
    <>
      <header className="thread-top-menu">
        <form>
          <input />
          <input type="submit" value="搜索对话" />
        </form>
        <button>新建对话</button>
      </header>
      <ul className="thread-list">
        {threads.map((thread) => (
          <li key={thread.id} className={thread.active && 'active'}>
            <a href="#">
              <img src={reactLogo} className="avatar" />
              <div className="thread">
                <span className="contact-name">{thread.contactName}</span>
                <span className="update-time">{thread.updateTime}</span>
                <span className="latest-message">{thread.latestMessage}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

const MessagesPane = () => (
  <>
    <header className="message-top-menu">
      <h1>小白</h1>
      <button>
        <img src={menuIcon} />
      </button>
    </header>
    <ul className="message-list">
      <li className="from-me">
        <img src={reactLogo} className="avatar" />
        <p className="message">你好React！</p>
      </li>
      <li>
        <img src={reactLogo} className="avatar" />
        <p className="message">你好React！</p>
      </li>
      <li className="from-me">
        <img src={reactLogo} className="avatar" />
        <p className="message">
          欢迎阅读《现代React
          Web应用设计开发实践》，你现在看到的是本书的样例应用。
        </p>
      </li>
      <li>
        <img src={reactLogo} className="avatar" />
        <p className="message">这款应用有名字吗？</p>
      </li>
      <li className="from-me">
        <img src={reactLogo} className="avatar" />
        <p className="message">有的，就叫《我聊》。</p>
      </li>
    </ul>
    <form className="compose-message">
      <textarea placeholder="请输入信息…" />
      <input type="submit" value="发送" />
    </form>
  </>
);

function App() {
  const [activeView, setActiveView] = useState('chat');

  return (
    <div className="root">
      <nav>
        <img src={reactLogo} className="my-avatar" />
        <ul className="top-nav">
          <li className={activeView === 'chat' && 'active'}>
            <a href="#" onClick={() => setActiveView('chat')}>
              <img src={messageIcon} />
            </a>
          </li>
          <li className={activeView === 'contact' && 'active'}>
            <a href="#" onClick={() => setActiveView('contact')}>
              <img src={contactIcon} />
            </a>
          </li>
        </ul>
      </nav>
      <aside>
        <ThreadsPane />
      </aside>
      <main>
        <MessagesPane />
      </main>
    </div>
  );
}

export default App;
