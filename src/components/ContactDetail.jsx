import React from 'react';
import NavigationContext from '../context/NavigationContext.jsx';
import reactLogo from '../assets/react.svg';

const ContactDetail = () => {
  const { gotoChatView } = React.useContext(NavigationContext);
  return (
    <>
      <div className="contact-detail">
        <img src={reactLogo} className="avatar" alt="头像" />
        <div className="contact-name">小美</div>
      </div>
      <div className="contact-actions">
        <button onClick={gotoChatView} className="primary-button">
          发消息
        </button>
        <button className="secondary-button">修改联系人</button>
        <button className="secondary-button">删除联系人</button>
      </div>
    </>
  );
};

export default ContactDetail;
