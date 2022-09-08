import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import React from "react";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/webudding.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              navigate("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
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
