import { css, cx } from "@linaria/core";

const contactListItemStyles = css`
  height: 80px;

  & > a {
    padding: 0 1.2rem;
    display: flex;
    align-items: center;
    column-gap: 1.2rem;
    height: 100%;
    &:hover,
    &:active {
      background-color: #ffffff77;
    }

    & > img {
      border-radius: 50%;
      flex: 0 0 2rem;
      height: 2rem;
      background-color: #eeeeee;
    }

    & > .contact-name {
      flex: 1;
      font-size: 1.2rem;
      color: #000000;
    }
  }
`;
const activeStyles = css`
  background-color: #ffffff99;
`;

const ContactListItem = ({ contactName, contactAvatar, active, onClick }) => (
  <li className={cx(contactListItemStyles, active && activeStyles)}>
    <a href="#" onClick={onClick}>
      <img src={contactAvatar} alt="头像" />
      <div className="contact-name">{contactName}</div>
    </a>
  </li>
);

const contactListStyles = css`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ContactList = ({ contacts, selectedContactId, onClickContactItem }) => {
  return (
    <ul className={contactListStyles}>
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contactName={contact.name}
          contactAvatar={contact.avatar}
          active={contact.id === selectedContactId}
          onClick={() => onClickContactItem(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
