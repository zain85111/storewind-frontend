import Head from "next/head"
import Link from "next/link";
import { useState,useEffect,useRef } from "react";
import Navbar from "../components/Navbar";
import {
    XIcon,
    PlusIcon,
} from "@heroicons/react/outline";

const Billing = () => {
    const [item, setItem] = useState(false)
    const [hasPhoto, setHasPhoto] = useState(false)
    const [cart, setCart] = useState([])

    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const g_width = 720;
    const g_height = 240;

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ video: { width: g_width, height: g_height } })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            }).catch(err => {
                console.error(err)
            })
        
    }

    const takePhoto = () => {
        const width = g_width/1.5;
        const height = g_height;

        let video = videoRef.current;
        let photo = photoRef.current;
        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);

        setHasPhoto(true)
    }

    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');
        ctx.clearRect(0,0,photo.width,photo.height)

        setHasPhoto(false)
    }

    const addtoCart = () => {
        let item = "item"
        cart.push(item)
        setCart(cart)
    }

    useEffect(() => {
        getVideo();
    },[videoRef])

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
                                <div className='bg-white'>
                                    <p className='text-xs font-semibold'>Similar Items</p>
                                    <div className=' h-28  flex items-center space-x-5 overflow-auto'>
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
                            </>
                        ) : (<></>)
                    }
                    <div className='py-5 flex justify-around space-x-10'>
                        <div className='w-2/3 h-fit flex flex-col justify-between  space-y-5'>
                            <p className='text-lg font-semibold'>Start Bill </p>
                            <div className='flex flex-col space-y-3 '>
                                <div className=" w-full px-8">
                                    <video ref={videoRef} className=""></video>
                                </div>
                                <div className={"flex justify-center "+(hasPhoto?"  space-x-3":"hidden")}>
                                    <canvas ref={photoRef} className="pl-8"></canvas>
                                    <div className="space-y-2 flex flex-col">
                                        <button className="p-3 bg-green-600 text-white rounded-full" onClick={addtoCart}><PlusIcon className="h-4 w-4"/> </button>
                                        <button className="p-3 bg-red-600 text-white rounded-full" onClick={closePhoto}><XIcon className="h-4 w-4"/> </button>
                                    </div>
                                </div>
                            </div>
                            <Link href="#!"  >
                                <button className="bg-green-700 text-white p-3 rounded-xl" onClick={takePhoto}>Click To Scan</button>
                            </Link>
                        </div>
                        <div className=' w-1/3 p-4 space-y-2 rounded-md bg-white'>
                            <div className='flex justify-between font-semibold'>
                                <p className='text-sm'>Current Bill</p>
                                <p className='text-sm'>8-mar-2020</p>
                            </div>
                            <div className='flex justify-between  font-semibold'>
                                <p className='text-sm'>Bill ID</p>
                                <p className='text-sm'>ord-224</p>
                            </div>
                            {
                                
                                cart.length > 0 ? (
                                    cart.forEach(c => (
                                        <div className="bg-gray-200 h-80">
                                            <p className="text-lg">{c}</p>
                                        </div>
                                    ))
 
                                ):(<></>)
                            }
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
                                <div className='space-y-4 flex flex-col justify-between'>
                                    <div className="flex justify-between text-center">
                                        <div className="h-20 w-20 bg-yellow-600 rounded-md">Cash</div>
                                        <div className="h-20 w-20 bg-yellow-600 rounded-md"> Card</div>
                                        <div className="h-20 w-20 bg-yellow-600 rounded-md">E-wallet</div>
                                    </div>
                                    <button className="bg-green-700 text-white  p-2 text-sm rounded-xl">See Bill</button>
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