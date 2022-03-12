import { PlusCircleIcon, } from "@heroicons/react/outline";
import Link from "next/link";

const CashierHome = () => {

    return (
        <div className="px-5 space-y-2 h-screen">
            <div className='flex flex-col justify-between'>
                <div className=''>
                    <p className='text-xs font-semibold'>Top Items Today</p>
                    <div className=' h-28  flex items-center space-x-5 overscroll-auto'>
                        <div className="bg-red-200 h-24 w-24 rounded-md flex flex-col items-center justify-around">
                            <div className="h-12 w-12 bg-green-700 rounded-full"></div>
                            <p>Item Name</p>
                        </div>
                        <div className="bg-red-200 h-24 w-24 rounded-md"></div>
                        <div className="bg-red-200 h-24 w-24 rounded-md"></div>
                        <div className="bg-red-200 h-24 w-24 rounded-md"></div>
                        <div className="bg-red-200 h-24 w-24 rounded-md"></div>
                        <div className="bg-red-200 h-24 w-24 rounded-md"></div>
                        <div className="bg-red-200 h-24 w-24 rounded-md"></div>
                        <div className="bg-red-200 h-24 w-24 rounded-md"></div>
                        <div className="bg-red-200 h-24 w-24 rounded-md"></div>
                        <div className="bg-red-200 h-24 w-24 rounded-md"></div>
                    </div>
                </div>
                <div className='py-5 h-fit  flex justify-around space-x-10'>
                    <div className='w-2/3  flex flex-col justify-between space-y-5'>
                        <p className='text-xs font-semibold'>Hot Offers Today</p>
                        <div className='flex flex-col  space-y-3'>
                            <div className="h-80 rounded-lg bg-green-900 shadow-md ">
                                <div className="h-2/3 "></div>
                                <div className="h-1/3 bg-white flex justify-between items-center  px-5">
                                    <div>
                                        <h4 className="text-lg">Offer Name</h4>
                                        <p>Discount 15%</p>
                                    </div>
                                    <div className="py-2 flex flex-col items-center">
                                        <PlusCircleIcon className="h-5 w-5" />
                                        <p className="text-xs">Add offer to Bill</p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-80 rounded-lg bg-green-900 shadow-md ">
                                <div className="h-2/3 "></div>
                                <div className="h-1/3 bg-white flex justify-between items-center  px-5">
                                    <div>
                                        <h4 className="text-lg">Offer Name</h4>
                                        <p>Discount 15%</p>
                                    </div>
                                    <div className="py-2 flex flex-col items-center">
                                        <PlusCircleIcon className="h-5 w-5" />
                                        <p className="text-xs">Add offer to Bill</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href="/cashierBilling">
                            <button className="bg-green-700 text-white p-3 rounded-xl">Start Billing</button>
                        </Link>
                    </div>
                    <div className=' w-1/3 h-fit p-4 space-y-2 rounded-md bg-white'>
                        <div className='flex justify-between font-semibold'>
                            <p className='text-sm'>Last Bill</p>
                            <p className='text-sm'>8-mar-2020</p>
                        </div>
                        <div className='flex justify-between  font-semibold'>
                            <p className='text-sm'>Bill ID</p>
                            <p className='text-sm'>ord-224</p>
                        </div>
                        <div className="bg-gray-200 h-80"></div>
                        <div className='h-fit space-y-3'>
                            <h4>Bill Summary</h4>
                            <div className='space-y-2'>
                                <div className='flex justify-between  text-gray-500'>
                                    <p className='text-sm'>Sub Total</p>
                                    <p className='text-sm'>0.00 PKR</p>
                                </div>
                                <div className='flex justify-between  text-gray-500'>
                                    <p className='text-sm'>Discount</p>
                                    <p className='text-sm'>0.00 PKR</p>
                                </div>
                                <div className='flex justify-between  text-gray-500'>
                                    <p className='text-sm'>Tax (5%)</p>
                                    <p className='text-sm'>0.00 PKR</p>
                                </div>
                                
                                <div className="border-b-2 border-green-800"></div>
                                <div className='flex justify-between  '>
                                    <p className='text-sm'>Grand Total</p>
                                    <p className='text-sm'>0.00 PKR</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit space-y-3'>
                            <h4>Payment</h4>
                            <div className='space-y-2 flex flex-col'>
                                <div className='flex justify-between  text-gray-500'>
                                    <p className='text-sm'>Last Bill</p>
                                    <p className='text-sm'>8-mar-2020</p>
                                </div>
                                <div className='flex justify-between  text-gray-500'>
                                    <p className='text-sm'>Last Bill</p>
                                    <p className='text-sm'>8-mar-2020</p>
                                </div>
                                <div className='flex justify-between  text-gray-500'>
                                    <p className='text-sm'>Last Bill</p>
                                    <p className='text-sm'>8-mar-2020</p>
                                </div>
                                <div className="border-t-2 p-2 border-green-800 "></div>
                                <button className="bg-green-700 text-white  p-2 text-sm rounded-xl">See Bill</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashierHome