import Head from "next/head"
import { useState } from "react";
import Navbar from "../components/Navbar";
import { TrashIcon } from "@heroicons/react/outline";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";


const Billing = () => {

    const similarProducts = [
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
    ]

    const [item, setItem] = useState(false)

    const [data, setData] = useState("Captura : ...");
    const [show, setShow] = useState(false);


    const onUpdateScreen = (err, result) => {
        if (result) {
            setData(result.text);
            setShow(false);
        } else {
            setData("Not Found");
        }
    };
    // Date of Today's Bill

    let d = new Date();
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    d = `${da}-${mo}-${ye}`;


    

    return (
        <div>
            <Head>
                <title>Storewind | Billing</title>
            </Head>
            <Navbar pageTitle={"Billing"} />
            <div className="px-5 space-y-2 h-fit">
                <div className='flex flex-col justify-between'>
                    {
                        item ? (
                            <>
                                <div className='space-y-2'>
                                    <p className='text-xs font-semibold'>Similar Items</p>
                                    <div className=' w-fit flex items-center space-x-5 overflow-x-hidden'>
                                        {
                                            similarProducts.map(tp => (
                                                <div className="bg-white h-24 w-24 rounded-md shadow-md flex flex-col items-center justify-around cursor-pointer">
                                                    <img src={tp.imgUrl} alt="" className="h-12 w-12 rounded-full"/>
                                                    <p className="text-sm">{ tp.name }</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </>
                        ) : (<></>)
                    }
                    
                    <div className='py-5 flex justify-around space-x-10'>
                        {/* Bill Section  */}
                        <div className='w-2/3 h-fit flex flex-col justify-between  space-y-5'>
                            <p className='text-lg font-semibold'>Start Bill </p>
                            <div className='flex flex-col space-y-3 '>
                                <>
                                    {show && (
                                    <BarcodeScannerComponent
                                        width={500}
                                        height={500}
                                        onUpdate={(err, result) => onUpdateScreen(err, result)}
                                    />
                                    )}
                                    <p>{data}</p>
                                </>
                            </div>
                            <div>
                                <button onClick={() => setShow(true)}> Capture </button>
                            </div>
                            
                        </div>

                        {/* Side bill  */}
                        <div className='w-1/3 space-y-4 p-4 flex flex-col justify-between rounded-md bg-white'>
                            <div className="space-y-2">
                                <div className='flex justify-between font-semibold'>
                                    <p className='text-sm'>Current Bill</p>
                                    <p className='text-sm'>{ d }</p>
                                </div>
                                <div className='flex justify-between  font-semibold'>
                                    <p className='text-sm'>Bill ID</p>
                                    <p className='text-sm'>ord-224</p>
                                </div>
                            </div>
                                {
                                    
                                    // data.length > 0 ? (
                                    // <div className="h-80 space-y-3 overflow-y-auto">
                                    //     {

                                    //         data.map((scannedCode, index) => (
                                                
                                    //             <div key={index} className="h-12 flex justify-between items-center p-2 bg-gray-100 rounded-xl">
                                    //                 <div className="space-y-1" >
                                    //                     <p className="text-xs space-x-1"><b>Product:</b> <span>{scannedCode.decodedText}</span></p>
                                    //                     <p className="text-xs space-x-1"><b>Price:</b> <span>15.00 PKR</span></p>
                                    //                 </div>
                                    //                 <button  className="flex flex-col items-center space-y-3  rounded-lg hover:bg-gray-00 hover:opacity-80 ">
                                    //                     <TrashIcon className="h-6 w-6 text-red-800" />
                                    //                 </button>
                                    //             </div>
                                    //         ))
                                    //     }
                                    //     </div> 
    
                                    // ):(<></>)
                                }
                                        
                            {/* Bill Summary  */}
                            <div className='h-fit space-y-4'>
                                <h4 className="font-semibold">Bill Summary</h4>
                                <div className='space-y-2'>
                                    <div className='flex justify-between text-gray-500'>
                                        <p className='text-xs'>Sub Total</p>
                                        <p className='text-xs'>0.00 PKR</p>
                                    </div>
                                    <div className='flex justify-between  text-gray-500'>
                                        <p className='text-xs'>Discount</p>
                                        <p className='text-xs'>0.00 PKR</p>
                                    </div>
                                    <div className='flex justify-between  text-gray-500'>
                                        <p className='text-xs'>Tax (5%)</p>
                                        <p className='text-xs'>0.00 PKR</p>
                                    </div>
                                    
                                    <div className="border-b-2 border-green-800"></div>
                                    <div className='flex justify-between  '>
                                        <p className='text-xs'>Grand Total</p>
                                        <p className='text-xs'>0.00 PKR</p>
                                    </div>
                                </div>
                            </div>
                            {/* Payment details  */}
                            <div className='h-fit space-y-3'>
                                <h4 className="font-semibold">Payment</h4>
                                <div className='space-y-4 flex flex-col justify-between'>
                                    <div className="flex justify-between text-center">
                                        <button className="h-20 w-20 bg-yellow-600 rounded-md text-white ">Cash</button>
                                        <button className="h-20 w-20 bg-yellow-600 rounded-md text-white ">Card</button>
                                        <button className="h-20 w-20 bg-yellow-600 rounded-md text-white ">E-wallet</button>
                                    </div>
                                    <button className="bg-green-700 text-white  p-2 text-sm rounded-xl">Print Bill</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billing