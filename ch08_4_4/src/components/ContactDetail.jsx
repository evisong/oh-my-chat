import React from 'react';
import { css } from '@linaria/core';
import NavigationContext from '../context/NavigationContext.jsx';

const contactDetailStyles = css`
  flex: 2;
  padding: 5rem 30% 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .avatar {
    border-radius: 50%;
    width: 5;
    height: 5rem;
    background-color: #eeeeee;
  }

  & > .contact-name {
    margin: 1.2rem;
    font-size: 1.6rem;
  }
`;
const contactActionsStyles = css`
  flex: 1;
  padding: 2rem 30%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 1rem;

  & > .primary-button {
    flex: 2 0 100%;
    height: 2rem;
  }

  & > .secondary-button {
    flex: 1;
    min-width: 6rem;
    height: 2rem;
  }
`;

const ContactDetail = ({ contact }) => {
  const { gotoChatView } = React.useContext(NavigationContext);
  if (!contact) {
    return (<div className={contactDetailStyles}>请选择联系人</div>);
  }

  const { name, avatar } = contact;
  return (
    <>
      <div className={contactDetailStyles}>
        <img src={avatar} className="avatar" alt="头像" />
        <div className="contact-name">{name}</div>
      </div>
      <div className={contactActionsStyles}>
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
