import Head from "next/head";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  // baseURL:"http://localhost:3000/api/products/"
  baseURL: "http://localhost:8001/product/stock_less/",
  // baseURL:"https://jsonplaceholder.typicode.com/users"
});

const Products = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      setResult(data);
      console.log(data);
    });
  }, []);

  const getData = async () => {
    const data = await fetch("http://18.116.39.224:8080/product/stock_less", {
      method: "POST",
      // mode: "no-cors",
      body: JSON.stringify({ Number_of_products: 100000 }),
    });
    return data.json();
  };
  const data = {
    products: result,
  };

  return (
    <div>
      <Head>
        <title>Storewind | Products</title>
      </Head>
      <Navbar pageTitle={"Products"} />
      <Content data={data} />
    </div>
  );
};

export default Products;
