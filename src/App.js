import React from 'react';
import Menu from './components/Menu/Menu';
import SettingsContextProvider from './context/SettingsContext';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SettingsContextProvider>
        <Menu />
      </SettingsContextProvider>
    </div>
  );
}

export default App;
