import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css';
import ShoppingList from "./shoppingList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ShoppingList name="Will" item="water™"/>);
