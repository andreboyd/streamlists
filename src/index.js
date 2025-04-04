import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);

// ✅ Register your custom service worker here
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("✅ Service Worker Registered", registration);
      })
      .catch((error) => {
        console.log("❌ Service Worker Registration Failed:", error);
      });
  });
}
