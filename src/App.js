import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement(
      "div",
      {},

      [
        React.createElement("h1", {}, "Restaurant"),
        React.createElement(Pizza, {
          name: "Pepperoni",
          description: "Mozzarella Cheese, Pepperoni",
        }),
        React.createElement(Pizza, {
          name: "Cheese",
          description: "Mozzarella Cheese",
        }),
        React.createElement(Pizza, {
          name: "Pepperoni",
          description: "Mozzarella Cheese, Pepperoni",
        }),
      ],
    ),
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
