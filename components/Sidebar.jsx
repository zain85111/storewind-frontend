import Link from 'next/link';
import Image from 'next/image';

import {
    UserGroupIcon, ViewGridIcon, UsersIcon, ChevronDownIcon, ChartBarIcon, ClipboardListIcon, CogIcon,ReceiptTaxIcon
} from '@heroicons/react/outline';

const Sidebar = ()=> {
    return (
        <div className='py-2 px-5 text-sm  bg-gray-50 h-full fixed w-1/5'>
            <div className='space-y-4'>
                <button className='flex items-center space-x-2  text-lg justify-center'>
                    <Image src='/logo.png' height={32} width={32}/>
                    <p>Storewind - Admin</p>
                </button>
                <hr  />
                <Link href="/">
                    <button className='flex items-center space-x-2 pl-2 h-10 w-full hover:text-green-600 hover:border-green-600 hover:border-l-2 focus:text-green-600 focus:border-green-600 focus:border-l-2'>
                        <ViewGridIcon className='h-5 w-5' />
                        <p>Dashboard</p>
                    </button>
                </Link>
                <Link href='/products'>
                    <button className='flex items-center justify-betwee space-x-2 pl-2 h-10 w-full hover:text-green-600 hover:border-green-600 hover:border-l-2 focus:text-green-600 focus:border-green-600 focus:border-l-2'>
                            <ClipboardListIcon className='h-5 w-5' />
                            <p>Inventory</p>
                        <div className='flex items-center space-x-2'>
                        </div>
                        {/* <ChevronDownIcon className='h-5 w-5'/> */}
                    </button>
                </Link>
                <Link href='/analytics'>
                    <button className='flex items-center justify-betwee space-x-2 pl-2 h-10 w-full hover:text-green-600 hover:border-green-600 hover:border-l-2 focus:text-green-600 focus:border-green-600 focus:border-l-2'>
                            <ChartBarIcon className='h-5 w-5' />
                            <p>Analytics</p>
                        <div className='flex items-center space-x-2'>
                        </div>
                        {/* <ChevronDownIcon className='h-5 w-5'/> */}
                    </button>
                </Link>
                <Link href='/receipts'>
                    <button className='flex items-center space-x-2 pl-2 h-10 w-full hover:text-green-600 hover:border-green-600 hover:border-l-2 focus:text-green-600 focus:border-green-600 focus:border-l-2'>
                        <ReceiptTaxIcon className='h-5 w-5' />
                        <p>Receipts</p>
                    </button>
                </Link>
                <Link href='/employees'>
                    <button className='flex items-center space-x-2 pl-2 h-10 w-full hover:text-green-600 hover:border-green-600 hover:border-l-2 focus:text-green-600 focus:border-green-600 focus:border-l-2'>
                        <UsersIcon className='h-5 w-5' />
                        <p>Employees</p>
                    </button>
                </Link>
                <Link href='/settings'>
                    <button className='flex items-center space-x-2 pl-2 h-10 w-full hover:text-green-600 hover:border-green-600 hover:border-l-2 focus:text-green-600 focus:border-green-600 focus:border-l-2'>
                        <CogIcon className='h-5 w-5' />
                        <p>Settings</p>
                    </button>
                </Link>
            </div>
            
        </div>
    )
}
 
export default Sidebar
