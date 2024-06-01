import { css } from '@linaria/core';
import { useNavigate } from 'react-router-dom';
import menuIcon from './icon-menu.svg';
import Dropdown from '#components/Dropdown.jsx';

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

const MessageTopMenu = ({ contactName }) => {
  const navigate = useNavigate();

  return (
    <header className={messageTopMenuStyles}>
      <h1>{contactName}</h1>
      <Dropdown menuItems={[
        { label: '查看联系人', onClick: () => navigate('/contacts') },
        { label: '清空消息' },
      ]}>
        <img src={menuIcon} alt="消息菜单" />
      </Dropdown>
    </header>
  );
};

export default MessageTopMenu;
