import Aside from '#components/Aside.jsx';
import Main from '#components/Main.jsx';
import ContactsPane from './ContactsPane.jsx';
import ContactDetail from './ContactDetail.tsx';
import useChatStore from '#stores/chatStore.js';

const ContactView = () => {
  const contacts = useChatStore((state) => state.contacts);
  const selectedContactId = useChatStore((s) => s.selectedContactId);
  const selectContactById = useChatStore((s) => s.selectContactById);
  const selectedContact = contacts.find((c) => c.id===selectedContactId);

  return (
    <>
      <Aside>
        <ContactsPane
          contacts={contacts}
          selectedContactId={selectedContactId}
          onClickContactItem={selectContactById}
        />
      </Aside>
      <Main>
        <ContactDetail contact={selectedContact} />
      </Main>
    </>
  );
};

export default ContactView;
