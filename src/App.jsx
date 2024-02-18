import './App.css';
import { NavigationCtxProvider } from './context/NavigationContext.jsx';
import GlobalNav from './components/GlobalNav.jsx';
import GlobalView from './components/GlobalView.jsx';

function App() {
  return (
    <NavigationCtxProvider>
      <div className="root">
        <GlobalNav />
        <GlobalView />
      </div>
    </NavigationCtxProvider>
  );
}

export default App;
