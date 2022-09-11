import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import axios from "axios";
import "./BannerComponent.css";
import { API_URL } from "../../config/constants";

const BannerComponent = () => {
  const [banners, setBanners] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(`${API_URL}/banners`)
      .then((result) => {
        const banners = result.data.banners;
        setBanners(banners);
      })
      .catch((error) => {
        console.error("에러발생: ", error);
      });
  }, []);

  return (
    <Carousel autoplay autoplaySpeed={3000}>
      {banners.map((banner, index) => {
        return (
          <Link to={banner.href}>
            <div id="banner">
              <img alt="메인 배너" src={`${API_URL}/${banner.imageUrl}`} />
            </div>
          </Link>
        );
      })}
    </Carousel>
  );
};

export default BannerComponent;
