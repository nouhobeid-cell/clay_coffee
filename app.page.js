"use client";

import { useState } from "react";

const menu = [
  { id: 1, name: "Espresso", price: 2.5 },
  { id: 2, name: "Latte", price: 3.5 },
  { id: 3, name: "Iced Coffee", price: 3 },
  { id: 4, name: "Cheesecake", price: 4 }
];

export default function Home() {
  const [cart, setCart] = useState([]);

  const add = (item) => setCart([...cart, item]);

  const total = cart.reduce((a, b) => a + b.price, 0);

  const checkout = () => {
    alert("Order sent to CLAY ☕🔥");
    setCart([]);
  };

  return (
    <main style={{ padding: 20, background: "#0a0a0a", color: "white", minHeight: "100vh" }}>
      <h1>CLAY ☕</h1>
      <p>University Coffee System</p>

      <h2>Menu</h2>
      {menu.map((item) => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          {item.name} - ${item.price}
          <button onClick={() => add(item)} style={{ marginLeft: 10 }}>
            Add
          </button>
        </div>
      ))}

      <hr />

      <h2>Cart</h2>
      {cart.map((i, idx) => (
        <p key={idx}>{i.name} - ${i.price}</p>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>

      <button onClick={checkout}>Confirm Order</button>
    </main>
  );
}
