import {
  DotsHorizontalIcon,
  PlusCircleIcon,
  TrashIcon,
  PencilAltIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import { Menu, Transition, } from "@headlessui/react";
import { Fragment, useState,useEffect} from "react";
import Link from "next/link";
import useToken from "../helper/useToken";
import { useRouter } from "next/router";
import LoadingSpinner from "./LoadingSpinner"



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Content = () => {
  const [productData, setProductData] = useState([]);  
  const { token, setToken } = useToken();
  const router = useRouter()


  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  

  const getData = async () => {
    try {
      const data = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/categories/", {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify({ store_id: token.currentUser.email }),
      }); 
      if (data.ok) {
        let res = await data.json()
        let prod = []

        for(let i =0;i<res[0].categories.length;i++){
          prod = [...prod, ...res[0].categories[i].products]
        }
        setProductData(prod);
        console.log(prod);
      }
      setIsLoading(false)
      
    } catch (err) {
      console.log(err)
      setErrorMessage("Unable to fetch Products list");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token.currentUser.rolename != 'ADMIN') {
      router.push('/')
    }
  })

  useEffect(() => {
    setIsLoading(true)
    getData();
  }, []);

  useEffect(() => {
    setIsLoading(true)
    getData();
  }, [])
  
  const renderContent = (

    <div className="p-4 space-y-2">
      <div className="flex justify-end items-center h-14 ">
        {productData ? (
          <>
            <div className="flex space-x-4 ">

              <Link href={"/products/add"}>
                <button className="text-xs font-semibold flex items-center rounded-xl p-2  space-x-4 border-[1px] border-green-800 bg-white active:text-green-600">
                  <span>
                    <PlusCircleIcon className="h-5 w-5 text-green-800" />
                  </span>
                  <p>Add Product</p>
                </button>
              </Link>

            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      {productData.length > 0 ? (
        <div className="overflow-x-auto ">
          <table className="hover:border-collapse w-full text-center md:align-middle">
            <thead className="text-sm">
              <tr className="bg-white border-b rounded-md">
                <th scope="col" className="px-3 py-1">Sr</th>
                <th scope="col" className="px-6 py-3">Image</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Brand</th>
                <th scope="col" className="px-6 py-3">Category</th>
                <th scope="col" className="px-6 py-3">Price</th>
                <th scope="col" className="px-6 py-3">Discount</th>
                <th scope="col" className="px-6 py-3">Stock</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {productData.slice(0, 10).map((item, i) => (
                <tr
                  className="bg-white hover:bg-gray-50 text-xs"
                  key={i}
                >
                  <th scope="row" className="px-3 py-2">{i + 1}</th>
                  <td className="px-6 py-2">
                    <div className="h-7 w-7 bg-green-700 items-center flex justify-center rounded-full">
                      <img src="https://picsum.photos/200" className="h-5 w-5 rounded-full "/>
                    </div>
                  </td>
                  <td className="px-6 py-2">{item.Name}</td>
                  <td className="px-6 py-2">{item.Brand}</td>
                  <td className="px-6 py-2">{item.Categories[0]}</td>
                  <td className="px-6 py-2">{item.Price}</td>
                  <td className="px-6 py-2">{item.Discount}</td>
                  <td className="px-6 py-2">{item.InStock}</td>
                  <td className="px-6 py-2 text-center">
                    <Menu as="div">
                      <Menu.Button className="active:text-green-600">
                        <DotsHorizontalIcon
                          className=" h-5 w-5"
                          aria-hidden="true"
                        />
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
                          <div>
                            <Menu.Item>
                              {({ active }) => (
                                <div
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block w-full text-left px-4 py-2 text-sm hover:text-blue-500"
                                  )}
                                >
                                  <Link
                                    href={"/products/" + item.Id}
                                    key={item.Id}
                                  >
                                    <button className="flex space-x-2">
                                      <ViewListIcon className="h-5 w-5" />
                                      <p className="hidden md:block">Details</p>
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
                                    "block w-full text-left px-4 py-2 text-sm hover:text-green-600"
                                  )}
                                >
                                  <Link href={"/products/edit/?id=" + item.Id}>
                                    <button className="flex space-x-2">
                                      <PencilAltIcon className="h-5 w-5" />
                                      <p className="hidden md:block">Update</p>
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
                                    "block w-full text-left px-4 py-2 text-sm hover:text-red-500"
                                  )}
                                >
                                  <Link
                                    href={"/products/delete/?id=" + item.Id}
                                  >
                                    <button className="flex space-x-2">
                                      <TrashIcon className="h-5 w-5" />
                                      <p className="hidden md:block">Remove</p>
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
        </div>
      ) : (
        <></>
      )}


    </div>
  )
      const loadingSpinner = (
        <div className="w-full h-screen flex justify-center items-center ">
            <LoadingSpinner />
        </div>
    );

  return (
    <>
      {isLoading ? loadingSpinner : renderContent}
      {errorMessage && <div className="p-4 text-xl font-bold text-red-500">{errorMessage}</div>}
    </>
  );
};

export default Content;
