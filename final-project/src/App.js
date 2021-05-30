import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import Main from "./Components/layouts/Main"
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <>
       <UserProvider>
        <Main/>
      </UserProvider>
    </>
  );
}

export default App;
