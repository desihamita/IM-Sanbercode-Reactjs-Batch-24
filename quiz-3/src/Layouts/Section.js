import React, {useContext} from "react"
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import About from "../Pages/About"
import Home from "../Pages/Home"
import Books from "../Pages/BookStore"
import Login from "../Pages/login"
import {UserContext} from "../context/UserContext"


const Section = () =>{

  const [user] = useContext(UserContext);

  const PrivateRoute = ({user, ...props }) => {
    if (user) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const LoginRoute = ({user, ...props }) =>
  user ? <Redirect to="/" /> : <Route {...props} />;

  return(    
    <>
      <Switch>
        <Route exact path="/" user={user} component={Home}/>
        <Route exact path="/about" user={user} component={About}/>
        <LoginRoute exact path="/login" user={user} component={Login}/>
        <PrivateRoute exact path="/books" user={user} component={Books}/>
      </Switch>
    </>
  )
}

export default Section
