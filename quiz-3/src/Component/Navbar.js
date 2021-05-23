import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/img/logo.png"
import "../assets/css/style.css"

const Navbar = () =>{
  return(
        <div className="header">
            <img className="logo" src={logo} width="200px" />
            <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/BookStore">Book Store</Link>
                </li>
                <li>
                    <Link to="/"><Logout></Logout></Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
            </ul>
            </nav>
        </div>
  )
}
export default Navbar
