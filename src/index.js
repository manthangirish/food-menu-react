import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const dishData = [
  {
    name: "Masala Dosa",
    ingredients: "Dosa served with red chutney",
    price: 70,
    photoName: "menu/dosa.jpg",
    soldOut: false,
  },
  {
    name: "Idli",
    ingredients: "Idli with chutney and sambar",
    price: 65,
    photoName: "menu/idli.jpg",
    soldOut: false,
  },
  {
    name: "Poori",
    ingredients: "Two poori served with vegetable curry",
    price: 75,
    photoName: "menu/poori.jpg",
    soldOut: false,
  },
  {
    name: "Upma",
    ingredients: "Made with fresh rawa",
    price: 65,
    photoName: "menu/upma.jpg",
    soldOut: true,
  },
  {
    name: "Lemon Rice",
    ingredients: "Rice, lemon and peanuts",
    price: 80,
    photoName: "menu/lemonRice.jpg",
    soldOut: true,
  },
  {
    name: "Bisi Bele Bath",
    ingredients: "Regional dish served with kara",
    price: 85,
    photoName: "menu/bisiBeleBath.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Bengaluru Canteen</h1>
    </header>
  );
}

function Menu() {
  const data = dishData;
  return (
    <ul className="items">
      {data.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  console.log(item);

  return (
    <li className={`pizza ${item.soldOut ? "sold-out" : ""}`}>
      <img src={item.photoName} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.ingredients}</p>

        <span>{item.soldOut ? "SOLD OUT" : item.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 7;
  const closeHour = 16;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
