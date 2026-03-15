import type { FC } from "react";
import { useContext } from "react";
import logo from "../../assets/img/logo.png";
import flag from "../../assets/img/16.png";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../dataProvider/dataProvider";

const Header: FC = () => {
  const context = useContext(DataContext);
  if (!context) return null;

  const { state } = context;
  const { basket } = state;

  return (
    <>
      <section className={classes.fixed}>
        <section className={classes.header_container}>
          {/* Logo & Delivery */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img src={logo} alt="amazon logo" />
            </Link>

            <div className={classes.delivery_container}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="11" r="2.5" fill="currentColor" />
              </svg>
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
            <input type="text" placeholder="Search product" aria-label="Search products" />
            <button className={classes.search_button} aria-label="Search">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="16.65"
                  y1="16.65"
                  x2="21"
                  y2="21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
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
            <Link to="/cart" className={classes.cart_link}>
              <div className={classes.cart_container} title="View Cart">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M6 6h15l-1.5 9h-12z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <circle cx="9" cy="20" r="1.6" fill="currentColor" />
                  <circle cx="18" cy="20" r="1.6" fill="currentColor" />
                  <path
                    d="M3 4h2l1 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className={classes.cart_count}>
                  {basket?.length ?? 0}
                </span>
              </div>
            </Link>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
};

export default Header;
