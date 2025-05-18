import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { css } from '@linaria/core';
import ThreadTopMenu from './ThreadTopMenu.jsx';
import ThreadList from './ThreadList.jsx';

const statusStyles = css`
  padding: 0.5rem;
  text-align: center;
`;

const ThreadsPane = (props) => (
  <>
    <ThreadTopMenu />
    <ErrorBoundary fallback={<div className={statusStyles}>加载失败</div>}>
      <Suspense fallback={<div className={statusStyles}>加载中...</div>}>
        <ThreadList {...props} />
      </Suspense>
    </ErrorBoundary>
  </>
);

export default ThreadsPane;
