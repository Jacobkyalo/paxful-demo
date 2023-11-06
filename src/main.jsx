import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Verification from "./pages/Verification.jsx";
import Login from "./pages/Login.jsx";
import Confirm from "./pages/Confirm.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="verify" element={<Verification />} />
      <Route path="confirm" element={<Confirm />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
