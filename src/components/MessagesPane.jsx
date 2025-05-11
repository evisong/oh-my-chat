import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import MessageTopMenu from './MessageTopMenu.jsx';
import MessageList from './MessageList.jsx';
import NewMessageForm from './NewMessageForm.jsx';

const mockMessages = [
  {
    id: 1,
    content: '你好React！',
    from: 'me',
    fromAvatar: reactLogo,
    sentTime: '2023-11-04',
  },
  {
    id: 2,
    content: '你好React！',
    from: '小白',
    fromAvatar: reactLogo,
    sentTime: '2023-11-05',
  },
  {
    id: 3,
    content: '欢迎学习React Web应用开发，你现在看到的是本书的聊天应用。',
    from: 'me',
    fromAvatar: reactLogo,
    sentTime: '2023-11-06',
  },
  {
    id: 4,
    content: '这款应用有名字吗？',
    from: '小白',
    fromAvatar: reactLogo,
    sentTime: '2023-11-07',
  },
  {
    id: 5,
    content: '有的，就叫《我聊》。',
    from: 'me',
    fromAvatar: reactLogo,
    sentTime: '2023-11-08',
  },
];

const MessagesPane = () => {
  const [messages, setMessages] = useState(mockMessages);
  const handleSubmitMessage = (content) => {
    setMessages(currentMessages => {
      const newMessage = {
        id: currentMessages.length + 1,
        content,
        from: 'me',
        fromAvatar: reactLogo,
        sentTime: new Date().toISOString(),
      };
      return [...currentMessages, newMessage];
    });
  };

  return (
    <>
      <MessageTopMenu />
      <MessageList messages={messages} />
      <NewMessageForm onSubmitMessage={handleSubmitMessage} />
    </>
  );
};

export default MessagesPane;
