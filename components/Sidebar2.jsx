import Link from 'next/link';
import Image from 'next/image';

import {
    ClipboardListIcon, CogIcon, HomeIcon, SpeakerphoneIcon,ClockIcon
} from '@heroicons/react/outline';

const SidebarCash = ()=> {
    return (
        <div className='py-2 px-5 text-sm  bg-gray-50 fixed h-full w-1/5'>
            <div className='space-y-4'>
                <button className='flex items-center space-x-2  text-lg justify-center'>
                    <Image src='/logo.png' height={32} width={32}/>
                    <p>Storewind - Cashier</p>
                </button>
                <hr />
                <div className="flex flex-col justify-between items-center space-y-6 py-2">                    
                    <Link href="/">
                        <button className='flex flex-col drop-shadow rounded-lg justify-evenly items-center text-center bg-white h-24  w-24 hover:text-green-600 focus:text-green-600 hover:drop-shadow-md focus:drop-shadow-lg focus:border-b-2 focus:border-green-600'>
                            <HomeIcon className='h-10 w-10' />
                            <p>Home</p>
                        </button>
                    </Link>
                    <Link href="/cashierBilling">
                        <button className='flex flex-col drop-shadow rounded-lg justify-evenly items-center text-center bg-white h-24 w-24 hover:text-green-600 focus:text-green-600 hover:drop-shadow-md focus:drop-shadow-lg focus:border-b-2 focus:border-green-600'>
                            <ClipboardListIcon className='h-10 w-10' />
                            <p>Billing</p>
                        </button>
                    </Link>
                    <Link href="/cashierHistory">
                        <button className='flex flex-col drop-shadow rounded-lg justify-evenly items-center text-center bg-white h-24 w-24 hover:text-green-600 focus:text-green-600 hover:drop-shadow-md focus:drop-shadow-lg focus:border-b-2 focus:border-green-600'>
                            <ClockIcon className='h-10 w-10' />
                            <p>History</p>
                        </button>
                    </Link>
                    <Link href="/cashierPromos">
                        <button className='flex flex-col drop-shadow rounded-lg justify-evenly items-center text-center bg-white h-24 w-24 hover:text-green-600 focus:text-green-600 hover:drop-shadow-md focus:drop-shadow-lg focus:border-b-2 focus:border-green-600'>
                            <SpeakerphoneIcon className='h-10 w-10' />
                            <p>Promos</p>
                        </button>
                    </Link>
                    {/* <Link href="/cashierSettings">
                        <button className='flex flex-col drop-shadow rounded-lg justify-evenly items-center text-center bg-white h-24 w-24 hover:text-green-600 focus:text-green-600 hover:drop-shadow-md focus:drop-shadow-lg focus:border-b-2 focus:border-green-600'>
                            <CogIcon className='h-10 w-10' />
                            <p>Settings</p>
                        </button>
                    </Link> */}

                </div>

            </div>
        </div>
    )
}
 
export default SidebarCash
