import React, { useState, useMemo } from 'react';

const NavigationContext = React.createContext();

export const NavigationCtxProvider = ({ children }) => {
  const [activeView, setActiveView] = useState('chat');
  const contextValue = useMemo(
    () => ({
      activeView,
      gotoChatView: () => setActiveView('chat'),
      gotoContactView: () => setActiveView('contact'),
    }),
    [activeView, setActiveView]
  );

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
