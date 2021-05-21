import React from "react"
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Tugas-9</Link>
                    </li>
                    <li>
                    <Link to="/Tugas-10">Tugas-10</Link>
                    </li>
                    <li>
                    <Link to="/Tugas-11">Tugas-11</Link>
                    </li>
                    <li>
                    <Link to="/Tugas-12">Tugas-12</Link>
                    </li>
                    <li>
                    <Link to="/Tugas-13">Tugas-13</Link>
                    </li>
                    <li>
                    <Link to="/Tugas-14">Tugas-14</Link>
                    </li>
                    <li>
                    <Link to="/Tugas-15">Tugas-15</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar