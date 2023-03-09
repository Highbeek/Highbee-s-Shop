import React from "react";
import { PRODUCTS } from "../../Products";
import Product from "./Product";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <h1 className="shopTitle">Amazing Deals Online</h1>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
