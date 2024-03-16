import menuIcon from '../assets/icon-menu.svg';

const MessageTopMenu = () => (
  <header className="message-top-menu">
    <h1>小白</h1>
    <button>
      <img src={menuIcon} alt="消息菜单" />
    </button>
  </header>
);

export default MessageTopMenu;
