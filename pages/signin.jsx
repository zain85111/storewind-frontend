import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { signIn } from 'next-auth/react';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginCheck = async (e) => {
        let userInfo = {};
        if (email == 'admin') {
             userInfo = { "email":'zain', "password":'test' ,"roleName":'ADMIN',"method":''};
        } else {
            userInfo = { "email":'zain', "password":'test' ,"roleName":'EMP',"method":'',};
            
        }
        let res = await fetch('https://storewind.australiaeast.cloudapp.azure.com/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
            },
            body: JSON.stringify(userInfo),
            
        })
        res = await res.json();
        console.log('aaaaaaa')
        if (res.ok) {
            console.log(res)
            // Router.push('/');
        }
        else {
            // Router.push('/login');
        }
        e.preventDefault();
    }

    return (
        <>
        <Head>
            <title>Storewind | Signin</title>
        </Head>
        <div>
            <div className="flex  bg-white rounded-md shadow-lg   h-screen w-screen">
                <div className="flex  justify-center h-full w-1/2 te text-white  bg-green-600 ">
                    <div className="flex items-center justify-center my-3 text-4xl font-bold tracking-wider text-center space-x-4">
                        <Image src='/logo.png' height={80} width={80} className="shadow-md"/>
                        <p className='text-6xl'>Storewind</p>
                    </div>
                </div>
                <div className="flex items-center justify-center w-1/2">
                    <div className="p-20 space-y-10 bg-white w-full">
                        <form method='POST' className="flex flex-col space-y-8 ">
                            <h3 className="my-4 text-3xl font-semibold text-gray-700 text-center">Sign In</h3>
                            <div className="flex flex-col space-y-1">                                
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoFocus
                                    placeholder="Email"
                                    // onChange={setEmail}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-green-200"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    // onChange={setPassword}    
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
                                <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
                            </div>
                            <div>
                                <button onClick={()=>console.log('chala!!')} className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-green-600 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-green-200 focus:ring-4">Sign in
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