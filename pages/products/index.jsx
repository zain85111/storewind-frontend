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
