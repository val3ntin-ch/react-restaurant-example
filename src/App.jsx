import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Header from "./Header";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import { CartContext } from "./context";
import { useState } from "react";

const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
