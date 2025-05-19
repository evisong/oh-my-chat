import { useEffect, useState, useRef, useOptimistic } from 'react';
import { flushSync } from 'react-dom';
import { ChatOllama } from '@langchain/ollama';
import { produce } from 'immer';
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
    if (threadId !== 100) {
      fetchMessages(threadId);
    } else {
      setIsLoading(false);
      setContactName('AI小助手');
      setMessages([]);
    }

    return function cleanup() {
      shouldIgnore = true;
    };
  }, [threadId]);

  return { isLoading, contactName, messages, setMessages };
};

const MessagesPane = ({ selectedThreadId }) => {
  const { isLoading, contactName, messages, setMessages } =
    useFetchMessages(selectedThreadId);
  const [optimisticMsgs, addOptimisticMsg] = useOptimistic(
    messages,
    (currentMsgs, optimisticMsg) => [...currentMsgs, optimisticMsg]
  );
  const messageFormRef = useRef(null);
  useEffect(() => {
    if (!isLoading) messageFormRef.current.focus();
  }, [isLoading]);
  const isAiThread = selectedThreadId === 100;
  const handleSubmitMessage = async (content) => {
    const newMessage = {
      content,
      from: 'me',
      fromAvatar: reactLogo,
      sentTime: new Date().toISOString(),
    };
    if (!isAiThread) {
      addOptimisticMsg({
        id: -1,
        ...newMessage,
        sending: true,
      });
      // 模拟异步请求
      await new Promise((resolve) => setTimeout(resolve, 500));
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: currentMessages.length + 1,
          ...newMessage,
        },
      ]);
    } else {
      flushSync(() => {
        setMessages((currentMessages) => [
          ...currentMessages,
          {
            id: currentMessages.length + 1,
            ...newMessage,
          },
        ]);
      });
      const llm = new ChatOllama({ model: 'llama3.1' });
      const stream = await llm.stream(content);
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: currentMessages.length + 1,
          content: '',
          from: 'ollama',
          fromAvatar: reactLogo,
          sentTime: new Date().toISOString(),
        },
      ]);
      for await (const chunk of stream) {
        setMessages((currentMessages) =>
          produce(currentMessages, (draft) => {
            draft[draft.length - 1].content += chunk.content;
          })
        );
      }
    }
  };

  return (
    <>
      <MessageTopMenu contactName={contactName} />
      <MessageList messages={optimisticMsgs} />
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
