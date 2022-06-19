import { Fragment,useContext, } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { UserCircleIcon, MenuIcon, XIcon, BellIcon, MailIcon, SearchIcon,HomeIcon,ClockIcon, ViewGridIcon, UsersIcon, ChartBarIcon, ClipboardListIcon, ReceiptTaxIcon, } from '@heroicons/react/outline';
import useToken from '../helper/useToken';
import { useRouter } from 'next/router'
import { useState } from 'react';
import Link from 'next/link';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({ pageTitle }) => {
    const { token, setToken } = useToken()
    const router = useRouter()

    const [navbarClasses,setNavbarClasses]=useState('hidden')

    const openMenu = () => {
        console.log("Menu Opened")
        setNavbarClasses("block ")
    }
    const closeMenu = () => {
        console.log("Menu Closed")
        setNavbarClasses("hidden")
    }


    const signOut = () => {
        setToken({currentUser: null, role: null});
        router.reload(window.location.pathname)        
    }

    return (
        <div>
            <div className={"z-10  w-full absolute bg-gray-200 rounded-b-2xl flex flex-col space-y-4 px-4 lg:hidden"+" "+navbarClasses}>
                <div className='flex items-center justify-between w-full pt-3 '>
                    <span className='text-lg font-bold'>{pageTitle}</span>
                    <XIcon className='h-5 w-5 cursor-pointer active:text-green-600 lg:invisible lg:hidden' onClick={closeMenu}/>
                </div>

                {token.currentUser.rolename == 'ADMIN' ? (
                    <>  
                        <div className='flex flex-col pb-2'>
                            <Link href="/">
                                <button className='flex items-center space-x-2  h-10 w-full hover:text-green-600 focus:text-green-600 '>
                                    <ViewGridIcon className='h-5 w-5' />
                                    <p>Dashboard</p>
                                </button>
                            </Link>
                            <Link href='/products'>
                                <button className='flex items-center justify-betwee space-x-2  h-10 w-full hover:text-green-600 focus:text-green-600 '>
                                        <ClipboardListIcon className='h-5 w-5' />
                                        <p>Inventory</p>
                                    <div className='flex items-center space-x-2'>
                                    </div>
                                </button>
                            </Link>
                            <Link href='/analytics'>
                                <button className='flex items-center justify-betwee space-x-2  h-10 w-full hover:text-green-600 focus:text-green-600 '>
                                        <ChartBarIcon className='h-5 w-5' />
                                        <p>Analytics</p>
                                    <div className='flex items-center space-x-2'>
                                    </div>
                                </button>
                            </Link>
                            <Link href='/receipts'>
                                <button className='flex items-center space-x-2  h-10 w-full hover:text-green-600 focus:text-green-600 '>
                                    <ReceiptTaxIcon className='h-5 w-5' />
                                    <p>Receipts</p>
                                </button>
                            </Link>
                            <Link href='/employees'>
                                <button className='flex items-center space-x-2  h-10 w-full hover:text-green-600 focus:text-green-600 '>
                                    <UsersIcon className='h-5 w-5' />
                                    <p>Employees</p>
                                </button>
                            </Link>
                            <button type="submit" onClick={()=> signOut()} className="h-14 hover:text-green-600 ">Sign out</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='flex flex-col pb-2'>
                            <Link href="/">
                                <button className='flex items-center space-x-2  h-10 w-full hover:text-green-600 focus:text-green-600 '>
                                    <HomeIcon className='h-5 w-5' />
                                    <p>Home</p>
                                </button>
                            </Link>
                            <Link href='/cashierHistory'>
                                <button className='flex items-center justify-betwee space-x-2  h-10 w-full hover:text-green-600 focus:text-green-600 '>
                                        <ClockIcon className='h-5 w-5' />
                                        <p>History</p>
                                    <div className='flex items-center space-x-2'>
                                    </div>
                                </button>
                            </Link>
                            
                            <button type="submit" onClick={()=> signOut()} className="h-14 hover:text-green-600 ">Sign out</button>
                        </div>
                    </>
                )}
            </div>
            <nav className="h-14 p-5  bg-gray-50  flex flex-row justify-between items-center ">
                <div>
                    <p className="text-lg font-bold">{pageTitle }</p>
                </div>
                <div className="flex flex-row space-x-4 justify-between ">
                    {/* <div className="flex items-center rounded-2xl p-1  space-x-4 bg-white ">
                        <span>
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                        </span>
                        <input
                        type="text"
                        className="bg-transparent outline-none text-xs"
                        placeholder="Search..."
                        />
                    </div> */}
                    
                    <Menu as="div" className="hidden lg:block">
                        <Menu.Button className="active:text-green-600">
                            <UserCircleIcon className=" h-5 w-5" aria-hidden="true" />
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
                            <Menu.Items className="origin-top-right absolute right-4 min-w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 ">
                            <div className="py-1">
                                {/* <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >My Profile</a>
                                )}
                                </Menu.Item> */}
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        type="submit"
                                        onClick={()=> signOut()}
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                    >Sign out</button>
                                    )}
                                </Menu.Item>
                            </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <MenuIcon className='h-5 w-5 cursor-pointer block lg:hidden' onClick={openMenu}/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
