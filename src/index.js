import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrolltoTop";
import ResponsiveAppBar from "./components/ResponsiveAppBar.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResponsiveAppBar />
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
