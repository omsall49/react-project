import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  MainPageComponent,
  UploadPageComponent,
  ProductPageComponent,
  SignupPageComponent,
} from "../pages/index.js";

function App() {
  return (
    <div>
      <div id="header"></div>
      <div id="body">
        <Routes>
          <Route exact={true} path={"/"} element={<MainPageComponent />} />
          <Route
            exact={true}
            path="/products/:id"
            element={<ProductPageComponent />}
          />
          <Route
            exact={true}
            path="/upload"
            element={<UploadPageComponent />}
          />
          <Route
            exact={true}
            path="/signup"
            element={<SignupPageComponent />}
          />
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
