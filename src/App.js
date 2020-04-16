import React, { useEffect } from 'react';
import Menu from './components/Menu/Menu';
import SettingsContextProvider from './context/SettingsContext';
import './App.scss';
import * as firebase from 'firebase/app';
import { DB_CONFIG } from './config/FirebaseConfig';

function App() {
  useEffect(() => {
    firebase.initializeApp(DB_CONFIG);
  });
  return (
    <div className="App">
      <SettingsContextProvider>
        <Menu />
      </SettingsContextProvider>
    </div>
  );
}

export default App;
