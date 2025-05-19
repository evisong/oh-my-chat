import { useEffect, useState } from 'react';
import reactLogo from '../assets/react.svg';
import MessageTopMenu from './MessageTopMenu.jsx';
import MessageList from './MessageList.jsx';
import NewMessageForm from './NewMessageForm.jsx';

const MessagesPane = ({ selectedThreadId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    let shouldIgnore = false;
    setIsLoading(true);
    const fetchMessages = async (threadId) => {
      try {
        const response = await fetch(`/api/threads/${threadId}/messages`);
        const data = await response.json();
        if (!shouldIgnore) {
          setContactName(data.contactName);
          setMessages(data.messages);
        }
      } catch (error) {
        console.error('获取消息列表失败', error);
      } finally {
        if (!shouldIgnore) {
          setIsLoading(false);
        }
      }
    };
    fetchMessages(selectedThreadId);

    return function cleanup() {
      shouldIgnore = true;
    };
  }, [selectedThreadId]);
  const handleSubmitMessage = (content) => {
    setMessages((currentMessages) => {
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
      <MessageTopMenu contactName={contactName} />
      <MessageList messages={messages} />
      <NewMessageForm onSubmitMessage={handleSubmitMessage} />
      {isLoading && (<div className="overlay-loading">加载中…</div>)}
    </>
  );
};

export default MessagesPane;
