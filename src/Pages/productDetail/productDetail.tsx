import React, { useEffect, useState } from "react";
import Layout from "../../Components/layout/layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/product/productCard";
import BASE_URL from "../../API/endpoint";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

useEffect(() => {
    if (!productId) return;

    axios
      .get(`${BASE_URL}/products/${productId}`) 
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error("Error fetching product detail:", err);
      });
  }, [productId]);

  return (
    <Layout>
      {product ? <ProductCard product={product} /> : <p>Loading...</p>}
    </Layout>
  );
};

export default ProductDetail;
