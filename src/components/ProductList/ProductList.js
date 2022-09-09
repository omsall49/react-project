import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../../config/constants";
import "./ProductList.css";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

dayjs.extend(relativeTime);

function ProductList() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(`${API_URL}/products`)
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러발생 :", error);
      });
  }, []);

  return (
    <div id="container">
      <h1 id="product-headline">판매 상품</h1>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              {product.soldout === 1 && <div className="product-blur" />}
              <Link
                style={{ color: "inherit" }}
                className="product-link"
                to={`/products/${product.id}`}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      id="product-img"
                      component="img"
                      height="140"
                      image={`${API_URL}/${product.imgeUrl}`}
                      alt="상품 썸네일"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.price}원<br />
                        {dayjs(product.createdAt).fromNow()}
                        <br />
                        {product.seller}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProductList;
