import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img alt="위버딩 로고" src="/images/icons/webudding.png" />
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
      <div id="floating-button">
        <Fab
          color="primary"
          aria-label="add"
          onClick={function () {
            navigate("/upload");
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

export default App;
