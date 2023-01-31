import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Privacidad from "./privacidad/Privacidad";

const router = createBrowserRouter([
  {
    path: "/dolares-cotizacion",
    element: <App />,
  },
  {
    path: "/dolares-cotizacion/privacidad",
    element: <Privacidad />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
