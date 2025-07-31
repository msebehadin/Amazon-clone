import React from "react";
import type { CategoryData } from "./Amazon.com._Spend_less._Smile_more/categoryFullInfo";
import classes from './category.module.css'
type CatProps = {
  data: CategoryData;
};

const CategoryCard: React.FC<CatProps> = ({ data }) => {
  return (
    <div className={classes.category}>
      <a href="#">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.img} alt={data.title} />
        <p>Shop now</p>
      </a>
    </div>
  );
};

export default CategoryCard;
