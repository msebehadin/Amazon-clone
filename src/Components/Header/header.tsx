import React from "react";
import logo from "../../assets/img/logo.png";
import flag from "../../assets/img/16.png";
import classes from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <>
      <section className={classes.header_container}>
        {/* Logo & Delivery */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img src={logo} alt="amazon logo" />
          </Link>

          <div className={classes.delivery_container}>
            <SlLocationPin />
            <div className={classes.delivery}>
              <p>Delivery to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className={classes.search}>
          <select name="category" id="category">
            <option value="all">All</option>
          </select>
          <input type="text" placeholder="Search product" />
          <button className={classes.search_button}>
            <BsSearch size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className={classes.nav_items}>
          {/* Language Selector */}
          <div className={classes.language_container}>
            <img src={flag} alt="flag" />
            <select>
              <option value="en">EN</option>
            </select>
          </div>

          {/* Account/Login */}
          <Link to="/auth" className={classes.nav_a}>
            <div>
              <p>Sign In</p>
              <span>Account & List</span>
            </div>
          </Link>

          {/* Orders */}
          <Link to="/orders" className={classes.nav_a}>
            <div>
              <p>Returns</p>
              <span>& Orders</span>
            </div>
          </Link>

          {/* Cart */}
          <Link to="/cart" className={classes.cart_a}>
            <div className={classes.cart_container}>
              <BiCart size={25} />
              <span className={classes.cart_count}>0</span>
            </div>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
