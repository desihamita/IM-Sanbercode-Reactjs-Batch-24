import React from 'react';
import Main from './Layouts/Main';
import './App.css';
import {UserProvider} from "./context/UserContext"

function App() {
  return (
    <>
      <UserProvider>
        <Main />
      </UserProvider>
    </>
  );
}

export default App;

