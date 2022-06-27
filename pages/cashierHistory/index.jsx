import Link from "next/link";
import Head from "next/head"
import Navbar from "../../components/Navbar";
import { useState,useEffect } from "react";
import useToken from "../../helper/useToken";
import { useRouter } from "next/router";
import LoadingSpinner from "../../components/LoadingSpinner";

const CashierHistory = () => {
    const { token } = useToken();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [receipts, setReceipts] = useState([]);

    const getReceipts = async () => {
        try {
            let response = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/receipts/emp_receipts",{
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
            setErrorMessage("Unable to fetch Bill History.");
        }
        setIsLoading(false)
    }
    
    useEffect(() => {
        if (token.currentUser.rolename != 'EMP') {
            router.push('/')
        }
    })

    useEffect(() => {
        setIsLoading(true)
        getReceipts();
    },[])

    
    const renderContent = (
        
        receipts ? (
            <>
                <div className="space-y-4">
                    {
                        receipts.slice(0,5).map((order) => (
                            <div key={order._id} className="px-4 py-2 h-fit md:h-24 space-y-3 rounded-lg flex flex-col md:flex-row justify-between bg-white">
                                <div className="flex flex-col justify-between h-full space-y-1 ">
                                    <p className="space-x-2 text-sm"><b>Bill Id:</b> <span>{ order._id }</span></p>
                                    <p className="space-x-2 text-sm"><b>No. Of Products:</b> <span>{ order.products.length }</span></p>
                                    <p className="space-x-2 text-sm"><b>Total Bill:</b> <span>{ order.amount } PKR</span></p>
                                </div>
                                <div className="flex md:flex-col justify-between items-end h-full ">
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
    )
    
    const loadingSpinner = (
        <div className="w-full lg:w-1/2 h-screen flex justify-center items-center ">
            <LoadingSpinner />
        </div>
    );

    return (
        <div>
            <Head>
                <title>Storewind | History</title>
            </Head>
            <Navbar pageTitle={"History"} />
            <div className="px-5 space-y-2 h-fit">
                <p className='text-lg font-semibold'>Bill History </p>
                {isLoading ? loadingSpinner : renderContent}
                {errorMessage && <div className="p-4 text-xl font-bold text-red-500">{errorMessage}</div>}                
            </div>
        </div>
    )
}

export default CashierHistory