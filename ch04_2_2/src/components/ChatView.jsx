import ThreadsPane from './ThreadsPane.jsx';
import MessagesPane from './MessagesPane.jsx';

const ChatView = () => (
  <>
    <aside>
      <ThreadsPane />
    </aside>
    <main>
      <MessagesPane />
    </main>
  </>
);

export default ChatView;
