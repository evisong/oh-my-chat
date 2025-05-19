import { useState } from 'react';
import Aside from './Aside.jsx';
import Main from './Main.jsx';
import ContactsPane from './ContactsPane.jsx';
import ContactDetail from './ContactDetail.jsx';
import reactLogo from '../assets/react.svg';

const mockContacts = [
  {
    id: 1,
    name: '小帅',
    avatar: reactLogo,
  },
  {
    id: 2,
    name: '小白',
    avatar: reactLogo,
  },
  {
    id: 3,
    name: '小美',
    avatar: reactLogo,
  },
  {
    id: 4,
    name: '大壮',
    avatar: reactLogo,
  },
  {
    id: 5,
    name: '老宋',
    avatar: reactLogo,
  },
  {
    id: 6,
    name: '贾姐',
    avatar: reactLogo,
  },
];

const ContactView = () => {
  const [contacts, setContacts] = useState(mockContacts);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const selectedContact = contacts.find((c) => c.id === selectedContactId);
  return (
    <>
      <Aside>
        <ContactsPane
          contacts={contacts}
          selectedContactId={selectedContactId}
          onClickContactItem={setSelectedContactId}
        />
      </Aside>
      <Main>
        <ContactDetail contact={selectedContact} />
      </Main>
    </>
  );
};

export default ContactView;
