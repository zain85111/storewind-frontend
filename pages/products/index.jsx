import Head from "next/head";
import Content from "../../components/ProdContent";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import useToken from "../../helper/useToken";
import { useRouter } from 'next/router';


const Products = () => {
  const { token ,setToken} = useToken();
  const router = useRouter();
  if (token.currentUser.rolename != 'ADMIN') {
    router.push('/')
  }
    
    
    
<<<<<<< HEAD
=======
  const [result, setResult] = useState([]);
  

  const getData = async () => {
    try {
      const data = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/categories/", {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify({ store_id: token.currentUser.email }),
      }); 
      if (data.ok) {
        let res = await data.json()
        setResult(res);
        console.log(res);
        
      }
      
    } catch (err) {
      console.log(err)
    }
  };
  const data = {
    products: result,
  };

  useEffect(() => {
    if (token.currentUser.rolename != 'ADMIN') {
      router.push('/')
    }
  })
  useEffect(() => {
    
    getData();
  }, []);
>>>>>>> f85b83eb2e04b6e8921c97dff180d81acc241bbd

  return (
    <div>
      <Head>
        <title>Storewind | Products</title>
      </Head>
      <Navbar pageTitle={"Products"} />
      <Content />

    </div>
  );
};

export default Products;
