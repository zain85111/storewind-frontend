import Head from "next/head";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

const Delete = () => {
  const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

  const deleteReceipt = async () => {
    setIsLoading(true)
    console.log({ _id: router.query.id });
    console.log(router.query.id);
    await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/receipts/delete", {
    credentials: "include",
      method: "POST",
      body: JSON.stringify({ _id: router.query.id }),
    }).then(() => {
      setTimeout(() => {
        router.push("/receipts");
        setIsLoading(false);
      }, 1000);
    });
  };


  const renderContent = (
    <div className="p-4 m-2  items-center">
      <div className=" flex flex-col justify-evenly items-center h-72">
        <ExclamationCircleIcon className="h-32 w-32 text-red-500" />
        <p className="text-sm text-gray-500">
          Are you sure you want to DELETE this receipt?
        </p>
        {/* Buttons */}
        <div className="pt-4 space-x-4 flex justify-end items-center">
          <Link href="/receipts">
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100">
              Cancel
            </button>
          </Link>
          <button
            type="button"
            onClick={deleteReceipt}
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )

  const loadingSpinner = (
    <div className="w-full h-screen flex justify-center items-center ">
        <LoadingSpinner />
    </div>
  );

  return (
    <div>
      <Head>
        <title>Storewind | Delete Receipt</title>
      </Head>
      <Navbar pageTitle={"Delete Receipt"} />
      {/* Content  */}
      {isLoading ? loadingSpinner : renderContent}
      {errorMessage && <div className="p-4 text-xl font-bold text-red-500">{errorMessage}</div>}
      {/* Content End  */}
    </div>
  );
};

export default Delete;
