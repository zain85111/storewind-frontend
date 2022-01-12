import Head from "next/head"
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { Transition,Listbox } from '@headlessui/react'
import { CheckIcon, SelectorIcon,ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Fragment, useState,useEffect } from "react"
import { useRouter } from 'next/router';
import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000/api/products/"
    // baseURL:"http://18.116.39.224:8080/api/product/"
    // baseURL:"https://jsonplaceholder.typicode.com/users"

})


const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=htmlFormat&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Devon Webb',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Tom Cook',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Tanya Fox',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Hellen Schmidt',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    name: 'Caroline Schultz',
    avatar:
      'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 8,
    name: 'Mason Heaney',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 9,
    name: 'Claudie Smitham',
    avatar:
      'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 10,
    name: 'Emil Schaefer',
    avatar:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]



const Item = () => {
    const router = useRouter();

    const [selectedCat, setSelectedCat] = useState(people[0])
    const [selectedSubCat, setSelectedSubCat] = useState(people[2])

    const [prodName,setProdName] = useState('')
    const [prodBrand,setProdBrand] = useState('')
    const [prodCost,setProdCost] = useState(0.0)
    const [prodPrice,setProdPrice] = useState(0.0)
    const [prodDiscount,setProdDiscount] = useState(0.0)
    const [prodStock,setProdStock] = useState('')
    const [prodBarcode,setProdBarcode] = useState('')


    const addProduct = async (e) => {
        // e.preventDefault()

        // const res = await fetch('/api/products', {
        //     body: JSON.stringify({
                
        //         name: prodName,
        //         brand: prodBrand,
        //         price: prodPrice,
        //         discount: prodDiscount,
        //         stock: prodStock,

        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     method: 'POST'
        // })

        // const result = await res.json()
        // console.log(result)


        

       

        const data = await api.get('/').then(({ data }) => data)

        const res = await api.post('/',{
                
            id: (data.length+1).toString(),
            name: "prodName",
            brand: "prodBrand",
            price: 103,
            discount: 10,
            storeId: "20",
            categories: ['Kitchen'],
            subCatagories: ['Cutlory'],
            tags: ['Cooking','Cutting'],
            location: "Aisle 3",
            isStock: "98999999",
            barCode:"bdk-391-pije",
            modified: Date.now(),
            imgUrl: 'https://icon-library.com/images/product-icon-png/product-icon-png-11.jpg'

        })
        console.log(res)

        setTimeout(() => {
            router.push('/products')
        },1000)
    }

    return (
        <div>
            <Head>
                <title>Storewind | Add Product</title>
            </Head>
            <Navbar pageTitle={'Add Product'}/>
            <div className="p-4 m-2">  

                <div className="py-4 space-x-10 bg-white">
                   <form action="/products" method="POST" onSubmit={addProduct}>                         
                        <div className="grid grid-cols-3 gap-6 mx-4">
                            <div className=" col-span-6 sm:col-span-4">
                                <label htmlFor="prodName" className="block text-sm font-medium text-gray-700 ">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="prodName"
                                    id="prodName"
                                    value={prodName}
                                    onChange={e => setProdName(e.target.value)}
                                    className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-600 outline-none "
                                />
                            </div>
                            <div className=" col-span-6 sm:col-span-4">
                                <label htmlFor="prodBrand" className="block text-sm font-medium text-gray-700">
                                    Brand
                                </label>
                                <input
                                    type="text"
                                    name="prodBrand"
                                    id="prodBrand"
                                    value={prodBrand}
                                    onChange={e => setProdBrand(e.target.value)}
                                    className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-600 outline-none"
                                />
                            </div>
                            {/* Select Inputs  */}
                            {/* <div className="space-y-2 col-span-6 sm:col-span-4">
                                <Listbox value={selectedCat} onChange={setSelectedCat}>
                                    {({ open }) => (
                                        <div>
                                            <Listbox.Label className="block text-sm font-medium text-gray-700">Categories</Listbox.Label>
                                            <div className="mt-1 relative">
                                                <Listbox.Button className="relative w-full  border-b-2 border-black outline-none shadow-sm pl-3 pr-10 py-2 text-left  focus:border-green-700  sm:text-sm">
                                                <span className="flex items-center">
                                                    <img src={selectedCat.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                                    <span className="ml-3 block truncate">{selectedCat.name}</span>
                                                </span>
                                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </span>
                                                </Listbox.Button>

                                                <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                                >
                                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                    {people.map((person) => (
                                                    <Listbox.Option
                                                        key={person.id}
                                                        className={({ active }) =>
                                                        classNames(
                                                            active ? 'text-white bg-green-600' : 'text-gray-900',
                                                            'cursor-default select-none relative py-2 pl-3 pr-9'
                                                        )
                                                        }
                                                        value={person}
                                                    >
                                                        {({ selected, active }) => (
                                                        <>
                                                            <div className="flex items-center">
                                                            <img src={person.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                                            <span
                                                                className={classNames(selectedCat ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                            >
                                                                {person.name}
                                                            </span>
                                                            </div>

                                                            {selectedCat ? (
                                                            <span
                                                                className={classNames(
                                                                active ? 'text-white' : 'text-green-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                            ) : null}
                                                        </>
                                                        )}
                                                    </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </div>
                                    )}
                                </Listbox>
                            </div>
                            <div className="space-y-2 col-span-6 sm:col-span-4">
                                <Listbox value={selectedSubCat} onChange={setSelectedSubCat}>
                                    {({ open }) => (
                                        <div>
                                            <Listbox.Label className="block text-sm font-medium text-gray-700">Sub-Categories</Listbox.Label>
                                            <div className="mt-1 relative">
                                                <Listbox.Button className="relative w-full  border-b-2 border-black outline-none shadow-sm pl-3 pr-10 py-2 text-left  focus:border-green-700 sm:text-sm">
                                                <span className="flex items-center">
                                                    <img src={selectedSubCat.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                                    <span className="ml-3 block truncate">{selectedSubCat.name}</span>
                                                </span>
                                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </span>
                                                </Listbox.Button>

                                                <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                                >
                                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                    {people.map((person) => (
                                                    <Listbox.Option
                                                        key={person.id}
                                                        className={({ active }) =>
                                                        classNames(
                                                            active ? 'text-white bg-green-600' : 'text-gray-900',
                                                            'cursor-default select-none relative py-2 pl-3 pr-9'
                                                        )
                                                        }
                                                        value={person}
                                                    >
                                                        {({ selectedSubCat, active }) => (
                                                        <>
                                                            <div className="flex items-center">
                                                            <img src={person.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                                            <span
                                                                className={classNames(selectedSubCat ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                            >
                                                                {person.name}
                                                            </span>
                                                            </div>

                                                            {selectedSubCat ? (
                                                            <span
                                                                className={classNames(
                                                                active ? 'text-white' : 'text-green-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                            ) : null}
                                                        </>
                                                        )}
                                                    </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </div>
                                    )}
                                </Listbox>
                            </div> */}

                            {/* Number Inputs  */}
                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="prodCost" className="block text-sm font-medium text-gray-700">
                                    Cost
                                </label>
                                <input
                                    type="number"
                                    name="prodCost"
                                    id="prodCost"
                                    value={prodCost}
                                    onChange={e => setProdCost(e.target.value)}
                                    className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-700 outline-none"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="prodPrice" className="block text-sm font-medium text-gray-700">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    name="prodPrice"
                                    id="prodPrice"
                                    value={prodPrice}
                                    onChange={e => setProdPrice(e.target.value)}
                                    className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-700 outline-none"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="prodDiscount" className="block text-sm font-medium text-gray-700">
                                    Discount
                                </label>
                                <input
                                    type="number"
                                    name="prodDiscount"
                                    id="prodDiscount"
                                    value={prodDiscount}
                                    onChange={e => setProdDiscount(e.target.value)}
                                    className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-700 outline-none"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="prodStock" className="block text-sm font-medium text-gray-700">
                                    Stock
                                </label>
                                <input
                                    type="number"
                                    name="prodStock"
                                    id="prodStock"
                                    value={prodStock}
                                    onChange={e => setProdStock(e.target.value)}
                                    className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-700 outline-none"
                                />
                            </div>
                            <div className=" col-span-6 sm:col-span-4">
                                <label htmlFor="prodBarcode" className="block text-sm font-medium text-gray-700">
                                    Barcode
                                </label>
                                <input
                                    type="text"
                                    name="prodNBarcode"
                                    id="prodBarcode"
                                    value={prodBarcode}
                                    onChange={e => setProdBarcode(e.target.value)}
                                    className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-700 outline-none"
                                />
                            </div>



                            {/* Photo Section  */}
                            <div className="space-y-4 col-span-6 sm:col-span-4">
                                <label className="block text-sm font-medium text-gray-700">Product Photo</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                    >
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                                    >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 space-x-4">
                             <Link href="/products">
                                <button
                                    
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
                                >
                                    Cancel
                                </button>
                            </Link>
                            <button
                                type="submit"
                                // onClick={addProduct}
                                
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Add Item
                            </button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Item;



