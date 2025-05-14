import React from "react";
import ReactDOM from "react-dom";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

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
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
