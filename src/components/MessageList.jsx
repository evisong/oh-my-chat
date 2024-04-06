import React from 'react';

const MessageItem = ({ content, from, fromAvatar }) => (
  <li className={from === 'me' ? 'from-me' : undefined}>
    <img src={fromAvatar} className="avatar" alt="头像" />
    <p className="message">{content}</p>
  </li>
);

const MessageTimestamp = ({ sentTime }) => {
  const formatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'medium',
  });
  const timestamp = formatter.format(new Date(sentTime));
  return (
    <li className="timestamp">{timestamp}</li>
  );
};

const MessageList = ({ messages }) => {
  return (
    <ul className="message-list">
      {messages.map((message, idx, arr) => (
        <React.Fragment key={message.id}>
          {(idx > 0 && shouldHideSentTime(arr[idx - 1], arr[idx])) || (
            <MessageTimestamp sentTime={message.sentTime} />
          )}
          <MessageItem {...message} />
        </React.Fragment>
      ))}
    </ul>
  );
};

function shouldHideSentTime(prevMsg, currMsg) {
  const prevTime = new Date(prevMsg.sentTime).getTime();
  const currTime = new Date(currMsg.sentTime).getTime();
  return currTime - prevTime < 1000 * 60 * 3;
}

export default MessageList;
