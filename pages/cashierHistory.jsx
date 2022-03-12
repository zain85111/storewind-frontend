import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import Head from "next/head"
import Navbar from "../components/Navbar";

const CashierHistory = () => {
    const orders = [
        {
            'id': 'ord-24',
            'numOfProds': 4,
            'totalBill': 359.00,
            'date': '2-Mar-2022',
        },
        {
            'id': 'ord-24',
            'numOfProds': 4,
            'totalBill': 359.00,
            'date': '2-Mar-2022',
        },
        {
            'id': 'ord-24',
            'numOfProds': 4,
            'totalBill': 359.00,
            'date': '2-Mar-2022',
        },
        {
            'id': 'ord-24',
            'numOfProds': 4,
            'totalBill': 359.00,
            'date': '2-Mar-2022',
        },
        {
            'id': 'ord-24',
            'numOfProds': 4,
            'totalBill': 359.00,
            'date': '2-Mar-2022',
        },
        {
            'id': 'ord-24',
            'numOfProds': 4,
            'totalBill': 359.00,
            'date': '2-Mar-2022',
        },
        {
            'id': 'ord-24',
            'numOfProds': 4,
            'totalBill': 359.00,
            'date': '2-Mar-2022',
        },
    ]

    return (
        <div>
            <Head>
                <title>Storewind | History</title>
            </Head>
            <Navbar pageTitle={"History"} />
            <div className="px-5 space-y-2 h-fit">
                <p className='text-lg font-semibold'>Order History </p>
                {
                    orders ? (
                        <>
                            <div className="space-y-4">
                                {
                                    orders.slice(0, 5).map((order) => (
                                        <div className="px-4 py-2 h-24 rounded-lg flex align-middle items-center justify-between bg-white">
                                            <div className="flex flex-col justify-between h-full ">
                                                <p className="space-x-2 text-sm"><b>Order Id:</b> <span>{ order.id }</span></p>
                                                <p className="space-x-2 text-sm"><b>No. Of Products:</b> <span>{ order.numOfProds }</span></p>
                                                <p className="space-x-2 text-sm"><b>Total Bill:</b> <span>{ order.totalBill }.00 PKR</span></p>
                                            </div>
                                            <div className="flex flex-col justify-between items-end h-full ">
                                                <p className="space-x-2 text-sm"><b>Date:</b> <span>{ order.date }</span></p>
                                                <button className="text-green-500">See Details</button>
                                            </div>
                                        </div>
                                    ))
                                }
                                {/* Pagination  */}
                                <div className="p-4 flex items-center justify-between border-t border-gray-200 sm:px-6">
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
                        </>
                    ) : (<></>)
                }

                
            </div>
        </div>
    )
}

export default CashierHistory