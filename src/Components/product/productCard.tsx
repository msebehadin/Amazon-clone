import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 300, m: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain", p: 2, backgroundColor: "#f9f9f9" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" noWrap>
          {product.title}
        </Typography>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <Rating value={4.5} precision={0.1} readOnly size="small" />
          <Typography variant="body2" color="text.secondary">
            (120)
          </Typography>
        </Box>
        <Typography variant="h6" color="primary">
          <CurrencyFormat amount={product.price} />
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2, width: "100%" }}
          color="primary"
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
