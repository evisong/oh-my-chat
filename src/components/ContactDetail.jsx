import React from 'react';
import NavigationContext from '../context/NavigationContext.jsx';

const ContactDetail = ({ contact }) => {
  if (!contact) {
    return (<div className="contact-detail">请选择联系人</div>);
  }

  const { name, avatar } = contact;
  const { gotoChatView } = React.useContext(NavigationContext);
  return (
    <>
      <div className="contact-detail">
        <img src={avatar} className="avatar" alt="头像" />
        <div className="contact-name">{name}</div>
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
