import React, { useContext } from "react"
import { Link } from "react-router-dom";
import "../css/Nav.css"
import { ThemeContext } from "./ThemeContext";


const Navbar = () =>{
  const [theme] = useContext(ThemeContext)

  const navClassName = theme === "dark" ? "dark-nav" : "light-nav";

  return(
    <nav className={navClassName}>
      <ul>
        <li>
          <Link to="/">Tugas 9</Link>
        </li>
        <li>
          <Link to="/tugas10">Tugas 10</Link>
        </li>

        <li>
          <Link to="/tugas11">Tugas 11</Link>
        </li>
        <li>
          <Link to="/tugas12">Tugas 12</Link>
        </li>
        <li>
          <Link to="/tugas13">Tugas 13</Link>
        </li>
        <li>
          <Link to="/tugas14">Tugas 14</Link>
        </li>
        <li>
          <Link to="/tugas15">Tugas 15</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
