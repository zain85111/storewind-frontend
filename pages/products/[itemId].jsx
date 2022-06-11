import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
<<<<<<< HEAD
import useToken from "../../helper/useToken";

const Item = ({  query }) => {
  const router = useRouter();
  const { token } = useToken();

=======
import axios from "axios";
import useToken from "../../helper/useToken";

const Item = ({ prod, id, query }) => {
  const { token ,setToken} = useToken();

>>>>>>> 43eb488c739627d6dcb984aeeaca2cd904568dd3
  const [item, setItem] = useState({});
  useEffect(() => {
    getData().then((d) => {
      console.log(d,"Product Details Page");
      setItem(d);
    });
  }, []);

  const getData = async () => {
<<<<<<< HEAD
    console.log(router.query.itemId);
    const data = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/product/", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ id: router.query.itemId, storeId: token.currentUser.email })
=======
    console.log({ id: query.itemId, storeId: token.currentUser.email });
    const data = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/product/", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ id: query.itemId, storeId: token.currentUser.email }),
>>>>>>> 43eb488c739627d6dcb984aeeaca2cd904568dd3
    });
    return data.json();
  };

  return (
    <div>
      <Head>
        <title>Storewind | Product Details</title>
      </Head>
<<<<<<< HEAD
      <Navbar pageTitle={item.name } />
=======
      <Navbar pageTitle={item.Name } />
      {item == null ? "":

>>>>>>> 43eb488c739627d6dcb984aeeaca2cd904568dd3
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
<<<<<<< HEAD
              <p className="font-bold">Category </p>
              {
                item.Categories ? <><p className="">{item.Categories.map((c, i) => (<span>{c} {i < item.Categories.length-1?<>, </>:<></>}</span>))}</p></>
                  : <></>
              }

            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Tags</p>
              {
                item.Tags ? <><p className="">{item.Tags.map((c, i) => (<span>{c} {i < item.Tags.length-1?<>, </>:<></>}</span>))}</p></>
                  : <></>
              }
=======
              <p className="font-bold">Category</p>
              <p className="">{JSON.stringify(item.Categories)}</p>
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Tags</p>
              <p className="">{JSON.stringify(item.Tags)}</p>
>>>>>>> 43eb488c739627d6dcb984aeeaca2cd904568dd3
            </div>

            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Price</p>
              <p className="">{item.Price} PKR</p>
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Discount</p>
<<<<<<< HEAD
              <p className="">{item.Discount} %</p>
=======
              <p className="">{item.Discount}</p>
>>>>>>> 43eb488c739627d6dcb984aeeaca2cd904568dd3
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Stock</p>
              <p className="">{item.InStock}</p>
<<<<<<< HEAD
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Location</p>
              <p className="">{item.Location}</p>
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Last Stock Addition</p>
              <p className="">{new Date(item.LastStockAddition).toDateString()}</p>
=======
>>>>>>> 43eb488c739627d6dcb984aeeaca2cd904568dd3
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Barcode</p>
              <p className="">{item.Id}</p>
<<<<<<< HEAD
            </div>
            <div className="flex justify-between text-center border-b border-black  ">
              <p className="font-bold">Description</p>
              <p className="">{item.Description}</p>
=======
>>>>>>> 43eb488c739627d6dcb984aeeaca2cd904568dd3
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
