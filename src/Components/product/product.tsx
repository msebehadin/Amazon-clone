import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./productCard";
import classes from "./product.module.css";
import type { ProductType } from "../../types/product";

const Product: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=16")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className={classes.product_container}>
      {products.map((singleProduct) => (
        <ProductCard product={singleProduct} key={singleProduct.id} flex={false} renderDesc={false} renderAdd={true} />
      ))}
    </div>
  );
};

export default Product;
