import React from "react";
import { categoryImg, type CategoryData } from "./Amazon.com._Spend_less._Smile_more/categoryFullInfo";
import CategoryCard from "./categoryCard";
import classes from './category.module.css'
const Category: React.FC = () => {
  return (
    <section className={classes.category__container}>
      {categoryImg.map((infos: CategoryData, index) => (
        <CategoryCard key={index} data={infos} />
      ))}
    </section>
  );
};

export default Category;
