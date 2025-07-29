import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./productCard";
import { Grid, Container, Typography } from "@mui/material";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=15")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Featured Products
      </Typography>
      <Grid container spacing={2}>
        {products.map((p) => (
          <Grid item key={p.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Product;
