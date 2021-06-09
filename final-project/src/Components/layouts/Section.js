import React, {useContext} from "react";
import "../../assets/css/style.css";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

import Login from "../pages/Login"
import Register from "../pages/Register"
import changePassword from "../pages/changePassword"

import Movie from "../pages/MovieHome"
import Game from "../pages/GameHome"
import Home from "../pages/Home"

import MovieList from "../pages/Movies/MovieList"
import MovieForm from "../pages/Movies/MovieForm"
import MovieDetails from "../pages/Movies/MovieDetails"

import GameList from "../pages/Games/GameList"
import GameForm from "../pages/Games/GameForm"
import GameDetails from "../pages/Games/GameDetails"

const Section = () => {
  const [user] = useContext(UserContext)
  const PrivateRoute = ({...rest}) =>{
    if (user){
      return <Route {...rest}/>
    }else{
      return <Redirect to="/login" />
    }
  }

  const LoginRoute = ({...rest}) =>{
    if (user){
      return <Redirect to="/" />
    }else{
      return <Route {...rest}/>
    }
  }
  
  return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/movie" component={Movie}></Route>
          <Route exact path="/game" component={Game}></Route>

          <LoginRoute exact path="/register" component={Register}></LoginRoute>
          <LoginRoute exact path="/login" component={Login}></LoginRoute>
          <Route exact path="/changePassword" component={changePassword}></Route>

          <Route exact path="/movie" component={MovieList}></Route>
          <Route exact path="/movie/create" component={MovieForm}></Route>
          <Route exact path="/movie/edit/:id" component={MovieForm}></Route>
          <Route exact path="/movie/details/:id" component={MovieDetails}></Route>

          <Route exact path="/game" component={GameList}></Route>
          <Route exact path="/game/create" component={GameForm}></Route>
          <Route exact path="/game/edit/:id" component={GameForm}></Route>
          <Route exact path="/game/details/:id" component={GameDetails}></Route>
        </Switch>
      </div>
  );
}

export default Section
