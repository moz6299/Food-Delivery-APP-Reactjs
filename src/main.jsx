import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/Storecontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter  basename="/Food-Delivery-APP-Reactjs">
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
