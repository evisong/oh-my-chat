import React, { useEffect, useRef, useState } from 'react';
import NavigationContext from '../context/NavigationContext';
import menuIcon from '../assets/icon-menu.svg';

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
    <header className="message-top-menu">
      <h1>{contactName}</h1>
      <div className="dropdown-wrap">
        <button onClick={handleDropdownClick}>
          <img src={menuIcon} alt="消息菜单" />
        </button>
        {isDropdownOpen && (
          <ul ref={dropdownRef} className="dropdown">
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
