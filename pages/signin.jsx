import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useToken from "../helper/useToken"
import LoadingSpinner from '../components/LoadingSpinner'

const Signin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setError] = useState('')

    const [isLoading, setIsLoading] = useState(false);
    
    const router = useRouter()
    const { token, setToken } = useToken()
    const signIn = async () => {
        if (email != '' && password != '') {
            setIsLoading(true);
            try {
                let send = { email, password , roleName:"2"};
                console.log(send);
                let response = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/users/signin/", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                      },
                    credentials: "include",
                    body: JSON.stringify(send)
                })
                response = await response.json()
                console.log(response,"Response 1");
    
    
                response = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/users/curruser/", {
                    method: 'POST',
                    credentials: "include"
                })
                response = await response.json()
                console.log(response, "Response 2");
                
                setToken({ token: response });
                console.log({ token: response })
                
                if (response.currentUser != null) {
                    router.reload(window.location.pathname)        
                }
                setError("")
            } catch (err) {
                setToken({ currentUser: null, role: null });
                console.log(err);
                setError("Sign in failed! Try again.")
            }
            setIsLoading(false)
        }
        else {
            setError("Email/Password cannot be empty.");
        }

    }
    
    const renderContent = (
        <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="p-20 space-y-10 bg-white w-full">
                <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-col space-y-8 ">
                    <h3 className="my-4 text-3xl font-semibold text-gray-700 text-center">Sign In</h3>
                    <p className='text-red-600 font-bold'>{ err }</p>
                    <div className="flex flex-col space-y-1">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoFocus
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-green-200"
                            required
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-green-200"
                            required
                        />
                    </div>
                   
                    <div>
                        <button type='submit' onClick={() => { signIn() }} className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-green-600 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-green-200 focus:ring-4" disabled={isLoading}>Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

    const loadingSpinner = (
        <div className="w-full lg:w-1/2 h-screen flex justify-center items-center ">
            <LoadingSpinner />
        </div>
    );

    return (
        <>
            <Head>
                <title>Storewind | Signin</title>
            </Head>
            <div className="flex  bg-white rounded-md shadow-lg   h-screen w-screen">
                <div className="hidden lg:flex  justify-center h-full w-1/2 te text-white  bg-green-600 ">
                    <div className="flex items-center justify-center my-3 text-4xl font-bold tracking-wider text-center space-x-4">
                        <Image src='/logo.png' height={80} width={80} className="shadow-md" />
                        <p className='text-6xl'>Storewind</p>
                    </div>
                </div>
                {isLoading ? loadingSpinner : renderContent}
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