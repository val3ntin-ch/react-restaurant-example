import { useState, useEffect, useDebugValue, use } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useDebugValue(
    pizzaOfTheDay
      ? `Pizza of the Day: ${pizzaOfTheDay.name}`
      : "Loading Pizza of the Day...",
  );
  // Custom hook to fetch the pizza of the day

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    }

    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
