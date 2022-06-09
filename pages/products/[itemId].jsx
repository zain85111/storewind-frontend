import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const Item = ({ prod, id, query }) => {
  const [item, setItem] = useState({});
  useEffect(() => {
    getData().then((d) => {
      console.log(d);
      setItem(d);
    });
  }, []);

  const getData = async () => {
    console.log(query.itemId);
    const data = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/product/", {
      method: "POST",
      body: JSON.stringify({ id: query.itemId }),
    });

    // const data = await fetch("http://18.116.39.224:8080/product/", {method="POST", body:JSON.stringify({
    //     id: query.itemId,
    //     })});
    // data.json().then(d=>{setItem(d); console.log(d)});
    return data.json();
  };

  return (
    <div>
      <Head>
        <title>Storewind | Product Details</title>
      </Head>
      <Navbar pageTitle={item.name } />
      <div className="p-4 m-2" key={item.id}>
        <div className="py-4 flex justify-between space-x-10 ">
          <div className="w-96 ">
            <img src="https://picsum.photos/200" alt="Product Img" />
          </div>
          <div className="w-full text space-y-10">
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Name</p>
              <p className="">{item.name}</p>
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Brand</p>
              <p className="">{item.brand}</p>
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Category</p>
              <p className="">{item.categories.map(c=>(c))}</p>
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Tags</p>
              <p className="">{item.tags.map(c=>(c))}</p>
            </div>

            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Price</p>
              <p className="">{item.price} PKR</p>
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Discount</p>
              <p className="">{item.discount}</p>
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Stock</p>
              <p className="">{item.inStock}</p>
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Barcode</p>
              <p className="">{item.id}</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-4 space-x-4 flex justify-end items-center">
          <Link href={"/products/edit/?id=" + item.id}>
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-400 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
            >
              Edit
            </button>
          </Link>
          <Link href={"/products/delete/?id=" + item.id}>
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Item.getInitialProps = ({ query }) => {
  return { query };
};
export default Item;
