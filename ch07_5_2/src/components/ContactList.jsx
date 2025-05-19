const ContactListItem = ({ contactName, contactAvatar, active, onClick }) => (
  <li className={active ? 'active' : undefined}>
    <a href="#" onClick={onClick}>
      <img src={contactAvatar} className="avatar" alt="头像" />
      <div className="contact-name">{contactName}</div>
    </a>
  </li>
);

const ContactList = ({ contacts, selectedContactId, onClickContactItem }) => {
  return (
    <ul className="contact-list">
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
