import Head from "next/head"
import Navbar from "../../components/Navbar";
import {
  DotsHorizontalIcon,
  PlusCircleIcon,
  FilterIcon,
  ChevronDownIcon,
  TrashIcon,
  PencilAltIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { Menu, Transition} from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import useToken from "../../helper/useToken";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Receipts = () => {

    const { token, setToken } = useToken();
    const router = useRouter();

    const filters = [
        {
            id: 1,
            name:'Filter A',
        },
        {
            id: 2,
            name:'Filter B',
        },
        {
            id: 3,
            name:'Filter C',
        },
    ];

    const rrreceipts = [
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
            let response = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/receipts/",{
                method: "POST",
                mode:'no-cors',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({ store_id: token.currentUser.email }),
            })
            let result = await response.json();
            console.log(result,"All Receipts")

            if (result.ok) {
                setReceipts(result)
            }

            
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (token.currentUser.rolename != 'ADMIN') {
            router.push('/')
        }
    })

    useEffect(() => {
        getReceipts();
    },[])

    return (
        <div>
            <Head>
                <title>Storewind | Receipts</title>
            </Head>
            <Navbar pageTitle={"Receipts"} />
            {/* Content  */}
            <div className="p-4 space-y-2 relative">
                <div className="flex justify-end items-center h-14 ">
                    {receipts ? (
                    <>
                        <div className="flex space-x-4 ">
                        <Link href={"/receipts/add"}>
                            <button className="text-xs font-semibold flex items-center rounded-xl p-2  space-x-4 border-[1px] border-green-800 bg-white active:text-green-600">
                            <span>
                                <PlusCircleIcon className="h-5 w-5 text-green-800" />
                            </span>
                            <p>Add Receipt</p>
                            </button>
                        </Link>
                        <Menu as="div" className="">
                            <Menu.Button className="active:text-green-600 text-sm font-semibold  border-[1px] border-green-800 bg-white p-2 flex items-center rounded-xl space-x-6">
                                <FilterIcon className="h-4 w-4 text-green-800" />
                                <p>Filter</p>
                                <ChevronDownIcon className=" h-4 w-4 text-green-800" />
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
                                <Menu.Items className="origin-top-right absolute right-4 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                    {
                                        filters.map((f) => (
                                        
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                type="submit"
                                                className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block w-full text-left px-4 py-2 text-sm"
                                                )}
                                            >
                                                {f.name}
                                            </button>
                                            )}
                                        </Menu.Item>
                                        ))
                                    }
                                    
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        </div>
                    </>
                    ) : (
                    <></>
                    )}
                </div>
                {/* Table  */}
                {receipts.length >0 ? (
                    <div className=" space-y-24">
                        <table className=" hover:border-collapse w-full text-center items-center align-middle">
                            <thead className="">
                                <tr className="h-14 bg-white border-b rounded-md text-sm">
                                    <th className="space-x-4 p-2"><input type="checkbox" /></th>
                                    <th>Sr</th>
                                    <th>ID</th>
                                    <th>No. Of Items</th>
                                    <th>Amount</th>
                                    <th>Created On</th>
                                    <th>Empolyee ID</th>
                                    <th>User ID</th>
                                    <th>Payment Method</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="">
                            {receipts.slice(0, 12).map((item, i) => (
                                <tr
                                className="h-10 bg-white hover:bg-gray-50 min-w-full text-xs"
                                key={item.id}
                                >
                                <td className="space-x-4 p-2 min-w-max">
                                    <input type="checkbox" id="itemChk" />
                                </td>

                                <td>{i + 1}</td>
                                <td>{item.id}</td>
                                <td>{item.noOfItems}</td>
                                <td>{item.amount}</td>
                                <td>{item.date}</td>
                                <td>{item.empId}</td>
                                <td>{item.userId}</td>
                                <td>{item.paymentMethod}</td>
                                <td className=" flex justify-center py-2 ">
                                    <Menu as="div" className="">
                                        <Menu.Button className="active:text-green-600">
                                            <DotsHorizontalIcon className=" h-5 w-5" aria-hidden="true"/>
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
                                            <div className="py-1">
                                                <Menu.Item>
                                                {({ active }) => (
                                                    <div
                                                    className={classNames(
                                                        active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                        "block w-full text-left px-4 py-2 text-sm"
                                                    )}
                                                    >
                                                    <Link
                                                        href={"/receipts/" + item.id}
                                                        key={item.id}
                                                    >
                                                        <button className="flex space-x-2">
                                                        <ViewListIcon className="h-5 w-5" />
                                                        <p>Details</p>
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
                                                        "block w-full text-left px-4 py-2 text-sm"
                                                    )}
                                                    >
                                                    <Link href={"/receipts/edit/?id=" + item.id}>
                                                        <button className="flex space-x-2">
                                                        <PencilAltIcon className="h-5 w-5" />
                                                        <p>Update</p>
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
                                                        "block w-full text-left px-4 py-2 text-sm"
                                                    )}
                                                    >
                                                    <Link
                                                        href={"/receipts/delete/?id=" + item.id}
                                                    >
                                                        <button className="flex space-x-2">
                                                        <TrashIcon className="h-5 w-5" />
                                                        <p>Remove</p>
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

                        {/* Pagination  */}
                        <div className="p-4 flex items-center justify-between border-t border-gray-200 sm:px-6 ">
                            <div className="flex-1 flex justify-between sm:hidden">
                                <a
                                href="#"
                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                >
                                Previous
                                </a>
                                <a
                                href="#"
                                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                >
                                Next
                                </a>
                            </div>
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                                        <span className="font-medium">10</span> results
                                    </p>
                                </div>
                                <div>
                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                    <a
                                    href="#"
                                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                    <span className="sr-only">Previous</span>
                                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                    </a>
                                    
                                    <a
                                    href="#"
                                    aria-current="page"
                                    className="z-10 bg-green-50 border-green-500 text-green-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                    >
                                    1
                                    </a>
                                    <a
                                    href="#"
                                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                    >
                                    2
                                    </a>
                                    <a
                                    href="#"
                                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                                    >
                                    3
                                    </a>
                                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                    ...
                                    </span>
                                    <a
                                    href="#"
                                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                                    >
                                    8
                                    </a>
                                    <a
                                    href="#"
                                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                    >
                                    9
                                    </a>
                                    <a
                                    href="#"
                                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                    >
                                    10
                                    </a>
                                    <a
                                    href="#"
                                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                    <span className="sr-only">Next</span>
                                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                    </a>
                                </nav>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : (
                    <></>
                )}               
            </div>
            {/* Content End  */}
        </div>
    )
}

export default Receipts
