import axios from "axios";
import React, { useState, useEffect, type CSSProperties } from "react";
import { useParams } from "react-router-dom";
import BASE_URL from "../../API/endpoint";
import Layout from "../../Components/layout/layout";
import classes from "./results.module.css";
import ProductCard from "../../Components/product/productCard";

import Loading from "../../Components/loading/Loading";
import product from "../../Components/product/product";
// Define a type for your product data
interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  // Add other fields as needed
}

const Results: React.FC = () => {
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { categoryName } = useParams<{ categoryName: string }>();

  useEffect(() => {
    if (!categoryName) return;
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching category products:", err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <Layout>
      <div>
        <h1 style={{ textAlign: "center" }}>Results</h1>
        <p style={{ textAlign: "center" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {isLoading ? (
            <Loading />
          ) : results.length > 0 ? (
            results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>no product found ..</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Results;
