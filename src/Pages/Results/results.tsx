import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BASE_URL from "../../API/endpoint";
import Layout from "../../Components/layout/layout";
import classes from './results.module.css'
import ProductCard from "../../Components/product/productCard";
const Results = () => {
  const [results, setResults] = useState<unknown[]>([]);
  const { categoryName } = useParams();
useEffect(() => {
  axios.get(`${BASE_URL}/product/category/${categoryName}`);
    .then((res: { data: React.SetStateAction<unknown[]>; }) => {
      setResults(res.data)
    }).catch((err: any) => {
      console.log(err)
    })


}, []);
return <Layout>
  <section>
    <h1 style={{ padding: '30px' }}>Results</h1>
    <p style={{ padding: '30px' }}>Category</p>
    <hr />
    <div className={classes.products_container}>
      {results?.map(product)=>(
      <ProductCard key={Product.id
        product={product}
      }/>
      )}
    </div>
  </section>
</Layout>;
};

export default Results;
