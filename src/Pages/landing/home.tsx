import React from "react";
import Header from "../../Components/Header/header";
import LowerHeader from "../../Components/Header/LowerHeader";
import Carousel from "../../Components/carousel/carousel";
import Category from "../../Components/Category/category";
import Product from "../../Components/product/product";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <LowerHeader />
      <Carousel />
      <Category />
      <Product product={undefined} />
    </>
  );
};

export default Home;
