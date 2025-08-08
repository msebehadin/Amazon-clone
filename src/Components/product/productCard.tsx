import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../dataProvider/dataProvider";
import { type } from "../../utility/action.type";

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
  flex: boolean;
  renderDesc: boolean;
  renderAdd: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  flex,
  renderDesc,
  renderAdd,
}) => {
  const context = useContext(DataContext);
  if (!context) return null;

  const { dispatch } = context;

  const addCart = () => {
    dispatch({
      type: type.ADD_TO_BASKET,
      item: {
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      },
    });
  };

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "150px" }}
        />
      </Link>
      <div>
        <h3>{product.title}</h3>
        {renderDesc && (
          <div style={{ maxWidth: "750px" }}>{product.description}</div>
        )}
        <div className={classes.rating}>
          <Rating value={4.5} precision={0.1} readOnly />
          <small>{120}</small>
        </div>
        <CurrencyFormat amount={product.price} />
        {renderAdd && (
          <button className={classes.btn} onClick={addCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
