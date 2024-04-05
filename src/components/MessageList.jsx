import React from 'react';

const MessageList = ({ messages }) => {
  const dataTimeFormat = new Intl.DateTimeFormat(undefined, {dateStyle:'medium', timeStyle: 'medium'});

  return (
    <ul className="message-list">
      {messages.map(({ id, content, from, fromAvatar, sentTime }, idx, arr) => (
        <React.Fragment key={id}>
          {(idx > 0 && shouldHideSentTime(arr[idx - 1], arr[idx])) || (
            <li className="timestamp">
              {dataTimeFormat.format(new Date(sentTime))}
            </li>
          )}
          <li className={from === 'me' ? 'from-me' : undefined}>
            <img src={fromAvatar} className="avatar" alt="头像" />
            <p className="message">{content}</p>
          </li>
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
