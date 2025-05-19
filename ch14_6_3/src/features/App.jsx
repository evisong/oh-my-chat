import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router';
import { css } from '@linaria/core';
import './App.css';
import GlobalNav from './nav/GlobalNav.jsx';
import ChatView from './chat/ChatView.jsx';
import ContactView from './contact/ContactView.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate replace to="/chat" />} />
      <Route path="chat" element={<ChatView />} />
      <Route path="contacts" element={<ContactView />} />
    </Route>
  )
);

const rootStyles = css`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

function Layout() {
  return (
    <div className={rootStyles}>
      <GlobalNav />
      <Outlet />
    </div>
  );
}

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
