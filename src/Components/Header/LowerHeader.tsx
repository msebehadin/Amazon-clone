import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./lowerHeader.module.css";

const LowerHeader: React.FC = () => {
  return (
    <div className={classes.lower_header}>
      <ul className={classes.nav_list}>
        <li className={classes.menu_all}>
          <AiOutlineMenu size={18} />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
