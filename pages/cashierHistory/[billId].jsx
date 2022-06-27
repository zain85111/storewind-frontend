import Head from "next/head";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { useRouter } from "next/router";
import LoadingSpinner from "../../components/LoadingSpinner";

const Bill = ({ query }) => {
    const router = useRouter();

    
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [receipt, setReceipt] = useState(null);
    useEffect(() => {
        setIsLoading(true)
        const getReceipts = async () => {
            try {
                let response = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/receipts/get_receipt", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    credentials: "include",
                    body: JSON.stringify({ _id: router.query.billId }),
                })
                console.log(router.query);
                let result = await response.json();
                console.log("Res: ", result);
                setReceipt(result);
            } catch (error) {
                setErrorMessage("Unable to fetch Bill Details.");
            }

            setIsLoading(false)
        }
        getReceipts();
    }, [])



    const renderContent = (

        receipt == null ? null :
        <div className="p-4 m-2">
            <div className="py-4 flex justify-between space-x-10 ">
                <div className="w-full text space-y-10">
                    <div className="flex flex-col gap-2 md:flex-row justify-between">
                        <p className="font-bold">Bill ID:</p>
                        <p className="">{receipt._id}</p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row justify-between">
                        <p className="font-bold">Employee ID</p>
                        <p className="">{receipt.emp_id}</p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row justify-between">
                        <p className="font-bold">Date</p>
                        <p className="">{new Date(receipt.receipt_date).toDateString()}</p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row justify-between">
                        <p className="font-bold">Amount:</p>
                        <p className="">{receipt.amount}</p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row justify-between">
                        <p className="font-bold">No. of Items:</p>
                        <p className="">{receipt.products.length}</p>
                    </div>
                    <div className="flex flex-col justify-between ">
                        <p className="font-bold">Products</p>
                        <div className="w-full space-y-2 pt-3 max-h-[320px] overflow-y-auto">
                            {
                                receipt.products.map((p) => (
                                    <Disclosure key={p._id}>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-500 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:ring-opacity-75">
                                                    <span>{p.product_name}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-gray-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                    <div className="flex justify-between text-sm">
                                                        <p className="font-bold ">Price:</p>
                                                        <p>{p.price} PKR</p>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <p className="font-bold ">Quantity:</p>
                                                        <p>{p.quantity}</p>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <p className="font-bold ">Discount:</p>
                                                        <p>{p.discount}%</p>
                                                    </div>
                                                    <div className="flex  flex-col space-x-3text-sm">
                                                        <p className="font-bold ">Categories:</p>
                                                        <div>
                                                            {p.categories.map((c, i) => (
                                                                <span>{c} {i < p.categories.length - 1 ? <>, </> : <></>}</span>
                                                            ))}
                                                        </div>

                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))
                            }


                        </div>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row justify-between">
                        <p className="font-bold">Payment Method:</p>
                        <p className="">{receipt.payment_method} </p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="font-bold">Narration:</p>
                        <p className="">{receipt.narration}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    const loadingSpinner = (
        <div className="w-full lg:w-1/2 h-screen flex justify-center items-center ">
            <LoadingSpinner />
        </div>
    );

    return (
        <div>
            <Head>
                <title>Storewind | Bill Details</title>
            </Head>
            <Navbar pageTitle={"Bill Details"} />
            {isLoading ? loadingSpinner : renderContent}
            {errorMessage && <div className="p-4 text-xl font-bold text-red-500">{errorMessage}</div>}

        </div>
    );
};

Bill.getInitialProps = ({ query }) => {
    return { query };
};

export default Bill;
