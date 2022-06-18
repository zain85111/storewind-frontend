import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import useToken from "../../helper/useToken";

const Item = ({ prod, id, query }) => {
  const { token ,setToken} = useToken();

  const [item, setItem] = useState({});
  useEffect(() => {
    getData().then((d) => {
      console.log(d,"Product Details Page");
      setItem(d);
    });
  }, []);

  const getData = async () => {
    console.log({ id: query.itemId, storeId: token.currentUser.email });
    const data = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/product/", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ id: query.itemId, storeId: token.currentUser.email }),
    });
    return data.json();
  };

  return (
    <div>
      <Head>
        <title>Storewind | Product Details</title>
      </Head>
      <Navbar pageTitle={item.Name } />
      {item == null ? "":

      <div className="p-4 m-2" key={item.Id}>
        <div className="py-4 flex justify-between space-x-10 ">
          <div className="w-96 ">
            <img src="https://picsum.photos/200" alt="Product Img" />
          </div>
          <div className="w-full text space-y-10">
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Name</p>
              <p className="">{item.Name}</p>
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Brand</p>
              <p className="">{item.Brand}</p>
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Category</p>
              <p className="">{JSON.stringify(item.Categories)}</p>
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Tags</p>
              <p className="">{JSON.stringify(item.Tags)}</p>
            </div>

            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Price</p>
              <p className="">{item.Price} PKR</p>
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Discount</p>
              <p className="">{item.Discount}</p>
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Stock</p>
              <p className="">{item.InStock}</p>
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Barcode</p>
              <p className="">{item.Id}</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-4 space-x-4 flex justify-end items-center">
          <Link href={"/products/edit/?id=" + item.Id}>
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-400 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
            >
              Edit
            </button>
          </Link>
          <Link href={"/products/delete/?id=" + item.Id}>
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
}
    </div>
  );
};

Item.getInitialProps = ({ query }) => {
  return { query };
};
export default Item;
