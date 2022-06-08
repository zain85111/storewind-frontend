import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import useToken from "../../helper/useToken";
import { useRouter } from "next/router";

const Receipt = ({ query }) => {
    const { token, setToken } = useToken();
    const router = useRouter();


    const [receipt, setReceipt] = useState({});

    useEffect(() => {
        getReceipts().then((recs) => {
            console.log(router.query.receiptId)
            console.log(recs, "receipts, Details Page");

            recs.map(e => {
                if (e._id === router.query.receiptId) {
                    setReceipt(e);
                }
            })
            console.log(receipt.products,"Current receipt, details page")

        });
    }, []);

    const getReceipts = async () => {
        let response = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/receipts/",{
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({ store_id: token.currentUser.email }),
        })
        let result = await response.json();
        return result;
    }

    // const getReceipt = async () => {
        
    //     console.log(query.receiptId); 
    //     try {
            
    //         const data = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/receipts/get_receipt", {
    //             method: "POST",
    //             headers: {
    //                 'Accept': 'application/json, text/plain, */*',
    //                 'Content-Type': 'application/json'
    //             },
    //             credentials: "include",
    //             body: JSON.stringify({ id: query.receiptId })
    //         });

    //         const result = await data.json();
    //         console.log(result);
    //         setReceipt(result)

    //     } catch (err) {
    //         console.log(err)
    //     }

    // };


    const pproducts = [
        {
            "product_name": "Knife",
            "price": "12.00",
            "quantity": "1",
            "discount": "10",
            "categories": ["Kitchen","Food","Cutlary"],
            "subCategories": ["Cuttting","Metal"]
        },
        {
            "product_name": "Spoon",
            "price": "10.00",
            "quantity": "2",
            "discount": "0",
            "categories": ["Kitchen","Food","Cutlary"],
            "subCategories": ["Eating","Metal"]
        },
        {
            "product_name": "Bottle",
            "price": "22.00",
            "quantity": "1",
            "discount": "5",
            "categories": ["Kitchen","Food"],
            "subCategories": ["Drinking","Metal"]
        },
    ]

    const products = receipt.products;

    let amount = 0;
    let noOfItems = 0;
    products.map(p => {
        amount += parseFloat(p.price);
        noOfItems += parseInt(p.quantity);
    })

    return (
        
        <div>
        <Head>
            <title>Storewind | Receipt Details</title>
        </Head>
        <Navbar pageTitle={"Receipt Details"} />
        <div className="p-4 m-2" key={receipt._id}>
            <div className="py-4 flex justify-between space-x-10 ">
                <div className="w-full text space-y-10">
                    <div className="flex justify-between">
                        <p className="font-bold">Receipt ID:</p>
                        <p className="">{receipt._id}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold">Employee ID</p>
                        <p className="">{receipt.emp_id}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold">Receipt Date</p>
                        <p className="">{new Date(receipt.receipt_date).toDateString()}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold">Amount:</p>
                        <p className="">{receipt.amount}</p>
                        {/* <p className="">{amount.toFixed(2)} PKR</p> */}
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold">No. of Items:</p>
                        <p className="">{noOfItems}</p>
                    </div>
                    <div className="flex flex-col justify-between ">
                        <p className="font-bold">Products</p>
                            <div className="w-full space-y-2 pt-3 max-h-[320px] overflow-y-auto">
                                {
                                    products.map((p,i) => (         
                                        <Disclosure key={i}>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-500 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:ring-opacity-75">
                                                <span>{ p.product_name}</span>
                                                <ChevronUpIcon
                                                className={`${
                                                    open ? 'rotate-180 transform' : ''
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
                                                    {p.categories.map((c,i) => (
                                                        <span>{c} { i < p.categories.length-1? <>, </>:<></>}</span>
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
                    
                    <div className="flex flex-col justify-between">
                        <p className="font-bold">Narration:</p>
                        <p className="">{receipt.narration} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, illum?</p>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 space-x-4 flex justify-end items-center">
            <Link href={"/receipts/edit/?id=" + receipt._id}>
                <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#44814E] border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                >
                Edit
                </button>
            </Link>
            <Link href={"/receipts/delete/?id=" + receipt._id}>
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

Receipt.getInitialProps = ({ query }) => {
  return { query };
};

export default Receipt;
