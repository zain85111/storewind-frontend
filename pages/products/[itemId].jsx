import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
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
        <div className="py-4 flex flex-col md:flex-row justify-between space-y-10 md:space-x-10">
          <div className="w-full md:w-96 flex justify-center">
            <img src="https://picsum.photos/200" alt="Product Img" />
          </div>
          <div className="w-full text space-y-10">
            <div className="flex flex-col gap-2 md:flex-row justify-between">
              <p className="font-bold">Name</p>
              <p>{item.Name}</p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row justify-between">
              <p className="font-bold">Brand</p>
              <p>{item.Brand}</p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row justify-between">
              <p className="font-bold">Category</p>
              <p>{JSON.stringify(item.Categories)}</p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row justify-between">
              <p className="font-bold">Tags</p>
              <p>{JSON.stringify(item.Tags)}</p>
            </div>

            <div className="flex flex-col gap-2 md:flex-row justify-between">
              <p className="font-bold">Price</p>
              <p>{item.Price} PKR</p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row justify-between">
              <p className="font-bold">Discount</p>
              <p>{item.Discount}</p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row justify-between">
              <p className="font-bold">Stock</p>
              <p>{item.InStock}</p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row justify-between">
              <p className="font-bold">Barcode</p>
              <p>{item.Id}</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-4 space-x-4 flex justify-end items-center">
          <Link href={"/products/edit/?id=" + item.Id}>
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600"
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
