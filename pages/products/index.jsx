import Head from "next/head";
import Content from "../../components/ProdContent";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import useToken from "../../helper/useToken";
import { useRouter } from 'next/router';


const Products = () => {
  const { token ,setToken} = useToken();
  console.log(token)
  const router = useRouter();
  if (token.currentUser.rolename != 'ADMIN') {
    router.push('/')
  }
    
    
    
  const [result, setResult] = useState([]);
  

  const getData = async () => {
    try {
      const data = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/product/stock_less", {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify({ Number_of_products: 100000 }),
      });  
      setResult (data.json());
      
    } catch (err) {
      console.log(err)
    }
  };
  const data = {
    products: result,
  };

  useEffect(() => {
    getData();
  }, []);

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
