import {
  XIcon,
  DotsHorizontalIcon,
  SearchIcon,
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Content = ({ data }) => {
  const [selectedCat, setSelectedCat] = useState(people[0]);
  const [selectedSubCat, setSelectedSubCat] = useState(people[2]);

  const [isShowProdOpen, setisShowProdOpen] = useState(false);
  const [isAddProdOpen, setisAddProdOpen] = useState(false);
  const [isEditProdOpen, setisEditProdOpen] = useState(false);
  const [isDeleteOpen, setisDeleteOpen] = useState(false);

  function closeShowProdModal() {
    setisShowProdOpen(false);
  }

  function openShowProdModal() {
    setisShowProdOpen(true);
  }

  function closeAddProdModal() {
    setisAddProdOpen(false);
  }

  function openAddProdModal() {
    setisAddProdOpen(true);
  }

  function closeEditProdModal() {
    setisEditProdOpen(false);
  }

  function openEditProdModal() {
    setisEditProdOpen(true);
  }

  function closeDeleteModal() {
    setisDeleteOpen(false);
  }

  function openDeleteModal() {
    setisDeleteOpen(true);
  }

  const productData = data.products;

  return (
    <div className="p-4 space-y-2">
      <div className="flex justify-end items-center h-14 ">
        {productData ? (
          <>
            <div className="flex space-x-4 ">
              <div className="flex items-center rounded-2xl p-2  space-x-4 bg-white">
                <span>
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  type="text"
                  className="bg-transparent outline-none"
                  placeholder="Search..."
                />
              </div>
              <Link href={"/products/add"}>
                <button className="flex items-center rounded-xl p-2  space-x-4 bg-white active:text-green-600">
                  <span>
                    <PlusCircleIcon className="h-5 w-5" />
                  </span>
                  <p>Add Product</p>
                </button>
              </Link>
              {/* <button onClick={openAddProdModal} className='flex items-center rounded-xl p-2  space-x-4 bg-white'>
                                <span><PlusCircleIcon className='h-5 w-5' /></span>
                                <p>Add Product</p>
                            </button> */}
              <Menu as="div" className="">
                <Menu.Button className="active:text-green-600 bg-white p-2 flex items-center rounded-xl space-x-4">
                  <FilterIcon className=" h-5 w-5" />
                  <p>Filter</p>
                  <ChevronDownIcon className=" h-5 w-5" />
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
                            Filter 1
                          </button>
                        )}
                      </Menu.Item>
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
                            Filter 1
                          </button>
                        )}
                      </Menu.Item>
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
                            Filter 1
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      {productData ? (
        <div className="">
          <table className=" hover:border-collapse w-full text-center items-center align-middle">
            <thead className="">
              <tr className="h-14 bg-white border-b text-sm">
                <th className="space-x-4 p-2">
                  <input type="checkbox" />
                </th>
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
                  className="h-10 hover:bg-gray-50 min-w-full text-xs"
                  key={item.id}
                >
                  <td className="space-x-4 p-2 min-w-max">
                    <input type="checkbox" id="itemChk" />
                  </td>

                  <td>{i + 1}</td>
                  <td className="flex justify-center items-center">
                    <div className="h-7 w-7 bg-white items-center flex justify-center rounded-full">
                      <img
                        src="https://picsum.photos/200"
                        alt=""
                        className="h-5 w-5 "
                      />
                    </div>
                  </td>
                  <td>{item.Name}</td>
                  <td>{item.Brand}</td>
                  <td>{item.Categories.toString()}</td>
                  <td>{item.Price}</td>
                  <td>{item.Discount}</td>
                  <td>{item.InStock}</td>
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
                                    href={"/products/" + item.Id}
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
                                    href={"/products/delete/?id=" + item.Id}
                                  >
                                    <button className="flex space-x-2">
                                      <TrashIcon className="h-5 w-5" />
                                      <p>Remove</p>
                                    </button>
                                  </Link>
                                </div>
                              )}
                            </Menu.Item>
                            {/* <Menu.Item>
                                                        {({ active }) => (
                                                    <div 
                                                        className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block w-full text-left px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        <button onClick={openShowProdModal} className='flex space-x-2'>
                                                            <ViewListIcon className='h-5 w-5' />
                                                            <p>Show</p>
                                                        </button>
                                                    
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                        {({ active }) => (
                                                    <div 
                                                        className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block w-full text-left px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                    <Link href="#!">
                                                        <button onClick={openEditProdModal} className='flex space-x-2'>
                                                            <PencilAltIcon className='h-5 w-5' />
                                                            <p>Edit</p>
                                                        </button>
                                                    </Link>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                        {({ active }) => (
                                                    <div 
                                                        className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block w-full text-left px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                    <Link href="#!">
                                                        <button onClick={openDeleteModal} className='flex space-x-2'>
                                                            <TrashIcon className='h-5 w-5' />
                                                            <p >Delete</p>
                                                        </button>
                                                    </Link>
                                                    </div>
                                                    )}
                                                </Menu.Item> */}
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

      {/* Show Product Modal  */}
      <Transition appear show={isShowProdOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm"
          onClose={closeShowProdModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-fit p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div
                  className="flex justify-end pb-4 cursor-pointer"
                  onClick={closeShowProdModal}
                >
                  <XIcon className="h-5 w-5" />
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-center"
                ></Dialog.Title>

                <div className="mt-2 text-center">
                  <div className="py-4 flex justify-between space-x-10 ">
                    <div className="w-96 ">
                      <img
                        src="https://icon-library.com/images/product-icon-png/product-icon-png-11.jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-full text-sm space-y-4">
                      <div className="flex justify-between text-center border-b border-black  ">
                        <p className="font-bold">Name</p>
                        <p className="">Lamp</p>
                      </div>
                      <div className="flex justify-between text-center border-b border-black  ">
                        <p className="font-bold">Brand</p>
                        <p className="">Bright Night</p>
                      </div>
                      <div className="flex justify-between text-center border-b border-black  ">
                        <p className="font-bold">Category</p>
                        <p className="">Electronics</p>
                      </div>
                      <div className="flex justify-between text-center border-b border-black  ">
                        <p className="font-bold">Sub-Category</p>
                        <p className="">Lights</p>
                      </div>
                      <div className="flex justify-between text-center border-b border-black  ">
                        <p className="font-bold">Cost</p>
                        <p className="">$17.99</p>
                      </div>
                      <div className="flex justify-between text-center border-b border-black  ">
                        <p className="font-bold">Price</p>
                        <p className="">$22.99</p>
                      </div>
                      <div className="flex justify-between text-center border-b border-black  ">
                        <p className="font-bold">Discount</p>
                        <p className="">15%</p>
                      </div>
                      <div className="flex justify-between text-center border-b border-black  ">
                        <p className="font-bold">Stock</p>
                        <p className="">93</p>
                      </div>
                      <div className="flex justify-between text-center border-b border-black  ">
                        <p className="font-bold">Barcode</p>
                        <p className="">1324-rgw-23</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-x-4 flex justify-center items-center">
                  {/* <button
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium  bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                                onClick={closeShowProdModal}
                            >
                                Close
                            </button> */}
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-400 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                    onClick={openEditProdModal}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={openDeleteModal}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* Add Product Modal  */}
      <Transition appear show={isAddProdOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm"
          onClose={closeAddProdModal}
        >
          <div className="min-h-screen s px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div
                  className="flex justify-end pb-4 cursor-pointer"
                  onClick={closeAddProdModal}
                >
                  <XIcon className="h-5 w-5" />
                </div>
                <Dialog.Title
                  as="h3"
                  className="pb-4 text-lg font-semibold leading-6 text-gray-900 flex justify-center"
                >
                  Add Product
                </Dialog.Title>
                <form action="#!">
                  <div className="grid grid-cols-3 gap-6">
                    <div className=" col-span-6 sm:col-span-4">
                      <label
                        for="prodName"
                        className="block text-sm font-medium text-gray-700 "
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="prodName"
                        id="prodName"
                        className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-600 outline-none "
                      />
                    </div>
                    <div className=" col-span-6 sm:col-span-4">
                      <label
                        for="prodBrand"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Brand
                      </label>
                      <input
                        type="text"
                        name="prodNBrand"
                        id="prodBrand"
                        className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-600 outline-none"
                      />
                    </div>
                    {/* Select Inputs  */}
                    <div className="space-y-2 col-span-6 sm:col-span-4">
                      <Listbox value={selectedCat} onChange={setSelectedCat}>
                        {({ open }) => (
                          <div>
                            <Listbox.Label className="block text-sm font-medium text-gray-700">
                              Categories
                            </Listbox.Label>
                            <div className="mt-1 relative">
                              <Listbox.Button className="relative w-full  border-b-2 border-black outline-none shadow-sm pl-3 pr-10 py-2 text-left  focus:border-green-700  sm:text-sm">
                                <span className="flex items-center">
                                  <img
                                    src={selectedCat.avatar}
                                    alt=""
                                    className="flex-shrink-0 h-6 w-6 rounded-full"
                                  />
                                  <span className="ml-3 block truncate">
                                    {selectedCat.name}
                                  </span>
                                </span>
                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                  <SelectorIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
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
                                          active
                                            ? "text-white bg-green-600"
                                            : "text-gray-900",
                                          "cursor-default select-none relative py-2 pl-3 pr-9"
                                        )
                                      }
                                      value={person}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <div className="flex items-center">
                                            <img
                                              src={person.avatar}
                                              alt=""
                                              className="flex-shrink-0 h-6 w-6 rounded-full"
                                            />
                                            <span
                                              className={classNames(
                                                selectedCat
                                                  ? "font-semibold"
                                                  : "font-normal",
                                                "ml-3 block truncate"
                                              )}
                                            >
                                              {person.name}
                                            </span>
                                          </div>

                                          {selectedCat ? (
                                            <span
                                              className={classNames(
                                                active
                                                  ? "text-white"
                                                  : "text-green-600",
                                                "absolute inset-y-0 right-0 flex items-center pr-4"
                                              )}
                                            >
                                              <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
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
                      <Listbox
                        value={selectedSubCat}
                        onChange={setSelectedSubCat}
                      >
                        {({ open }) => (
                          <div>
                            <Listbox.Label className="block text-sm font-medium text-gray-700">
                              Sub-Categories
                            </Listbox.Label>
                            <div className="mt-1 relative">
                              <Listbox.Button className="relative w-full  border-b-2 border-black outline-none shadow-sm pl-3 pr-10 py-2 text-left  focus:border-green-700 sm:text-sm">
                                <span className="flex items-center">
                                  <img
                                    src={selectedSubCat.avatar}
                                    alt=""
                                    className="flex-shrink-0 h-6 w-6 rounded-full"
                                  />
                                  <span className="ml-3 block truncate">
                                    {selectedSubCat.name}
                                  </span>
                                </span>
                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                  <SelectorIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
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
                                          active
                                            ? "text-white bg-green-600"
                                            : "text-gray-900",
                                          "cursor-default select-none relative py-2 pl-3 pr-9"
                                        )
                                      }
                                      value={person}
                                    >
                                      {({ selectedSubCat, active }) => (
                                        <>
                                          <div className="flex items-center">
                                            <img
                                              src={person.avatar}
                                              alt=""
                                              className="flex-shrink-0 h-6 w-6 rounded-full"
                                            />
                                            <span
                                              className={classNames(
                                                selectedSubCat
                                                  ? "font-semibold"
                                                  : "font-normal",
                                                "ml-3 block truncate"
                                              )}
                                            >
                                              {person.name}
                                            </span>
                                          </div>

                                          {selectedSubCat ? (
                                            <span
                                              className={classNames(
                                                active
                                                  ? "text-white"
                                                  : "text-green-600",
                                                "absolute inset-y-0 right-0 flex items-center pr-4"
                                              )}
                                            >
                                              <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
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

                    {/* Number Inputs  */}
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="prodCost"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Cost
                      </label>
                      <input
                        type="number"
                        name="prodCost"
                        id="prodCost"
                        className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-700 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="prodPrice"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        name="prodPrice"
                        id="prodPrice"
                        className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-700 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="prodDiscount"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Discount
                      </label>
                      <input
                        type="number"
                        name="prodDiscount"
                        id="prodDiscount"
                        className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-700 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="prodStock"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Stock
                      </label>
                      <input
                        type="number"
                        name="prodStock"
                        id="prodStock"
                        className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-700 outline-none"
                      />
                    </div>
                    <div className=" col-span-6 sm:col-span-4">
                      <label
                        for="prodBarcode"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Barcode
                      </label>
                      <input
                        type="text"
                        name="prodNBarcode"
                        id="prodBarcode"
                        className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-700 outline-none"
                      />
                    </div>

                    {/* Photo Section  */}
                    <div className="space-y-4 col-span-6 sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Product Photo
                      </label>
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
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 space-x-4">
                    <button
                      onClick={closeAddProdModal}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={closeAddProdModal}
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Add Item
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* Edit Product Modal  */}
      <Transition appear show={isEditProdOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm"
          onClose={closeEditProdModal}
        >
          <div className="min-h-screen s px-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div
                  className="flex justify-end pb-4 cursor-pointer"
                  onClick={closeEditProdModal}
                >
                  <XIcon className="h-5 w-5" />
                </div>
                <Dialog.Title
                  as="h3"
                  className="pb-4 text-lg font-semibold leading-6 text-gray-900 flex justify-center"
                >
                  Edit Product
                </Dialog.Title>
                <form action="#!">
                  <div className="grid grid-cols-3 gap-6">
                    <div className=" col-span-6 sm:col-span-4">
                      <label
                        for="prodName"
                        className="block text-sm font-medium text-gray-700 "
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        value="Lamp"
                        name="prodName"
                        id="prodName"
                        className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-600 outline-none "
                      />
                    </div>
                    <div className=" col-span-6 sm:col-span-4">
                      <label
                        for="prodBrand"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Brand
                      </label>
                      <input
                        type="text"
                        value="Bright & Night"
                        name="prodNBrand"
                        id="prodBrand"
                        className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-600 outline-none"
                      />
                    </div>
                    {/* Select Inputs  */}
                    <div className="space-y-2 col-span-6 sm:col-span-4">
                      <Listbox value={selectedCat} onChange={setSelectedCat}>
                        {({ open }) => (
                          <div>
                            <Listbox.Label className="block text-sm font-medium text-gray-700">
                              Categories
                            </Listbox.Label>
                            <div className="mt-1 relative">
                              <Listbox.Button className="relative w-full  border-b-2 border-black outline-none shadow-sm pl-3 pr-10 py-2 text-left  focus:border-green-700  sm:text-sm">
                                <span className="flex items-center">
                                  <img
                                    src={selectedCat.avatar}
                                    alt=""
                                    className="flex-shrink-0 h-6 w-6 rounded-full"
                                  />
                                  <span className="ml-3 block truncate">
                                    {selectedCat.name}
                                  </span>
                                </span>
                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                  <SelectorIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
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
                                          active
                                            ? "text-white bg-green-600"
                                            : "text-gray-900",
                                          "cursor-default select-none relative py-2 pl-3 pr-9"
                                        )
                                      }
                                      value={person}
                                    >
                                      {({ selectedCat, active }) => (
                                        <>
                                          <div className="flex items-center">
                                            <img
                                              src={person.avatar}
                                              alt=""
                                              className="flex-shrink-0 h-6 w-6 rounded-full"
                                            />
                                            <span
                                              className={classNames(
                                                selectedCat
                                                  ? "font-semibold"
                                                  : "font-normal",
                                                "ml-3 block truncate"
                                              )}
                                            >
                                              {person.name}
                                            </span>
                                          </div>

                                          {selectedCat ? (
                                            <span
                                              className={classNames(
                                                active
                                                  ? "text-white"
                                                  : "text-green-600",
                                                "absolute inset-y-0 right-0 flex items-center pr-4"
                                              )}
                                            >
                                              <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
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
                      <Listbox
                        value={selectedSubCat}
                        onChange={setSelectedSubCat}
                      >
                        {({ open }) => (
                          <div>
                            <Listbox.Label className="block text-sm font-medium text-gray-700">
                              Sub-Categories
                            </Listbox.Label>
                            <div className="mt-1 relative">
                              <Listbox.Button className="relative w-full  border-b-2 border-black outline-none shadow-sm pl-3 pr-10 py-2 text-left  focus:border-green-700 sm:text-sm">
                                <span className="flex items-center">
                                  <img
                                    src={selectedSubCat.avatar}
                                    alt=""
                                    className="flex-shrink-0 h-6 w-6 rounded-full"
                                  />
                                  <span className="ml-3 block truncate">
                                    {selectedSubCat.name}
                                  </span>
                                </span>
                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                  <SelectorIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
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
                                          active
                                            ? "text-white bg-green-600"
                                            : "text-gray-900",
                                          "cursor-default select-none relative py-2 pl-3 pr-9"
                                        )
                                      }
                                      value={person}
                                    >
                                      {({ selectedSubCat, active }) => (
                                        <>
                                          <div className="flex items-center">
                                            <img
                                              src={person.avatar}
                                              alt=""
                                              className="flex-shrink-0 h-6 w-6 rounded-full"
                                            />
                                            <span
                                              className={classNames(
                                                selectedSubCat
                                                  ? "font-semibold"
                                                  : "font-normal",
                                                "ml-3 block truncate"
                                              )}
                                            >
                                              {person.name}
                                            </span>
                                          </div>

                                          {selectedSubCat ? (
                                            <span
                                              className={classNames(
                                                active
                                                  ? "text-white"
                                                  : "text-green-600",
                                                "absolute inset-y-0 right-0 flex items-center pr-4"
                                              )}
                                            >
                                              <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
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

                    {/* Number Inputs  */}
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="prodCost"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Cost
                      </label>
                      <input
                        type="number"
                        value={17.99}
                        name="prodCost"
                        id="prodCost"
                        className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-700 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="prodPrice"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        value={22.99}
                        name="prodPrice"
                        id="prodPrice"
                        className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-700 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="prodDiscount"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Discount
                      </label>
                      <input
                        type="number"
                        value={15}
                        name="prodDiscount"
                        id="prodDiscount"
                        className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-700 outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="prodStock"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Stock
                      </label>
                      <input
                        type="number"
                        value={15}
                        name="prodStock"
                        id="prodStock"
                        className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-700 outline-none"
                      />
                    </div>
                    <div className=" col-span-6 sm:col-span-4">
                      <label
                        for="prodBarcode"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Barcode
                      </label>
                      <input
                        type="text"
                        value={"3553-dget-332"}
                        name="prodNBarcode"
                        id="prodBarcode"
                        className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-700 outline-none"
                      />
                    </div>

                    {/* Photo Section  */}
                    <div className="space-y-4 col-span-6 sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Product Photo
                      </label>
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
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 space-x-4">
                    <button
                      onClick={closeEditProdModal}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={closeEditProdModal}
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* Delete Modal  */}
      <Transition appear show={isDeleteOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm "
          onClose={closeDeleteModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div
                  className="flex justify-end pb-4 cursor-pointer"
                  onClick={closeDeleteModal}
                >
                  <XIcon className="h-5 w-5" />
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-center"
                >
                  <ExclamationCircleIcon className="h-32 w-32 text-red-500" />
                </Dialog.Title>
                <div className="mt-2 text-center">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to DELETE this item?
                  </p>
                </div>

                <div className="mt-4 space-x-4 flex justify-center items-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium  bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                    onClick={closeDeleteModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={closeDeleteModal}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Content;
