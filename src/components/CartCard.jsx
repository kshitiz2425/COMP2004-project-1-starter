import React from "react";
import QuantityCounter from "./QuantityCounter";

export default function CartCard({ item, removeFromCart }) {
  return (
    <div className="cart-card">
      <div className="cart-card-image-container">
        <img src={item.image} alt={item.productName} />
      </div>
      <div className="cart-info">
        <h3>{item.productName}</h3>
        <p>{item.price}</p>
        <p>{item.quantity}</p>
        <p>
          Total: ${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}
        </p>
        <QuantityCounter
          quantity={item.quantity}
          setQuantity={(qty) => addToCart(item, qty)}
        />
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}