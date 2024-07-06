import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
