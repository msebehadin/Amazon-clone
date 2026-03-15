import Carousel from "../../Components/carousel/carousel";
import Category from "../../Components/Category/category";
import Product from "../../Components/product/product";
import Layout from "../../Components/layout/layout";
const Home = () => {
  return (
    <>
      <Layout>
        <Carousel />
        <Category />
        <Product />
      </Layout>
    </>
  );
};

export default Home;
