import { useState } from 'react';
import reactLogo from './assets/react.svg';
import contactIcon from './assets/icon-contact.svg';
import messageIcon from './assets/icon-message.svg';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('chat');
  const threads = [
    { id: 1, contactName: '小帅', updateTime: '2023-11-04', latestMessage: '书名是《现代React Web应用设计开发实践》' },
    { id: 2, contactName: '小帅', updateTime: '2023-11-04', latestMessage: '书名是《现代React Web应用设计开发实践》', active: true },
    { id: 3, contactName: '小帅', updateTime: '2023-11-04', latestMessage: '书名是《现代React Web应用设计开发实践》' },
    { id: 4, contactName: '小帅', updateTime: '2023-11-04', latestMessage: '书名是《现代React Web应用设计开发实践》' },
  ];

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
        <nav className="thread-top-menu">
          <form>
            <input /><input type="submit" value="搜索对话" />
          </form>
          <button>新建对话</button>
        </nav>
        <ul className="thread-list">
          {
            threads.map(thread => (
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
            ))
          }
        </ul>
      </aside>
      <main>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </main>
    </div>
  );
}

export default App;
