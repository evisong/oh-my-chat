import React, { useEffect, useRef, useState } from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';

const Li = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  column-gap: 1.2rem;
  min-height: 2rem;
`;

const MessageLi = styled(Li)`
  flex-direction: ${({fromMe}) => (fromMe ? 'row-reverse' : 'row')};

  & > img {
    border-radius: 50%;
    flex: 0 0 2rem;
    height: 2rem;
    background-color: #eeeeee;
  }

  & > .message {
    flex: 0 1 auto;
    max-width: 50%;
    margin: 0 0 1.5rem;
    padding: 0.6rem 1.2rem;
    border: 1px solid #bbbbbb;
    border-radius: 5px;
    background-color: #8dfa69;
  }
`;

const MessageItem = ({ content, from, fromAvatar }) => (
  <MessageLi fromMe={from === 'me'}>
    <img src={fromAvatar} alt="头像" />
    <p className="message">{content}</p>
  </MessageLi>
);

const TimestampLi = styled(Li)`
  justify-content: center;
  color: #9a9a9a;
  font-size: 0.8rem;
`;

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const UPDATE_INTERVAL = MINUTE;
const MessageTimestamp = ({ sentTime }) => {
  const [timestamp, setTimestamp] = useState('');
  useEffect(() => {
    const refresh = () => {
      const timePassed = new Date() - new Date(sentTime);
      let relativeTime = '刚刚';
      if (MINUTE <= timePassed && timePassed < HOUR) {
        relativeTime = `${Math.ceil(timePassed / MINUTE)} 分钟前`;
      } else if (HOUR <= timePassed && timePassed < DAY) {
        relativeTime = `${Math.ceil(timePassed / HOUR)} 小时前`;
      } else if (DAY <= timePassed) {
        relativeTime = new Intl.DateTimeFormat(undefined, {
          dateStyle: 'medium',
          timeStyle: 'medium',
        }).format(new Date(sentTime));
      }
      setTimestamp(relativeTime);
    };
    const intervalId = setInterval(refresh, UPDATE_INTERVAL);
    refresh();
    return function cleanup() {
      clearInterval(intervalId);
    };
  }, [sentTime]);

  return (
    <TimestampLi>{timestamp}</TimestampLi>
  );
};

const messageListStyles = css`
  flex: 1;
  margin: 0 1.2rem;
  padding: 1.2rem 0;
  list-style: none;
  overflow-x: hidden;
  overflow-y: auto;
`;

const MessageList = ({ messages }) => {
  const lastLiRef = useRef();
  useEffect(
    () =>
      lastLiRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      }),
    [messages]
  );

  return (
    <ul className={messageListStyles}>
      {messages.map((message, idx, arr) => (
        <React.Fragment key={message.id}>
          {(idx > 0 && shouldHideSentTime(arr[idx - 1], arr[idx])) || (
            <MessageTimestamp sentTime={message.sentTime} />
          )}
          <MessageItem {...message} />
        </React.Fragment>
      ))}
      <li style={{ minHeight: 0 }} ref={lastLiRef} />
    </ul>
  );
};

function shouldHideSentTime(prevMsg, currMsg) {
  const prevTime = new Date(prevMsg.sentTime).getTime();
  const currTime = new Date(currMsg.sentTime).getTime();
  return currTime - prevTime < 1000 * 60 * 3;
}

export default MessageList;
