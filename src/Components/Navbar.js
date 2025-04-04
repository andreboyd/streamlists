import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../Context/CartContext";
import "../CSS/styles.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">StreamList</Link></li>
        <li><Link to="/movies">Movies</Link></li>        
        <li><Link to="/about">About</Link></li>
        <li style={{ position: "relative" }}>
          <Link to="/cart">
            <FiShoppingCart />
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
