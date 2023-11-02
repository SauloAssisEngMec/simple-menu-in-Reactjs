import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1> Delicious Foods company </h1>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <h2>Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

const Footer = () => {
  const hour = new Date().toLocaleTimeString();
  const hour2 = new Date().getHours();
  return (
    <footer>
      {hour} and {hour2} andwe are open folks!!!
    </footer>
  );
  // return React.createElement("footer", null, "we are open folks!!!");
};

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="pizza focaccia" />
      <h2>Pizza</h2>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
