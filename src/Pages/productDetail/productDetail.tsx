import React, { useEffect, useState } from "react";
import Layout from "../../Components/layout/layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/product/productCard";
import BASE_URL from "../../API/endpoint";
import Loading from "../../Components/loading/Loading";
import { string } from "prop-types";
interface Product{
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}
const ProductDetail:React.FC = () => {
  const [product, setProduct] = useState<Product|null>(null);
  const { productId } = useParams < { productId: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

useEffect(() => {
    if (!productId) return;
setIsLoading(true)
    axios
      .get(`${BASE_URL}/products/${productId}`) 
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product detail:", err);
        setIsLoading(false)
      });
  }, [productId]);

  return (
    <Layout>
      {isLoading?<Loading/>:<ProductCard product={product}/>}
      
    </Layout>
  );
};

export default ProductDetail
