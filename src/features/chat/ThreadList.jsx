import { useEffect } from 'react';
import { css, cx } from '@linaria/core';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import useChatStore from '#stores/chatStore.js';

const threadListItemStyles = css`
  height: 80px;
  & > a {
    padding: 0 1.2rem;
    display: flex;
    align-items: center;
    column-gap: 1.2rem;
    height: 100%;
    &:hover,
    &:active {
      background-color: #ffffff77;
    }
    & > img {
      border-radius: 50%;
      flex: 0 0 2rem;
      height: 2rem;
      background-color: #eeeeee;
    }
  }
`;
const threadStyles = css`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  overflow: hidden;
  & > .contact-name {
    flex: 2;
    font-size: 1.2rem;
    color: #000000;
  }
  & > .update-time {
    flex: 1;
    color: #9a9a9a;
  }
  & > .latest-message {
    flex: 0 0 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #9a9a9a;
  }
`;
const activeStyles = css`
  background-color: #ffffff99;
`;

const ThreadListItem = ({
  contactName,
  contactAvatar,
  updateTime,
  latestMessage,
  active,
  onClick,
}) => (
  <li className={cx(threadListItemStyles, active && activeStyles)}>
    <a href="#" onClick={onClick}>
      <img src={contactAvatar} alt="头像" />
      <div className={threadStyles}>
        <span className="contact-name">{contactName}</span>
        <span className="update-time">{updateTime}</span>
        <span className="latest-message">{latestMessage}</span>
      </div>
    </a>
  </li>
);

const threadListStyles = css`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  overflow-x: hidden;
  overflow-y: auto;
`;
const statusStyles = css`
  padding: 0.5rem;
  text-align: center;
`;

const ThreadList = ({ selectedThreadId, onClickThreadItem }) => {
  const queryClient = useQueryClient();
  const { data, isPending, isError } = useQuery({
    queryKey: ['threads'],
    queryFn: () => fetch('/api/threads').then((res) => res.json()),
  });
  const mutation = useMutation({
    mutationFn: (newThread) =>
      fetch('/api/threads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newThread),
      }).then((res) => res.json()),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['threads'] }),
  });
  const contacts = useChatStore((state) => state.contacts);
  const threadsWithContactInfo = data?.threads?.map((thread) => {
    const contact = contacts.find((c) => c.id === thread.contactId);
    return {
      ...thread,
      contactName: contact.name,
      contactAvatar: contact.avatar,
    };
  }) || [];
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (!data || !searchParams.has('contactId')) {
      return;
    }
    const { threads } = data;
    const targetContactId = parseInt(searchParams.get('contactId'));
    const targetId = threads.find((t) => t.contactId === targetContactId)?.id;
    if (targetId) {
      onClickThreadItem(targetId);
      setSearchParams({});
    } else if (mutation.isIdle) {
      mutation.mutate({ contactId: targetContactId });
    }
  }, [searchParams, setSearchParams, data, onClickThreadItem, mutation]);

  return (
    <ul className={threadListStyles} data-testid="threadList">
      {isPending && <li className={statusStyles}>加载中...</li>}
      {isError && <li className={statusStyles}>加载失败，请刷新页面重试</li>}
      {mutation.isPending && <li className={statusStyles}>新建对话中...</li>}
      {threadsWithContactInfo.map((thread) => (
        <ThreadListItem
          key={thread.id}
          active={thread.id === selectedThreadId}
          onClick={() => onClickThreadItem(thread.id)}
          {...thread}
        />
      ))}
    </ul>
  );
};

export default ThreadList;
