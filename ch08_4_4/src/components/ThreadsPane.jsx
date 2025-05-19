import ThreadTopMenu from './ThreadTopMenu.jsx';
import ThreadList from './ThreadList.jsx';

const ThreadsPane = (props) => (
  <>
    <ThreadTopMenu />
    <ThreadList {...props} />
  </>
);

export default ThreadsPane;
