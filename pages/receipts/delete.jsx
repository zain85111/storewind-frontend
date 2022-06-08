import Head from "next/head";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const Delete = () => {
  const router = useRouter();

  const deleteReceipt = async () => {
    console.log(router.query.id);
    await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/receipts/", {
      method: "DELETE",
      body: JSON.stringify({ _id: router.query.id }),
    }).then(() => {
      setTimeout(() => {
        router.push("/receipts");
      }, 1000);
    });
  };

  return (
    <div>
      <Head>
        <title>Storewind | Delete Receipt</title>
      </Head>
      <Navbar pageTitle={"Delete Receipt"} />
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
    </div>
  );
};

export default Delete;
