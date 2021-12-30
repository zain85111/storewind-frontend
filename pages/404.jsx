import { ArrowLeftIcon } from '@heroicons/react/outline';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Link from "next/link"

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },3000)
    },[])

    return (
        <>
        <Head>
            <title>Storewind | Page Not Found</title>
        </Head>
        <div className="p-4 space-y-4">
            <h1 className="text-4xl">404 - Page Not Found</h1>
            <div className='flex items-center space-x-4 text-gray-400'>
                <span><ArrowLeftIcon className='h-5 w-5'/></span>
                <p>Go back to <Link href='/'><a className="text-green-600 underline">Homepage</a></Link></p>
            </div>
        </div>
        </>
    )
}

export default NotFound
