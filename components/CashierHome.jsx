import Head from "next/head"
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { TrashIcon } from "@heroicons/react/outline";
import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
import useToken from "../helper/useToken";


const Billing = () => {
    const { token } = useToken();
    console.log(token)


    const [item, setItem] = useState(false)

    const [scannedCodes, setScannedCodes] = useState([]);
    const [notFound, setNotFound] = useState("");
    const [showList, setShowList] = useState([]);
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [cashOrCard, setCashOrCard] = useState("");

    const printBill = async () => {
        if (scannedCodes.length == 0) {
            setNotFound("Scan a product first");
            return;
        }
        if (cashOrCard == "") {
            setNotFound("Select Payment Method");
            return;
        }
        let d = new Date();
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
        if (mo < 10) {
            mo = "0" + mo.toString();
        }
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        d = `${ye}-${mo}-${da}`;
        let productRec = []
        for (let i = 0; i < showList.length; i++) {
            productRec.push({
                product_name: showList[i].Name,
                price: showList[i].Price.toString(),
                discount: showList[i].Discount.toString(),
                categories: showList[i].Categories,
                subCategories: showList[i].Tags,
                quantity: showList[i].recQuantity,
                brand: showList[i].Brand,
                cost: showList[i].Cost,
            })
            const newForUpdate = JSON.parse(JSON.stringify(showList[i]));
            
            newForUpdate.InStock-=showList[i].recQuantity;
            newForUpdate.TotalSold+=showList[i].recQuantity;

            if(newForUpdate.InStock < 0){
                newForUpdate.InStock = 0;
                newForUpdate.TotalSold-=showList[i].recQuantity
            }

            newForUpdate.Price-=0.01;
            newForUpdate.Discount-=0.01;


            console.log(JSON.stringify(newForUpdate));
            let response = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/product/update", {
            method: "POST",
           
            credentials: "include",
            body: JSON.stringify(newForUpdate),
        })
        }

        const reciept = {
            emp_id: token.currentUser.email,
            receipt_date: d + "T00:00:00.000Z",
            amount: (total - discount).toString(),
            narration: "String",
            payment_method: cashOrCard,
            products: productRec
        }
        let response = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/receipts/add", {
            method: "POST",
            headers: {

                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify(reciept),
        })

        console.log(JSON.stringify(reciept))
        console.log(await response.json());
        print();
        setCashOrCard("");
        setDiscount(0);
        setTotal(0);
        setScannedCodes([]);
        setShowList([]);
        setNotFound("");
    }

    async function getProduct(id) {
        let response = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/product/", {
            method: "POST",

            credentials: "include",
            body: JSON.stringify({ id: id, storeId: token.currentUser.storeid }),
        })
        let result = await response.json();
        
        if (result.Name == "") {
            setNotFound("Product Not Found");
        }
        else {
            setNotFound("");

            // let res = JSON.stringify(scannedCodes);
            // res = JSON.parse(res);
            // res.push(result);        
            setScannedCodes(scannedCodes => [...scannedCodes, result]);
        }
    }
    useEffect(() => {
        let alreadyAdded = [];
        let products = [];
        let tTemp = 0;
        let dTemp = 0;
        for (let i = 0; i < scannedCodes.length; i++) {
            tTemp += parseFloat(scannedCodes[i].Price)
            dTemp += (parseFloat(scannedCodes[i].Discount) / 100) * parseFloat(scannedCodes[i].Price);
            if (alreadyAdded.includes(scannedCodes[i].Id)) {
                for (let j = 0; j < products.length; j++) {
                    if (products[j].Id == scannedCodes[i].Id) {
                        products[j].recQuantity++;
                    }
                }
            }
            else {
                alreadyAdded.push(scannedCodes[i].Id);
                let scCode = JSON.parse(JSON.stringify(scannedCodes[i]))
                scCode.recQuantity = 1;
                products.push(scCode);
            }
        }
        setShowList(products);
        setTotal(tTemp);
        setDiscount(dTemp)
    }, [scannedCodes]);
    useEffect(() => {
        // Html5QrcodeScanner Section

        function onScanSuccess(decodedText, decodedResult) {
            // handle the scanned code as you like, for example:
            getProduct(decodedText)
        }

        function onScanFailure(error) {
            // handle scan failure, usually better to ignore and keep scanning.
            // for example:
            console.warn(`Code scan error = ${error}`);
        }

        let html5QrcodeScanner = new Html5QrcodeScanner(
            "reader",
            {
                fps: 1, qrbox: { width: 450, height: 250 }, experimentalFeatures: {
                    useBarCodeDetectorIfSupported: true
                },
                rememberLastUsedCamera: true
            },
            false
        );
        html5QrcodeScanner.render(onScanSuccess, onScanFailure);

        // ---------------------------

    }, []);
    const deleteProduct = (id) => {
        const newArr = JSON.parse(JSON.stringify(scannedCodes));
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i].Id == id) {
                newArr.splice(i, 1);
                break;
            }
        }

        setScannedCodes(newArr);
    }

    // Date of Today's Bill

    let d = new Date();
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    d = `${da}-${mo}-${ye}`;


    useEffect(async () => {
        let response = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/employees/get_employee", {
            method: 'POST',

            credentials: "include",
            body: JSON.stringify({ "_id": token.currentUser.iat })
        });

        let result = await response.json();

    }, [])


    return (
        <div id="page">
            <style jsx global>
                {`
                    #dontShow{
                        background: grey;
                    }
                    @media print {
                        body *{
                        visibility: hidden;
                        }
                    
                        #section-to-print, #section-to-print * {
                        visibility: visible;
                        }
                    
                        #section-to-print {
                        position: absolute;
                        left: 0;
                        top: 0;
                        }
                        #dontShow{
                            visibility: hidden;
                        }
                        #dontShow2{
                            visibility: hidden;
                        }
                    }
                `}
            </style>
            <Head>
                <title>Storewind | Billing</title>
            </Head>
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
                                                    <img src={tp.imgUrl} alt="" className="h-12 w-12 rounded-full" />
                                                    <p className="text-sm">{tp.name}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </>
                        ) : (<></>)
                    }

                    <div className='py-5 flex flex-col md:flex-row justify-around md:space-x-10 space-y-4 '>
                        {/* Bill Section  */}
                        <div className='w-full md:w-2/3 h-fit flex flex-col justify-between space-y-5'>
                            <p className='text-lg font-semibold'>Start Bill </p>
                            <div className='flex flex-col space-y-3 '>
                                <div className="w-full px-8">
                                    <div className="text-xl font-extrabold text-red-600 text-center">{notFound}</div>
                                    <div id="reader" width="600px"></div>
                                </div>
                            </div>
                            {/* <button className="bg-green-700 text-white  p-2 text-sm rounded-xl" onClick={activateLasers}>Activate Lasers</button> */}

                        </div>

                        {/* Side bill  */}
                        <div className='md:w-1/3 space-y-4 p-4 flex flex-col justify-between rounded-lg bg-white' id="section-to-print">
                            <div className="space-y-2">
                                <div className='flex justify-between font-semibold'>
                                    <p className='text-sm'>Current Bill</p>
                                    <p className='text-sm'>{d}</p>
                                </div>

                            </div>
                            {

                                showList.length > 0 ? (
                                    <div className="h-80 space-y-3 overflow-y-auto" >
                                        {

                                            showList.map((scannedCode, index) => (

                                                <div key={index} className="h-20 flex justify-between items-center p-2 bg-gray-100 rounded-xl">
                                                    <div className="space-y-1" >
                                                        <p className="text-xs space-x-1"><b>Product:</b> <span>{scannedCode.Name}</span></p>
                                                        <p className="text-xs space-x-1"><b>Price:</b> <span>{scannedCode.Price} x {scannedCode.recQuantity} </span></p>
                                                        <p className="text-xs space-x-1"><b>Discount:</b> <span>{scannedCode.Discount}% / product </span></p>

                                                    </div>

                                                    <button className="flex flex-col items-center space-y-3  rounded-lg hover:bg-gray-00 hover:opacity-80 " id="dontShow2" onClick={() => deleteProduct(scannedCode.Id)}>
                                                        <TrashIcon className="h-6 w-6 text-red-800" />
                                                    </button>
                                                </div>
                                            ))
                                        }
                                    </div>

                                ) : (<></>)
                            }

                            {/* Bill Summary  */}
                            <div className='h-fit space-y-4'>
                                <h4 className="font-semibold">Bill Summary</h4>
                                <div className='space-y-2'>
                                    <div className='flex justify-between text-gray-500'>
                                        <p className='text-xs'>Sub Total</p>
                                        <p className='text-xs'>{total} PKR</p>
                                    </div>
                                    <div className='flex justify-between  text-gray-500'>
                                        <p className='text-xs'>Discount</p>
                                        <p className='text-xs'>{discount} PKR</p>
                                    </div>
                                    <div className="border-b-2 border-green-800"></div>
                                    <div className='flex justify-between  '>
                                        <p className='text-xs'>Grand Total</p>
                                        <p className='text-xs'>{total - discount} PKR</p>
                                    </div>
                                </div>
                            </div>
                            {/* Payment details  */}
                            <div className='h-fit space-y-3'>
                                <h4 className="font-semibold">Payment</h4>
                                <div className='space-y-4 flex flex-col justify-between'>
                                    <div className="flex justify-between text-center">
                                        <button className="h-16 w-16 xl:h-20 xl:w-20 text-sm xl:text-base bg-gradient-to-bl from-[#FF827A] to-[#FFA825] rounded-xl text-white " onClick={() => { setNotFound(""); setCashOrCard("Cash") }} id={cashOrCard == "Cash" ? " " : "dontShow"}>Cash</button>
                                        <button className="h-16 w-16 xl:h-20 xl:w-20 text-sm xl:text-base bg-gradient-to-bl from-[#FF827A] to-[#FFA825] rounded-xl text-white " onClick={() => { setNotFound(""); setCashOrCard("Card") }} id={cashOrCard == "Card" ? " " : "dontShow"}>Card</button>
                                        <button className="h-16 w-16 xl:h-20 xl:w-20 text-sm xl:text-base bg-gradient-to-bl from-[#FF827A] to-[#FFA825] rounded-xl text-white " onClick={() => { setNotFound(""); setCashOrCard("E-wallet") }} id={cashOrCard == "E-wallet" ? " " : "dontShow"}>E-wallet</button>
                                    </div>
                                    <button className="bg-green-700 text-white  p-2 text-sm rounded-xl" onClick={printBill}>Print Bill</button>
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