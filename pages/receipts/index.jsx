import Head from "next/head"
import Navbar from "../../components/Navbar";
import {
  DotsHorizontalIcon,
  TrashIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import { Menu, Transition} from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import useToken from "../../helper/useToken";
import { useRouter } from "next/router";
import LoadingSpinner from "../../components/LoadingSpinner";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Receipts = () => {
    const { token } = useToken();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const rreceipts = [
        {
            id: 143,
            noOfItems: 4,
            amount: 92.42,
            empId: 'emp-24',
            userId: 'usr-994',
            paymentMethod: 'Cash',
            date:'3-3-22',
        },
        {
            id: 143,
            noOfItems: 4,
            amount: 92.42,
            empId: 'emp-24',
            userId: 'usr-994',
            paymentMethod: 'Cash',
            date:'3-3-22',
        },
        {
            id: 143,
            noOfItems: 4,
            amount: 92.42,
            empId: 'emp-24',
            userId: 'usr-994',
            paymentMethod: 'Cash',
            date:'3-3-22',
        },
        {
            id: 143,
            noOfItems: 4,
            amount: 92.42,
            empId: 'emp-24',
            userId: 'usr-994',
            paymentMethod: 'Cash',
            date:'3-3-22',
        },
        {
            id: 143,
            noOfItems: 4,
            amount: 92.42,
            empId: 'emp-24',
            userId: 'usr-994',
            paymentMethod: 'Cash',
            date:'3-3-22',
        },
        {
            id: 143,
            noOfItems: 4,
            amount: 92.42,
            empId: 'emp-24',
            userId: 'usr-994',
            paymentMethod: 'Cash',
            date:'3-3-22',
        },
        {
            id: 143,
            noOfItems: 4,
            amount: 92.42,
            empId: 'emp-24',
            userId: 'usr-994',
            paymentMethod: 'Cash',
            date:'3-3-22',
        },
        {
            id: 143,
            noOfItems: 4,
            amount: 92.42,
            empId: 'emp-24',
            userId: 'usr-994',
            paymentMethod: 'Cash',
            date:'3-3-22',
        },
        {
            id: 143,
            noOfItems: 4,
            amount: 92.42,
            empId: 'emp-24',
            userId: 'usr-994',
            paymentMethod: 'Cash',
            date:'3-3-22',
        },
        {
            id: 143,
            noOfItems: 4,
            amount: 92.42,
            empId: 'emp-24',
            userId: 'usr-994',
            paymentMethod: 'Cash',
            date:'3-3-22',
        },

    ];

    const [receipts, setReceipts] = useState([]);

    const getReceipts = async () => {
        try {
            let response = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/receipts/",{
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({ store_id: token.currentUser.email }),
            })
            let result = await response.json();
            
            setReceipts(result)
            setIsLoading(false)
            if (result.length <= 0) {
                setErrorMessage("No Receipts found");
            }
            console.log(result,"All Receipts")
            
        } catch (err) {
            console.log(err);
            setErrorMessage("Unable to fetch Receipts list");
            setIsLoading(false);
        }
    }
    

    useEffect(() => {
        if (token.currentUser.rolename != 'ADMIN') {
            router.push('/')
        }
    })

    useEffect(() => {
        setIsLoading(true);
        getReceipts();
    },[])


    const renderReceipts = (

        <div className="p-4 space-y-2 relative">
            {/* Table  */}
            {receipts.length >0 ? (
                <div className="overflow-x-auto">
                    <table className="hover:border-collapse w-full text-center md:align-middle">
                        <thead className="text-sm">
                            <tr className="bg-white border-b rounded-md">
                                <th scope="col" className="px-3 py-1">Sr</th>
                                <th scope="col" className="px-6 py-3">ID</th>
                                <th scope="col" className="px-6 py-3">No. Of Items</th>
                                <th scope="col" className="px-6 py-3">Amount</th>
                                <th scope="col" className="px-6 py-3">Created On</th>
                                <th scope="col" className="px-6 py-3">Empolyee ID</th>
                                <th scope="col" className="px-6 py-3">Payment Method</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {receipts.slice(0, 12).map((item, i) => (
                            <tr
                                className="bg-white hover:bg-gray-50 text-xs"
                                key={item._id}
                            >
                                <th scope="row" className="px-3 py-2">{i + 1}</th>
                                <td className="px-6 py-2">pegpegea</td>
                                <td className="px-6 py-2">3</td>
                                <td className="px-6 py-2">1210419</td>
                                <td className="px-6 py-2">{item._id.slice(0,3)+"..."+item._id.slice(item._id.length-3,item._id.length-1)}</td>
                                <td className="px-6 py-2">{item.products.length}</td>
                                <td className="px-6 py-2">{item.amount} PKR</td>
                                <td className="px-6 py-2">{new Date(item.receipt_date).toDateString()}</td>
                                <td className="px-6 py-2">{item.emp_id.slice(0,7)+"..."}</td>
                                <td className="px-6 py-2">{item.payment_method}</td>
                                <td className="px-6 py-2 text-center">
                                    <Menu as="div">
                                        <Menu.Button className="active:text-green-600">
                                            <DotsHorizontalIcon className="h-5 w-5" aria-hidden="true"/>
                                        </Menu.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className=" absolute right-10 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div>
                                                <Menu.Item>
                                                {({ active }) => (
                                                    <div
                                                    className={classNames(
                                                        active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                        "block w-full text-left px-4 py-2 text-sm hover:text-blue-500"
                                                    )}
                                                    >
                                                    <Link
                                                        href={"/receipts/" + item._id}
                                                        key={item.id}
                                                    >
                                                        <button className="flex space-x-2">
                                                            <ViewListIcon className="h-5 w-5" />
                                                            <p className="hidden md:block">Details</p>
                                                        </button>
                                                    </Link>
                                                    </div>
                                                )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                {({ active }) => (
                                                    <div
                                                    className={classNames(
                                                        active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                        "block w-full text-left px-4 py-2 text-sm hover:text-red-500"
                                                    )}
                                                    >
                                                    <Link
                                                        href={"/receipts/delete/?id=" + item._id}
                                                    >
                                                        <button className="flex space-x-2">
                                                            <TrashIcon className="h-5 w-5" />
                                                            <p className="hidden md:block">Remove</p>
                                                        </button>
                                                    </Link>
                                                    </div>
                                                )}
                                                </Menu.Item>
                                                
                                            </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <></>
            )}               
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
                <title>Storewind | Receipts</title>
            </Head>
            <Navbar pageTitle={"Receipts"} />
            {/* Content  */}
            {isLoading ? loadingSpinner : renderReceipts}
            {errorMessage && <div className="p-4 text-xl font-bold text-red-500">{errorMessage}</div>}
            {/* Content End  */}
        </div>
    )
}

export default Receipts
