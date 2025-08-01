import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BASE_URL from "../../API/endpoint";
import Layout from "../../Components/layout/layout";
import classes from "./results.module.css";
import ProductCard from "../../Components/product/productCard";

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
  const { categoryName } = useParams<{ categoryName: string }>();

  useEffect(() => {
    if (!categoryName) return;

  axios
  .get(`${BASE_URL}/products/category/${categoryName}`)
  .then((res) => {
    setResults(res.data);
  })
  .catch((err) => {
    console.error("Error fetching category products:", err);
  });

  }, [categoryName]);

  return (
    <Layout>
      <div>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {results.length > 0 ? (
            results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p style={{ padding: "30px" }}>No products found.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Results;
