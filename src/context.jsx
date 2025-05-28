import { createContext } from "react";

export const CartContext = createContext([[], function () {}]); //react context for the cart state, returns a hook to access the cart state and a function to update it
