import Link from "next/link";
import Head from "next/head"
import Navbar from "../../components/Navbar";
import { useState,useEffect } from "react";
import useToken from "../../helper/useToken";
import { useRouter } from "next/router";

const CashierHistory = () => {
    const { token, setToken } = useToken();
    const router = useRouter();


    const [receipts, setReceipts] = useState([]);

    const getReceipts = async () => {
        try {
            let response = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/receipts/emp_receipts",{
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({ emp_id: token.currentUser.email }),
            })
            let result = await response.json();
            console.log(result,"All Receipts, Cashier Side")

            setReceipts(result)
            console.log(result);

            
        } catch (err) {
            console.log(err);
        }
    }
    
<<<<<<< HEAD
    // useEffect(() => {
    //     if (token.currentUser.rolename != 'FMP') {
    //         router.push('/')
    //     }
    // })
=======
    useEffect(() => {
        if (token.currentUser.rolename != 'EMP') {
            router.push('/')
        }
    })
>>>>>>> f85b83eb2e04b6e8921c97dff180d81acc241bbd

    useEffect(() => {
        getReceipts();
    },[])


    return (
        <div>
            <Head>
                <title>Storewind | History</title>
            </Head>
            <Navbar pageTitle={"History"} />
            <div className="px-5 space-y-2 h-fit">
                <p className='text-lg font-semibold'>Order History </p>
                {
                    receipts ? (
                        <>
                            <div className="space-y-4">
                                {
                                    receipts.map((order) => (
                                        <div className="px-4 py-2 h-24 rounded-lg flex align-middle items-center justify-between bg-white">
                                            <div className="flex flex-col justify-between h-full ">
                                                <p className="space-x-2 text-sm"><b>Order Id:</b> <span>{ order._id }</span></p>
                                                <p className="space-x-2 text-sm"><b>No. Of Products:</b> <span>{ order.products.length }</span></p>
                                                <p className="space-x-2 text-sm"><b>Total Bill:</b> <span>{ order.amount } PKR</span></p>
                                            </div>
                                            <div className="flex flex-col justify-between items-end h-full ">
                                                <p className="space-x-2 text-sm"><b>Date:</b> <span>{ new Date(order.receipt_date).toDateString() }</span></p>
                                                <Link href={"/cashierHistory/" + order._id}>
                                                    <button className="text-green-500">See Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    ) : (<></>)
                }

                
            </div>
        </div>
    )
}

export default CashierHistory