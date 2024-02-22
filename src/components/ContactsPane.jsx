import ContactTopMenu from './ContactTopMenu.jsx';
import ContactList from './ContactList.jsx';

const ContactsPane = (props) => (
  <>
    <ContactTopMenu />
    <ContactList {...props} />
  </>
);

export default ContactsPane;
