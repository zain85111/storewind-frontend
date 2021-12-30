import {DotsHorizontalIcon,SearchIcon,PlusCircleIcon,FilterIcon,ChevronDownIcon} from '@heroicons/react/outline';
import Link from 'next/link';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Content = ({ pageTitle, data }) => {
    
    const productData = data.products;
    
    return (
        <div>
            <div className='flex justify-between items-center h-14 '>
                <p className="text-2xl p-4">{pageTitle}</p>
                {productData ? (
                    <>
                        <div className='flex space-x-4 mx-4'>
                            <div className='flex items-center rounded-2xl p-2  space-x-4 bg-white'>
                                <span><SearchIcon className='h-5 w-5 text-gray-400'/></span>
                                <input type="text" className='bg-transparent outline-none' placeholder='Search...' />
                            </div>
                            <button className='flex items-center rounded-xl p-2  space-x-4 bg-white'>
                                <span><PlusCircleIcon className='h-5 w-5' /></span>
                                <p>Add Product</p>
                            </button>
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
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block w-full text-left px-4 py-2 text-sm'
                                                )}
                                            >Filter 1</button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                type="submit"
                                                className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block w-full text-left px-4 py-2 text-sm'
                                                )}
                                            >Filter 1</button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                type="submit"
                                                className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block w-full text-left px-4 py-2 text-sm'
                                                )}
                                            >Filter 1</button>
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
            <div className="p-4">
                <table className=" hover:border-collapse w-full">
                    <thead className="text-left"> 
                        <tr className="h-14 bg-white border-b text-sm">
                            <th className='space-x-4 p-2'><input type="checkbox"/></th>
                            <th>Sr</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Cost</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Stock</th>
                            <th>Modified</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>                           
                        {productData.map(item => (
                            <tr className="h-10 hover:bg-gray-50 min-w-full text-xs" key={item.id}>
                                <td className='space-x-4 p-2 min-w-max'><input type="checkbox" /></td>
                                <td>{item.id}</td>
                                <td>
                                    <div className='h-7 w-7 bg-white items-center flex justify-center rounded-full'>
                                        <img src="https://icon-library.com/images/product-icon-png/product-icon-png-11.jpg" alt="" className='h-5 w-5 ' />
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.itemname}</td>
                                <td>{item.website}</td>
                                <td>{item.address.geo.lng}</td>
                                <td>{item.address.geo.lat}</td>
                                <td>{item.address.geo.lng}</td>
                                <td>{item.company.name}</td>
                                <td>{item.address.city}</td>
                                <td className=' flex justify-center py-2 '>
                                    <Menu as="div" className="">
                                        <Menu.Button className="active:text-green-600">
                                            <DotsHorizontalIcon className=" h-5 w-5" aria-hidden="true" />
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
                                                    <button 
                                                        type="submit"
                                                        className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block w-full text-left px-4 py-2 text-sm'
                                                        )}
                                                    ><Link href={'/products/' + item.id}></Link></button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <button
                                                        type="submit"
                                                        className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block w-full text-left px-4 py-2 text-sm'
                                                        )}
                                                    >Edit</button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <button
                                                        type="submit"
                                                        className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block w-full text-left px-4 py-2 text-sm'
                                                        )}
                                                    >Delete</button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                    {/* <Link href={'/products/' + item.id}><DotsHorizontalIcon className='h-5 w-5 cursor-pointer ' /></Link> */}
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
}

export default Content;
