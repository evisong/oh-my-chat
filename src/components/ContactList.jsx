import reactLogo from '../assets/react.svg';

const ContactListItem = ({ contactName, active }) => (
  <li className={active && 'active'}>
    <a href="#">
      <img src={reactLogo} className="avatar" alt="头像" />
      <div className="contact-name">{contactName}</div>
    </a>
  </li>
);

const ContactList = () => {
  const contacts = [
    {
      id: 1,
      name: '小帅',
    },
    {
      id: 2,
      name: '小白',
    },
    {
      id: 3,
      name: '小美',
      active: true,
    },
    {
      id: 4,
      name: '大壮',
    },
    {
      id: 5,
      name: '老宋',
    },
    {
      id: 6,
      name: '贾姐',
    },
  ];

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contactName={contact.name}
          active={contact.active}
        />
      ))}
    </ul>
  );
};

export default ContactList;
