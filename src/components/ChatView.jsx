import { useState } from 'react';
import ThreadsPane from './ThreadsPane.jsx';
import MessagesPane from './MessagesPane.jsx';

const ChatView = () => {
  const [selectedThreadId, setSelectedThreadId] = useState(1);

  return (
    <>
      <aside>
        <ThreadsPane
          selectedThreadId={selectedThreadId}
          onClickThreadItem={setSelectedThreadId}
        />
      </aside>
      <main>
        <MessagesPane selectedThreadId={selectedThreadId} />
      </main>
    </>
  );
};

export default ChatView;
