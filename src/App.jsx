import { useState } from 'react';
import reactLogo from './assets/react.svg';
import contactIcon from './assets/icon-contact.svg';
import menuIcon from './assets/icon-menu.svg';
import messageIcon from './assets/icon-message.svg';
import './App.css';

const ThreadTopMenu = () => (
  <header className="thread-top-menu">
    <form>
      <input maxLength={20} />
      <input type="submit" value="搜索对话" />
    </form>
    <button>新建对话</button>
  </header>
);

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

const ThreadsPane = () => (
  <>
    <ThreadTopMenu />
    <ThreadList />
  </>
);

const MessageTopMenu = () => (
  <header className="message-top-menu">
    <h1>小白</h1>
    <button>
      <img src={menuIcon} alt="消息菜单" />
    </button>
  </header>
);

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
        欢迎学习React Web应用开发，你现在看到的是本书的聊天应用。
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

const NewMessageForm = () => (
  <form className="compose-message">
    <textarea placeholder="请输入消息…" />
    <input type="submit" value="发送" />
  </form>
);

const MessagesPane = () => (
  <>
    <MessageTopMenu />
    <MessageList />
    <NewMessageForm />
  </>
);

const ChatView = () => (
  <>
    <aside>
      <ThreadsPane />
    </aside>
    <main>
      <MessagesPane />
    </main>
  </>
);

const ContactsPane = () => {
  const contacts = [
    {
      id: 1,
      name: '小帅',
    },
    {
      id: 2,
      name: '小白',
    },
    {
      id: 3,
      name: '小美',
      active: true,
    },
    {
      id: 4,
      name: '大壮',
    },
    {
      id: 5,
      name: '老宋',
    },
    {
      id: 6,
      name: '贾姐',
    },
  ];

  return (
    <>
      <header className="contact-top-menu">
        <form>
          <input maxLength={20} />
          <input type="submit" value="搜索联系人" />
        </form>
        <button>添加联系人</button>
      </header>
      <ul className="contact-list">
        {contacts.map((contact) => (
          <li key={contact.id} className={contact.active && 'active'}>
            <a href="#">
              <img src={reactLogo} className="avatar" alt="头像" />
              <div className="contact-name">{contact.name}</div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

const ContactDetail = () => (
  <>
    <div className="contact-detail">
      <img src={reactLogo} className="avatar" alt="头像" />
      <div className="contact-name">小美</div>
    </div>
    <div className="contact-actions">
      <button className="primary-button">发消息</button>
      <button className="secondary-button">修改联系人</button>
      <button className="secondary-button">删除联系人</button>
    </div>
  </>
);

const ContactView = () => (
  <>
    <aside>
      <ContactsPane />
    </aside>
    <main>
      <ContactDetail />
    </main>
  </>
);

function App() {
  const [activeView, setActiveView] = useState('chat');

  return (
    <div className="root">
      <nav>
        <img src={reactLogo} className="my-avatar" alt="我的头像" />
        <ul className="top-nav">
          <li className={activeView === 'chat' ? 'active' : undefined}>
            <a href="#" onClick={() => setActiveView('chat')}>
              <img src={messageIcon} alt="消息" />
            </a>
          </li>
          <li className={activeView === 'contact' ? 'active' : undefined}>
            <a href="#" onClick={() => setActiveView('contact')}>
              <img src={contactIcon} alt="联系人" />
            </a>
          </li>
        </ul>
      </nav>
      {activeView === 'chat' ? <ChatView /> : <ContactView />}
    </div>
  );
}

export default App;
