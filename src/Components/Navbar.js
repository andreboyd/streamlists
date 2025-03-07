import React from "react";
import { Link } from "react-router-dom";
import "../CSS/styles.css";
import { FiShoppingCart } from "react-icons/fi";


function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">StreamList</Link></li>
        <li><Link to="/movies">Movies</Link></li>        
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart"><FiShoppingCart/></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;