import { useState } from 'react';
import reactLogo from './assets/react.svg';
import contactIcon from './assets/icon-contact.svg';
import messageIcon from './assets/icon-message.svg';
import './App.css';
import ChatView from './components/ChatView.jsx';
import ContactView from './components/ContactView.jsx';

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
