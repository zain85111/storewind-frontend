import {
  XIcon,
  DotsHorizontalIcon,
  PlusCircleIcon,
  FilterIcon,
  ChevronDownIcon,
  TrashIcon,
  PencilAltIcon,
  ViewListIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import {
  CheckIcon,
  SelectorIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { Menu, Transition, Dialog, Listbox } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";

const people = [
  {
    id: 1,
    name: "Wade Cooper",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Devon Webb",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Tom Cook",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Tanya Fox",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "Hellen Schmidt",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    name: "Caroline Schultz",
    avatar:
      "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    name: "Mason Heaney",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 9,
    name: "Claudie Smitham",
    avatar:
      "https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 10,
    name: "Emil Schaefer",
    avatar:
      "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const filters = [
  {
    id: 1,
    name:'Filter A',
  },
  {
    id: 2,
    name:'Filter B',
  },
  {
    id: 3,
    name:'Filter C',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Content = ({ data }) => {
  const [productData, setProductData] = useState([]);





  setProductData( data.products[0].categories[0].products);
  console.log(productData, "Products");
  
  const pproductData = [
    {
      id: '213',
      Name: 'Glass',
      Brand:'MAC',
      Category: 'Kitchen',
      Price: 12.00,
      Discount: 10,
      InStock:93,
    },
    {
      id: '213',
      Name: 'Glass',
      Brand:'MAC',
      Category: 'Kitchen',
      Price: 12.00,
      Discount: 10,
      InStock:93,
    },
    {
      id: '213',
      Name: 'Glass',
      Brand:'MAC',
      Category: 'Kitchen',
      Price: 12.00,
      Discount: 10,
      InStock:93,
    },
    {
      id: '213',
      Name: 'Glass',
      Brand:'MAC',
      Category: 'Kitchen',
      Price: 12.00,
      Discount: 10,
      InStock:93,
    },
    {
      id: '213',
      Name: 'Glass',
      Brand:'MAC',
      Category: 'Kitchen',
      Price: 12.00,
      Discount: 10,
      InStock:93,
    },
    {
      id: '213',
      Name: 'Glass',
      Brand:'MAC',
      Category: 'Kitchen',
      Price: 12.00,
      Discount: 10,
      InStock:93,
    },
    {
      id: '213',
      Name: 'Glass',
      Brand:'MAC',
      Category: 'Kitchen',
      Price: 12.00,
      Discount: 10,
      InStock:93,
    },
    {
      id: '213',
      Name: 'Glass',
      Brand:'MAC',
      Category: 'Kitchen',
      Price: 12.00,
      Discount: 10,
      InStock:93,
    },
    {
      id: '213',
      Name: 'Glass',
      Brand:'MAC',
      Category: 'Kitchen',
      Price: 12.00,
      Discount: 10,
      InStock:93,
    },
    {
      id: '213',
      Name: 'Glass',
      Brand:'MAC',
      Category: 'Kitchen',
      Price: 12.00,
      Discount: 10,
      InStock:93,
    },
    {
      id: '213',
      Name: 'Glass',
      Brand:'MAC',
      Category: 'Kitchen',
      Price: 12.00,
      Discount: 10,
      InStock:93,
    },
    {
      id: '213',
      Name: 'Glass',
      Brand:'MAC',
      Category: 'Kitchen',
      Price: 12.00,
      Discount: 10,
      InStock:93,
    },
  ];

  return (
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
              {/* <Menu as="div" className="">
                <Menu.Button className="active:text-green-600 text-sm font-semibold  border-[1px] border-green-800 bg-white p-2 flex items-center rounded-xl space-x-6">
                  <FilterIcon className="h-4 w-4 text-green-800" />
                  <p>Filter</p>
                  <ChevronDownIcon className=" h-4 w-4 text-green-800" />
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
                  <Menu.Items className="origin-top-right absolute right-4 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {
                        filters.map((f) => (
                          
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full text-left px-4 py-2 text-sm"
                                )}
                              >
                                {f.name}
                              </button>
                            )}
                          </Menu.Item>
                        ))
                      }
                      
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu> */}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      {productData.length > 0 ? (
        <div className="">
          <table className=" hover:border-collapse w-full text-center items-center align-middle">
            <thead className="">
              <tr className="h-14 bg-white border-b rounded-md text-sm ">
                {/* <th className="space-x-4 p-2">
                  <input type="checkbox" />
                </th> */}
                <th>Sr</th>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Stock</th>
                {/* <th>Modified</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {productData.slice(0, 12).map((item, i) => (
                <tr
                  className="h-10 bg-white hover:bg-gray-50 min-w-full text-xs"
                  key={i}
                >
                  {/* <td className="space-x-4 p-2 min-w-max">
                    <input type="checkbox" id="itemChk" />
                  </td> */}

                  <td>{i + 1}</td>
                  <td className="flex justify-center items-center">
                    <div className="h-7 w-7 bg-white items-center flex justify-center rounded-full">
                      <img src="https://picsum.photos/200" alt="" className="h-5 w-5 "/>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.brand}</td>
                  <td>{item.categories[0]}</td>
                  <td>{item.price}</td>
                  <td>{item.discount}</td>
                  <td>{item.inStock}</td>
                  {/* <td>{item.LastStockAddition.slice(0, 16)}</td> */}
                  <td className=" flex justify-center py-2 ">
                    <Menu as="div" className="">
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
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <div
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block w-full text-left px-4 py-2 text-sm"
                                  )}
                                >
                                  <Link
                                    href={"/products/" + item.id}
                                    key={item.Id}
                                  >
                                    <button className="flex space-x-2">
                                      <ViewListIcon className="h-5 w-5" />
                                      <p>Details</p>
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
                                    "block w-full text-left px-4 py-2 text-sm"
                                  )}
                                >
                                  <Link href={"/products/edit/?id=" + item.Id}>
                                    <button className="flex space-x-2">
                                      <PencilAltIcon className="h-5 w-5" />
                                      <p>Update</p>
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
                                    "block w-full text-left px-4 py-2 text-sm"
                                  )}
                                >
                                  <Link
                                    href={"/products/delete/?id=" + item.id}
                                  >
                                    <button className="flex space-x-2">
                                      <TrashIcon className="h-5 w-5" />
                                      <p>Remove</p>
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

          {/* Pagination  */}
          {/* <div className="p-4 flex items-center justify-between border-t border-gray-200 sm:px-6">
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
                </div> */}
        </div>
      ) : (
        <></>
      )}


    </div>
  );
};

export default Content;
