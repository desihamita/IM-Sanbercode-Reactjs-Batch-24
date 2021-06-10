import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import './App.css'
import 'antd/dist/antd.css'
import Main from "./Components/layouts/Main"
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <>
       <UserProvider>
         <Router>
           <Main/>
         </Router>
      </UserProvider>
    </>
  );
}

export default App;
