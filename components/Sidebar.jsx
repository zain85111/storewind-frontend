import Link from 'next/link';
import Image from 'next/image';

import {
    ViewGridIcon, UsersIcon, ChartBarIcon, ClipboardListIcon,ReceiptTaxIcon
} from '@heroicons/react/outline';


const Sidebar = () => {
    
    const btns = {
        'dashboard': '',
        'products': '',
        'analytics': '',
        'receipts': '',
        'employees': '',
    }

    let path = window.location.pathname
    let btnName = path.slice(1,path.length)

    console.log(btnName)
    
    const activeClass = " text-green-600 border-green-600 border-l-2";
    switch(btnName) {
        case '':
            btns.dashboard = activeClass;
            break;
        case 'products':
            btns.products = activeClass;
            break;
        case 'analytics':
            btns.analytics = activeClass;
            break;
        case 'receipts':
            btns.receipts = activeClass;
            break;
        case 'employees':
            btns.employees = activeClass;
            break;
        default:
            // code block
    }


    return (
        <div className='py-2 px-5 text-sm  bg-gray-50 h-full fixed w-1/5'>
            <div className='space-y-4'>
                <button className='flex items-center space-x-2  text-lg justify-center'>
                    <Image src='/logo.png' height={32} width={32}/>
                    <p>Storewind - Admin</p>
                </button>
                <hr  />
                <Link href="/">
                    <button className={'flex items-center space-x-2 pl-2 h-10 w-full hover:text-green-600 hover:border-green-600 hover:border-l-2 focus:text-green-600 focus:border-green-600 focus:border-l-2 '+btns.dashboard}>
                        <ViewGridIcon className='h-5 w-5' />
                        <p>Dashboard</p>
                    </button>
                </Link>
                <Link href='/products'>
                    <button className={'flex items-center justify-betwee space-x-2 pl-2 h-10 w-full hover:text-green-600 hover:border-green-600 hover:border-l-2 focus:text-green-600 focus:border-green-600 focus:border-l-2 '+btns.products}>
                        <ClipboardListIcon className='h-5 w-5' />
                        <p>Inventory</p>
                    </button>
                </Link>
                <Link href='/analytics'>
                    <button className={'flex items-center justify-betwee space-x-2 pl-2 h-10 w-full hover:text-green-600 hover:border-green-600 hover:border-l-2 focus:text-green-600 focus:border-green-600 focus:border-l-2 '+btns.analytics}>
                        <ChartBarIcon className='h-5 w-5' />
                        <p>Analytics</p>
                    </button>
                </Link>
                <Link href='/receipts'>
                    <button className={'flex items-center space-x-2 pl-2 h-10 w-full hover:text-green-600 hover:border-green-600 hover:border-l-2 focus:text-green-600 focus:border-green-600 focus:border-l-2 '+btns.receipts}>
                        <ReceiptTaxIcon className='h-5 w-5' />
                        <p>Receipts</p>
                    </button>
                </Link>
                <Link href='/employees'>
                    <button className={'flex items-center space-x-2 pl-2 h-10 w-full hover:text-green-600 hover:border-green-600 hover:border-l-2 focus:text-green-600 focus:border-green-600 focus:border-l-2 '+btns.employees}>
                        <UsersIcon className='h-5 w-5' />
                        <p>Employees</p>
                    </button>
                </Link>
               
            </div>
            
        </div>
    )
}
 
export default Sidebar
