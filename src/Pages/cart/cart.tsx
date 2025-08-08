import React, { useContext } from "react";
import Layout from "../../Components/layout/layout";
import { DataContext } from "../../Components/dataProvider/dataProvider";
import ProductCard from "../../Components/product/productCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import {classes} from './cart.module.css'

const Cart: React.FC = () => {
  const context = useContext(DataContext);
  if (!context) return null;

  const { state } = context;
  const { basket } = state;
  const total = basket.reduce((amount, item) => item.price + amount, 0);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
        </div>
        <hr />
        {basket.length === 0 ? (
          <p>Oops! No item in your cart</p>
        ) : (
          basket.map((item, i) => (  
            <ProductCard
              key={i}
              product={item}
              flex={true}
              renderAdd={false}
              renderDesc={true}
            />
          ))
        )}
        {basket.length !== 0 && (
          <div className={classes.Subtotal}>
            <div>
              <p>Subtotal ({basket.length} item{basket.length > 1 ? "s" : ""})</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payment">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
