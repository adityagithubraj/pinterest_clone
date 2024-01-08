// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import "./nav.css";
import logo from "../assets/react.svg";

function Nav() {
  return (
    <div className='navbar'>
      <img className='logoin' src={logo} alt="logo" />
      <ul>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>

        <li>
          <Link to="/createpost">Create-post</Link>
        </li>

        
      </ul>
    </div>
  );
}

export default Nav;
