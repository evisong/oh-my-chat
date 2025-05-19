import { css } from '@linaria/core';
import './App.css';
import { NavigationCtxProvider } from '../context/NavigationContext.jsx';
import GlobalNav from './nav/GlobalNav.jsx';
import GlobalView from './GlobalView.jsx';

const rootStyles = css`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

function App() {
  return (
    <NavigationCtxProvider>
      <div className={rootStyles}>
        <GlobalNav />
        <GlobalView />
      </div>
    </NavigationCtxProvider>
  );
}

export default App;
