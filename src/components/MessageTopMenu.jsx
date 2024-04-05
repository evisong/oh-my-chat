import React from 'react';
import NavigationContext from '../context/NavigationContext.jsx';
import menuIcon from '../assets/icon-menu.svg';

const MessageTopMenu = ({ contactName }) => {
  const { gotoContactView } = React.useContext(NavigationContext);

  return (
    <header className="message-top-menu">
      <h1>{contactName}</h1>
      <button onClick={gotoContactView}>
        <img src={menuIcon} alt="消息菜单" />
      </button>
    </header>
  );
};

export default MessageTopMenu;
