import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "../CSS/Cart.css";  

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-grid">
          {cart.map((movie) => (
            <div key={movie.id} className="cart-item">
              <Link to={`/movie/${movie.id}`}>
                <img
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                <h3>{movie.title}</h3>
              </Link>
              <button onClick={() => removeFromCart(movie.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
