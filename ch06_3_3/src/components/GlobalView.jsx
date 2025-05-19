import React from 'react';
import NavigationContext from '../context/NavigationContext.jsx';
import ChatView from './ChatView.jsx';
import ContactView from './ContactView.jsx';

const GlobalView = () => {
  const { activeView } = React.useContext(NavigationContext);
  return activeView === 'chat' ? <ChatView /> : <ContactView />;
};

export default GlobalView;
