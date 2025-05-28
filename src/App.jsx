import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Restaurant</h1>
      <Pizza name="Pepperoni" description="Mozzarella Cheese, Pepperoni" />
      <Pizza name="Cheese" description="Mozzarella Cheese" />
      <Pizza name="Pepperoni" description="Mozzarella Cheese, Pepperoni" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
