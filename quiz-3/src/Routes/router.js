import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../Component/Home"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"
import About from "../Component/About"
import Login from "../Component/login"
import {ThemeProvider} from  "../Component/ThemeContext"
import BookStore from "../Component/BookStore"

export default function App() {
  return (
      <>
        <Router>
            <ThemeProvider>
            <Navbar/>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
              <Route exact path="/BookStore" >
                <Login />
                <BookStore />
              </Route>
              <Route exact path="/Login">
                <Login />
              </Route>
            </Switch>
            <Footer />
          </ThemeProvider>
        </Router>    
      </>
  );
}
