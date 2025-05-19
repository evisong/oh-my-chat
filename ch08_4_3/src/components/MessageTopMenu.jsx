import React, { useEffect, useRef, useState } from 'react';
import { css } from '@linaria/core';
import NavigationContext from '../context/NavigationContext.jsx';
import menuIcon from '../assets/icon-menu.svg';

const messageTopMenuStyles = css`
  flex: 0 0 5rem;
  padding: 0 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #9a9a9a;
  height: 80px;
  background-color: #efefef;

  & > h1 {
    font-size: 1.4rem;
  }

  & button > img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const dropdownWrapStyles = css`
  position: relative;
`;
const dropdownStyles = css`
  position: absolute;
  right: 0;
  margin: -1px 0 0;
  padding:  0;
  border: 1px solid #9a9a9a;
  border-radius: 3px;
  background-color: #f9f9f9;
  min-width: 8rem;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;

  & > li {
    margin: 0.5rem;
    list-style: none;
  }

  & > li > button {
    width: 100%;
  }
`;

const MessageTopMenu = ({ contactName }) => {
  const { gotoContactView } = React.useContext(NavigationContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownClick = () => setIsDropdownOpen(true);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (evt) => {
      if (dropdownRef.current && !dropdownRef.current.contains(evt.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return function cleanup() {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className={messageTopMenuStyles}>
      <h1>{contactName}</h1>
      <div className={dropdownWrapStyles}>
        <button onClick={handleDropdownClick}>
          <img src={menuIcon} alt="消息菜单" />
        </button>
        {isDropdownOpen && (
          <ul ref={dropdownRef} className={dropdownStyles}>
            <li>
              <button onClick={gotoContactView}>查看联系人</button>
            </li>
            <li>
              <button>清空消息</button>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default MessageTopMenu;
