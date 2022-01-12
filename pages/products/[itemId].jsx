import Head from "next/head"
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import axios from "axios";
const api = axios.create({
    baseURL:"http://localhost:3000/api/products/"
    // baseURL:"http://18.116.39.224:8080/api/product/"
})

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/products');

    const data = await res.json();

    const paths = data.map(item => {
        return {
            params: {itemId: item.id.toString()}
        }
    })

    return {
        paths,
        fallback:false,
    }
}

export const getStaticProps = async ({params}) => { 
    const res = await fetch('http://localhost:3000/api/products/'+params.itemId);
    const data = await res.json();

    return {
        props: {
            prod: data,
            id: params.itemId,
        }
    }
};


const Item = ({ prod, id }) => {

    const [item,setItem] = useState({})
    useEffect(() => {
        getData()
    }, [])
    
    const getData = async () => {
        const data = await api.get('/'+id).then(({ data }) => data)
        setItem(data)
        console.log(item)
    }
    

    
    return (
        <div>
            <Head>
                <title>Storewind | Product Details</title>
            </Head>
            <Navbar pageTitle={item.name+" Id: "+id} />
            <div className="p-4 m-2" key={item.id}>             
                <div className="py-4 flex justify-between space-x-10 ">
                    <div className="w-96 ">
                        <img src={item.imgUrl} alt="Product Img" />
                    </div>
                    <div className="w-full text space-y-10">
                        <div className="flex justify-between text-center border-b border-black  ">
                            <p className="font-bold">Name</p>
                            <p className="">{item.name}</p>
                        </div>
                        <div className="flex justify-between text-center border-b border-black  ">
                            <p className="font-bold">Brand</p>
                            <p className="">{item.brand}</p>
                        </div>
                        <div className="flex justify-between text-center border-b border-black  ">
                            <p className="font-bold">Category</p>
                            <p className="">{item.categories}</p>
                        </div>
                        <div className="flex justify-between text-center border-b border-black  ">
                            <p className="font-bold">Sub-Category</p>
                            <p className="">{item.subCatagories}</p>
                        </div>
                        <div className="flex justify-between text-center border-b border-black  ">
                            <p className="font-bold">Cost</p>
                            <p className="">$ {item.price*1.2}</p>
                        </div>
                        <div className="flex justify-between text-center border-b border-black  ">
                            <p className="font-bold">Price</p>
                            <p className="">$ {item.price}</p>
                        </div>
                        <div className="flex justify-between text-center border-b border-black  ">
                            <p className="font-bold">Discount</p>
                            <p className="">{item.discount}%</p>
                        </div>
                        <div className="flex justify-between text-center border-b border-black  ">
                            <p className="font-bold">Stock</p>
                            <p className="">{item.isStock}</p>
                        </div>
                        <div className="flex justify-between text-center border-b border-black  ">
                            <p className="font-bold">Barcode</p>
                            <p className="">{item.barCode}</p>
                        </div>
                    </div>
                </div>
                
                {/* Buttons */}
                <div className="pt-4 space-x-4 flex justify-end items-center">
                    <Link href={'/products/edit/?id=' + item.id}>
                        <button
                            type="button"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-400 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                        >
                            Edit
                        </button>
                    </Link>
                    <Link href={'/products/delete/?id=' + item.id}>
                        <button
                            type="button"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                        >
                            Delete
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Item;



