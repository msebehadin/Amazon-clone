import React from "react";

import Carousel from "../../Components/carousel/carousel";
import Category from "../../Components/Category/category";
import Product from "../../Components/product/product";
import Layout from "../../Components/layout/layout";
const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <Carousel />
        <Category />
        <Product product={undefined} />
      </Layout>
    </>
  );
};

export default Home;
