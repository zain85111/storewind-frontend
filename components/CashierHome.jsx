import { PlusCircleIcon,TrashIcon } from "@heroicons/react/outline";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const CashierHome = () => {
    const [lastBill, setLastBill] = useState({});

    const topProds = [
        {
            'name': 'Product A',
            'imgUrl':'https://cdn.imgbin.com/5/7/12/imgbin-logo-product-design-brand-trademark-new-product-promotion-X3p7EtTUKtLBXCYQghE53G0Ax.jpg',
        },
        {
            'name': 'Product B',
            'imgUrl':'https://cdn.imgbin.com/5/7/12/imgbin-logo-product-design-brand-trademark-new-product-promotion-X3p7EtTUKtLBXCYQghE53G0Ax.jpg',
        },
        {
            'name': 'Product C',
            'imgUrl':'https://cdn.imgbin.com/5/7/12/imgbin-logo-product-design-brand-trademark-new-product-promotion-X3p7EtTUKtLBXCYQghE53G0Ax.jpg',
        },
        {
            'name': 'Product D',
            'imgUrl':'https://cdn.imgbin.com/5/7/12/imgbin-logo-product-design-brand-trademark-new-product-promotion-X3p7EtTUKtLBXCYQghE53G0Ax.jpg',
        },
        {
            'name': 'Product E',
            'imgUrl':'https://cdn.imgbin.com/5/7/12/imgbin-logo-product-design-brand-trademark-new-product-promotion-X3p7EtTUKtLBXCYQghE53G0Ax.jpg',
        },
        {
            'name': 'Product F',
            'imgUrl':'https://cdn.imgbin.com/5/7/12/imgbin-logo-product-design-brand-trademark-new-product-promotion-X3p7EtTUKtLBXCYQghE53G0Ax.jpg',
        },
        {
            'name': 'Product G',
            'imgUrl':'https://cdn.imgbin.com/5/7/12/imgbin-logo-product-design-brand-trademark-new-product-promotion-X3p7EtTUKtLBXCYQghE53G0Ax.jpg',
        },
        {
            'name': 'Product H',
            'imgUrl':'https://cdn.imgbin.com/5/7/12/imgbin-logo-product-design-brand-trademark-new-product-promotion-X3p7EtTUKtLBXCYQghE53G0Ax.jpg',
        },
        {
            'name': 'Product I',
            'imgUrl':'https://cdn.imgbin.com/5/7/12/imgbin-logo-product-design-brand-trademark-new-product-promotion-X3p7EtTUKtLBXCYQghE53G0Ax.jpg',
        },
        {
            'name': 'Product J',
            'imgUrl':'https://cdn.imgbin.com/5/7/12/imgbin-logo-product-design-brand-trademark-new-product-promotion-X3p7EtTUKtLBXCYQghE53G0Ax.jpg',
        },
        {
            'name': 'Product K',
            'imgUrl':'https://cdn.imgbin.com/5/7/12/imgbin-logo-product-design-brand-trademark-new-product-promotion-X3p7EtTUKtLBXCYQghE53G0Ax.jpg',
        },
        {
            'name': 'Product L',
            'imgUrl':'https://cdn.imgbin.com/5/7/12/imgbin-logo-product-design-brand-trademark-new-product-promotion-X3p7EtTUKtLBXCYQghE53G0Ax.jpg',
        },
        {
            'name': 'Product M',
            'imgUrl':'https://cdn.imgbin.com/5/7/12/imgbin-logo-product-design-brand-trademark-new-product-promotion-X3p7EtTUKtLBXCYQghE53G0Ax.jpg',
        },
    ]

    const billItems = [
        {
            id: '204',
            name: 'Knife',
            price: 1143.00,
        },
        {
            id: '234',
            name: 'Spoon',
            price: 1242.50,
        },
        {
            id: '241',
            name: 'Plate',
            price: 2421.99,
        },
        {
            id: '220',
            name: 'Glass',
            price: 1102.00,
        },
        {
            id: '290',
            name: 'Blow',
            price: 1426.50,
        },
        {
            id: '92',
            name: 'Pot',
            price: 1034.99,
        },
    ]
    const discount = 15;

    let subTotal = 0
    for (let i = 0; i < billItems.length; i++){
        subTotal += billItems[i].price;
    }
    let discountAmount = subTotal * discount / 100;

    let taxedAmount = subTotal > 5000 ? subTotal * 5 / 100 : 0.00;

    let grandTotal = subTotal - discountAmount + taxedAmount;

    const getLastBill = async () => {

        let response = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/receipts/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                },
            credentials: "include",
            body: JSON.stringify({store_id: "6299fdaf2ac2473303d0dcb5"})
        })
        
        let result = await response.json()
        
        
        if (result.ok) {
            console.log(result)
            setLastBill(result)
        }
        else {
            console.log('Bill Not Found')
        }

    }

    useEffect( async() => {
        getLastBill()
    })

    return (
        <div className="px-5 pt-5 space-y-2 ">
            <div className='flex flex-col justify-between'>
                <div className='space-y-2'>
                    <p className='text-xs font-semibold'>Top Items Today</p>
                    <div className='flex items-center space-x-5 overflow-x-scroll'>
                        {
                            topProds.slice(0, 11).map(tp => (
                                <div key={tp.name} className="bg-white  h-24 w-24  rounded-md shadow-md flex flex-col items-center justify-around cursor-pointer">
                                    <img src={tp.imgUrl} alt="" className=" h-12 w-12  rounded-full"/>
                                    <p className="text-sm">{ tp.name }</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='py-5 flex justify-around space-x-10'>
                    {/* Promo Section  */}
                    <div className='w-2/3  flex flex-col justify-between space-y-5'>
                        <p className='text-xs font-semibold'>Hot Offers Today</p>
                        <div className='space-y-3 '>
                            <div className="h-80 flex flex-col justify-between rounded-lg bg-white shadow-md ">
                                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAgLPALYzf0ltYLCRVlIGWus8PVNBgUR2UBR0J3oCfGNvBm7kld0YKmqco4rVpHd5txU&usqp=CAU'} alt="Offer Image" className="rounded-t-lg h-2/3 w-full "/>
                                <div className="h-1/3 flex justify-between items-center px-5 border-t-2 border-black ">
                                    <div className="space-y-3">
                                        <p className="text-lg space-x-2"><b>Offer Name:</b> <span>New Years Deal</span></p>
                                        <p className="text- space-x-2"><b>Discount:</b> <span>15%</span></p>
                                    </div>
                                    <button className="flex flex-col items-center space-y-3  rounded-lg hover:bg-gray-00 hover:opacity-80 ">
                                        <PlusCircleIcon className="h-7 w-7 text-green-800" />
                                        <p className="text-xs">Add offer to Bill</p>
                                    </button>
                                </div>
                            </div>

                            <div className="h-80 flex flex-col justify-between rounded-lg bg-white shadow-md ">
                                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAgLPALYzf0ltYLCRVlIGWus8PVNBgUR2UBR0J3oCfGNvBm7kld0YKmqco4rVpHd5txU&usqp=CAU'} alt="Offer Image" className="rounded-t-lg h-2/3 w-full "/>
                                <div className="h-1/3 flex justify-between items-center px-5 border-t-2 border-black ">
                                    <div className="space-y-3">
                                        <p className="text-lg space-x-2"><b>Offer Name:</b> <span>New Years Deal</span></p>
                                        <p className="text- space-x-2"><b>Discount:</b> <span>15%</span></p>
                                    </div>
                                    <button className="flex flex-col items-center space-y-3  rounded-lg hover:bg-gray-00 hover:opacity-80 ">
                                        <PlusCircleIcon className="h-7 w-7 text-green-800" />
                                        <p className="text-xs">Add offer to Bill</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Link href="/cashierBilling">
                            <button className="bg-[#44814E] text-white p-3 rounded-xl">Start Billing</button>
                        </Link>
                    </div>

                    {/* Side Bill  */}
                    <div className='w-1/3 space-y-4 p-4 flex flex-col justify-between rounded-md bg-white'>
                        <div className="space-y-2">
                            <div className='flex justify-between font-semibold'>
                                <p className='text-sm'>Last Bill</p>
                                <p className='text-sm'>8-mar-2020</p>
                            </div>
                            <div className='flex justify-between  font-semibold'>
                                <p className='text-sm'>Bill ID</p>
                                <p className='text-sm'>ord-224</p>
                            </div>
                        </div>

                        {
                                
                            billItems.length > 0 ? (
                                <div className="h-80 space-y-3 overflow-y-auto">
                                    {

                                        billItems.map((billItem, index) => (
                                            
                                            <div key={index} className="h-12 flex justify-between items-center p-2 bg-gray-100 rounded-xl">
                                                <div className="space-y-1" >
                                                    <p className="text-xs space-x-1"><b>Product:</b> <span>{billItem.name}</span></p>
                                                    <p className="text-xs space-x-1"><b>Price:</b> <span>{billItem.price.toFixed(2)} PKR</span></p>
                                                </div>
                                                <button  className="flex flex-col items-center space-y-3  rounded-lg hover:bg-gray-00 hover:opacity-80 ">
                                                    <TrashIcon className="h-6 w-6 text-red-800" />
                                                </button>
                                            </div>
                                        ))
                                    }
                                </div> 

                                ):(<></>)
                        }


                        {/* Bill Summary  */}
                        <div className='h-fit space-y-4'>
                            <h4 className="font-semibold">Bill Summary</h4>
                            <div className='space-y-2'>
                                <div className='flex justify-between text-gray-500'>
                                    <p className='text-xs'>Sub Total</p>
                                    <p className='text-xs'>{subTotal.toFixed(2)} PKR</p>
                                </div>
                                <div className='flex justify-between  text-gray-500'>
                                    <p className='text-xs'>Discount</p>
                                    <p className='text-xs'>{discountAmount.toFixed(2)} PKR</p>
                                </div>
                                <div className='flex justify-between  text-gray-500'>
                                    <p className='text-xs'>Tax (5%)</p>
                                    <p className='text-xs'>{taxedAmount.toFixed(2)} PKR</p>
                                </div>
                                
                                <div className="border-b-2 border-green-800"></div>
                                <div className='flex justify-between  '>
                                    <p className='text-xs'>Grand Total</p>
                                    <p className='text-xs'>{grandTotal.toFixed(2)} PKR</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-fit space-y-3'>
                            <h4 className="font-semibold">Payment</h4>
                            <div className='space-y-2 flex flex-col'>
                                <div className='flex justify-between  text-gray-500'>
                                    <p className='text-xs'>Status</p>
                                    <p className='text-xs'>Paid</p>
                                </div>
                                <div className='flex justify-between  text-gray-500'>
                                    <p className='text-xs'>Method</p>
                                    <p className='text-xs'>Card</p>
                                </div>
                                
                                <div className="border-t-2 p-2 border-green-800 "></div>
                                <button className="bg-[#44814E] text-white  p-2 text-sm rounded-xl">See Bill</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashierHome