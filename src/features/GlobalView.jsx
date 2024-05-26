import React from 'react';
import NavigationContext from '../context/NavigationContext.jsx';
import ChatView from './chat/ChatView.jsx';
import ContactView from './contact/ContactView.jsx';

const GlobalView = () => {
  const { activeView } = React.useContext(NavigationContext);
  return activeView === 'chat' ? <ChatView /> : <ContactView />;
};

export default GlobalView;
