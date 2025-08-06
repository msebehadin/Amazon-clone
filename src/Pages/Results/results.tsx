import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BASE_URL from "../../API/endpoint";
import Layout from "../../Components/layout/layout";
import classes from "./results.module.css";
import ProductCard from "../../Components/product/productCard";
import Loading from "../../Components/loading/Loading";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const Results: React.FC = () => {
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams<{ categoryName: string }>();

  useEffect(() => {
    if (!categoryName) return;

    const controller = new AbortController();
    setIsLoading(true);

    axios
      .get(`${BASE_URL}/products/category/${categoryName}`, {
        signal: controller.signal
      })
      .then((res) => setResults(res.data))
      .catch((err) => {
        if (err.name !== "CanceledError") {
          console.error("Error fetching category products:", err);
        }
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [categoryName]);

  return (
    <Layout>
      <div>
        <h1 style={{ textAlign: "center" }}>Results</h1>
        <p style={{ textAlign: "center" }}>Category / {categoryName}</p>
        <hr />

        {isLoading ? (
          <>
            {/* Spinner before API fetch completes */}
            <Loading />
          </>
        ) : results.length > 0 ? (
          <div className={classes.products_container}>
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: "center" }}>No products found...</p>
        )}
      </div>
    </Layout>
  );
};

export default Results;
