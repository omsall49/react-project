import React from "react";
import {
  BannerComponent,
  ProductList,
  FloatingButton,
} from "../../components/index.js";
class MainPageComponent extends React.Component {
  render() {
    return (
      <div>
        <BannerComponent />
        <ProductList />
        <FloatingButton />
      </div>
    );
  }
}

export default MainPageComponent;
