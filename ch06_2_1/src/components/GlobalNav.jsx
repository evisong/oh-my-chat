import React from 'react';
import NavigationContext from '../context/NavigationContext.jsx';
import reactLogo from '../assets/react.svg';
import contactIcon from '../assets/icon-contact.svg';
import messageIcon from '../assets/icon-message.svg';

const GlobalNav = () => {
  const { activeView, gotoChatView, gotoContactView } =
    React.useContext(NavigationContext);

  return (
    <nav>
      <img src={reactLogo} className="my-avatar" alt="我的头像" />
      <ul className="top-nav">
        <li className={activeView === 'chat' ? 'active' : undefined}>
          <a href="#" onClick={gotoChatView}>
            <img src={messageIcon} alt="消息" />
          </a>
        </li>
        <li className={activeView === 'contact' ? 'active' : undefined}>
          <a href="#" onClick={gotoContactView}>
            <img src={contactIcon} alt="联系人" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default GlobalNav;
