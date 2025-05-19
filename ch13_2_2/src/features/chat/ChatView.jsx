import { useState } from 'react';
import Aside from '#components/Aside.jsx';
import Main from '#components/Main.jsx';
import ThreadsPane from './ThreadsPane.jsx';
import MessagesPane from './MessagesPane.jsx';

const ChatView = () => {
  const [selectedThreadId, setSelectedThreadId] = useState(1);

  return (
    <>
      <Aside>
        <ThreadsPane
          selectedThreadId={selectedThreadId}
          onClickThreadItem={setSelectedThreadId}
        />
      </Aside>
      <Main>
        <MessagesPane selectedThreadId={selectedThreadId} />
      </Main>
    </>
  );
};

export default ChatView;
