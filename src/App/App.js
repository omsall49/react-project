import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import MainPageComponent from "../pages/main";
import UploadPage from "../pages/upload";
import ProductPage from "../pages/product";

function App() {
  return (
    <div>
      <div id="header"></div>
      <div id="body">
        <Routes>
          <Route exact={true} path={"/"} element={<MainPageComponent />} />
          <Route exact={true} path="/products/:id" element={<ProductPage />} />
          <Route exact={true} path="/upload" element={<UploadPage />} />
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
