import { useEffect, useState, useRef } from 'react';
import { css } from '@linaria/core';
import reactLogo from '#assets/react.svg';
import MessageTopMenu from './MessageTopMenu.jsx';
import MessageList from './MessageList.jsx';
import NewMessageForm from './NewMessageForm.jsx';

const overlayLoadingStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: start;
`;

const useFetchMessages = (threadId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    let shouldIgnore = false;
    setIsLoading(true);
    const fetchMessages = async (tid) => {
      try {
        const response = await fetch(`/api/threads/${tid}/messages`);
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
    fetchMessages(threadId);

    return function cleanup() {
      shouldIgnore = true;
    };
  }, [threadId]);

  return { isLoading, contactName, messages, setMessages };
};

const MessagesPane = ({ selectedThreadId }) => {
  const { isLoading, contactName, messages, setMessages } =
    useFetchMessages(selectedThreadId);
  const messageFormRef = useRef(null);
  useEffect(() => {
    if (!isLoading) messageFormRef.current.focus();
  }, [isLoading]);
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
      <NewMessageForm
        key={selectedThreadId}
        onSubmitMessage={handleSubmitMessage}
        ref={messageFormRef}
      />
      {isLoading && <div className={overlayLoadingStyles}>加载中…</div>}
    </>
  );
};

export default MessagesPane;
