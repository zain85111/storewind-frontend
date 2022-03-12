import Head from "next/head"
import { PlusCircleIcon, } from "@heroicons/react/outline";
import Navbar from "../components/Navbar";

const CashierPromos = () => {
    const promos = [
        {
            'id': 'prm-24',
            'date': '2-Mar-2022',
            'name': 'New Year Deal',
            'discount': 25,
            'imgUrl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40zlaBC797xDYNLaIbP60SE8nXZPVfVHpyQ&usqp=CAU',
        },
        {
            'id': 'prm-24',
            'date': '2-Mar-2022',
            'name': 'Summer Discount',
            'discount': 15,
            'imgUrl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40zlaBC797xDYNLaIbP60SE8nXZPVfVHpyQ&usqp=CAU',
        },
        {
            'id': 'prm-24',
            'date': '2-Mar-2022',
            'name': 'Opening Sale',
            'discount': 50,
            'imgUrl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40zlaBC797xDYNLaIbP60SE8nXZPVfVHpyQ&usqp=CAU',
        },
        
    ]


    return (
        <div>
            <Head>
                <title>Storewind | Promos</title>
            </Head>
            <Navbar pageTitle={"Promos"} />
            <div className="px-5 space-y-2 h-fit">
                <p className='text-lg font-semibold'>Offers & Promos</p>
                {
                    promos ? (
                        <>
                            <div className="space-y-4">
                                {
                                    promos.map((promo) => (
                                        <div className="h-80 flex flex-col justify-between rounded-lg bg-white shadow-md ">
                                            <img src={promo.imgUrl} alt="Offer Image" className="rounded-t-lg h-2/3 w-full "/>
                                           
                                            <div className="h-1/3 flex justify-between items-center px-5">
                                                <div className="space-y-3">
                                                    <p className="text-lg space-x-2"><b>Offer Name:</b> <span>{ promo.name}</span></p>
                                                    <p className="text- space-x-2"><b>Discount:</b> <span>{ promo.discount}%</span></p>
                                                </div>
                                                <button className="flex flex-col items-center  space-y-3">
                                                    <PlusCircleIcon className="h-7 w-7 text-green-800" />
                                                    <p className="text-xs">Add offer to Bill</p>
                                                </button>
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

export default CashierPromos