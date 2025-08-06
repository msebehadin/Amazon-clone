import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from './product.module.css'
import { Link } from "react-router-dom";

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
interface StyleDetail{
  flex:boolean
}
interface renderDescProp{
renderDesc:boolean
}
const ProductCard: React.FC<ProductCardProps&StyleDetail&renderDescProp> = ({ product,flex,renderDesc }) => {
  return (
    <div className={`${classes.card_container} ${flex?classes.product_flexed:''}`}>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} style={{ width: "150px" }} />
      </Link>
      <div>
        <h3>{product.title}</h3>
        {renderDesc && <div style={{maxWidth:"750px"}}>{ product.description}</div>}
        <div className={classes.rating}>
          <Rating value={4.5} precision={0.1} readOnly />
          <small>{120}</small>
        </div>
        <CurrencyFormat amount={product.price} />
        <button className={classes.btn}>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
