import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BASE_URL from "../../API/endpoint";
import Layout from "../../Components/layout/layout";
import Loading from "../../Components/loading/Loading";
import ProductCard from "../../Components/product/productCard";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { productId } = useParams<{ productId: string }>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!productId) return;

    const controller = new AbortController();
    setIsLoading(true);

    axios
      .get(`${BASE_URL}/products/${productId}`, { signal: controller.signal })
      .then((res) => setProduct(res.data))
      .catch((err) => {
        if (err.name !== "CanceledError") {
          console.error("Error fetching product detail:", err);
        }
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [productId]);

  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : product ? (
          <ProductCard product={product}
            flex={true}
            renderDesc={true}
          />
      ) : (
        <p>Product not found</p>
      )}
    </Layout>
  );
};

export default ProductDetail;
