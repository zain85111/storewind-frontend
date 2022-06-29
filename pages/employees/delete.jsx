import Head from "next/head";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useState } from "react";

const Delete = () => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const deleteEmployee = async () => {
        setIsLoading(true)
        console.log(router.query.id);
        try {
            await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/employees/", {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({ emp_id: router.query.id }),
            }).then(() => {
                setTimeout(() => {
                    setIsLoading(false)
                    router.push("/employees");
                }, 1000);
            });
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
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
                    <Link href="/employees">
                    <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100">
                        Cancel
                    </button>
                    </Link>
                    <button
                    type="button"
                    onClick={deleteEmployee}
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
                <title>Storewind | Delete Employee</title>
            </Head>
            <Navbar pageTitle={"Delete Employee"} />
            {isLoading ? loadingSpinner : renderContent}
        </div>
    );
};

export default Delete;
