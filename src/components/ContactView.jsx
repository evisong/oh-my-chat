import ContactsPane from './ContactsPane.jsx';
import ContactDetail from './ContactDetail.jsx';

const ContactView = () => (
  <>
    <aside>
      <ContactsPane />
    </aside>
    <main>
      <ContactDetail />
    </main>
  </>
);

export default ContactView;
