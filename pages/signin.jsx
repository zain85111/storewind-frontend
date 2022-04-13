import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <Head>
            <title>Storewind | Signin</title>
        </Head>
        <div>
            <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
                <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                    <div
                        className="p-4 py-6 h-96 text-white  bg-green-600 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                        <div className="flex items-center justify-center my-3 text-4xl font-bold tracking-wider text-center space-x-4">
                            <Image src='/logo.png' height={40} width={40} className="shadow-md"/>
                            <p>Storewind</p>
                        </div>
                    </div>
                    <div className="p-5 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700 text-center">Sign In</h3>
                        <form action="/" method="POST" className="flex flex-col space-y-5 ">
                            <div className="flex flex-col space-y-1">                                
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autofocus
                                    placeholder="Email"
                                    onChange={(e)=>setEmail(e.target)}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-green-200"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target)}    
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-green-200"
                                    />
                                <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-green-200"
                                />
                                <label for="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
                            </div>
                            <div>
                                <button type="submit" onClick={()=>{signIn()}} className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-green-600 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-green-200 focus:ring-4">Sign in
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signin

Signin.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>
    );
}