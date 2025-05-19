import { useEffect, useRef, useState } from 'react';
import { css } from '@linaria/core';

const dropdownWrapStyles = css`
  position: relative;
`;
const dropdownStyles = css`
  position: absolute;
  right: 0;
  margin: -1px 0 0;
  padding: 0;
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

const Dropdown = ({ children, menuItems }) => {
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
    <div className={dropdownWrapStyles}>
      <button onClick={handleDropdownClick}>{children}</button>
      {isDropdownOpen && (
        <ul ref={dropdownRef} className={dropdownStyles}>
          {menuItems.map(({ label, onClick }) => (
            <li key={label}>
              <button
                onClick={(evt) => {
                  onClick && onClick(evt);
                  setIsDropdownOpen(false);
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
