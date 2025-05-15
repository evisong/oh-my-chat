import React from 'react';
import { css, cx } from '@linaria/core';
import NavigationContext from '../context/NavigationContext.jsx';
import reactLogo from '../assets/react.svg';
import contactIcon from '../assets/icon-contact.svg';
import messageIcon from '../assets/icon-message.svg';

const navStyles = css`
  margin: 28px 0;
  flex: 0 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const myAvatarStyles = css`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: #eeeeee;
`;
const topNavStyles = css`
  margin: 16px 0;
  padding: 0;
  list-style: none;
  width: 100%;

  & > li {
    height: 80px;
    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      &:hover,
      &:active {
        background-color: #ffffff11;
      }
      & > img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;
const activeStyles = css`
  background-color: #ffffff33;
`;

const GlobalNav = () => {
  const { activeView, gotoChatView, gotoContactView } =
    React.useContext(NavigationContext);

  return (
    <nav className={navStyles}>
      <img src={reactLogo} className={myAvatarStyles} alt="我的头像" />
      <ul className={topNavStyles}>
        <li className={cx(activeView === 'chat' && activeStyles)}>
          <a href="#" onClick={gotoChatView}>
            <img src={messageIcon} alt="消息" />
          </a>
        </li>
        <li className={cx(activeView === 'contact' && activeStyles)}>
          <a href="#" onClick={gotoContactView}>
            <img src={contactIcon} alt="联系人" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default GlobalNav;
