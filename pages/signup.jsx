import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');

    return (
        <>
            <Head>
                <title>Storewind | SignUp</title>
            </Head>
            <div className="flex  bg-white rounded-md shadow-lg   h-screen w-screen">
                <div className="flex  justify-center h-full w-1/2 te text-white  bg-green-600 ">
                    <div className="flex items-center justify-center my-3 text-4xl font-bold tracking-wider text-center space-x-4">
                        <Image src='/logo.png' height={80} width={80} className="shadow-md"/>
                        <p className='text-6xl'>Storewind</p>
                    </div>
                </div>
                <div className="flex items-center justify-center w-1/2">
                    <div className="p-20 space-y-10 bg-white w-full">
                        <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col space-y-8 ">
                            <h3 className="my-4 text-3xl font-semibold text-gray-700 text-center">Sign Up</h3>
                            <div className="flex flex-col space-y-1">                                
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoFocus
                                    placeholder="Email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-green-200"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}    
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-green-200"
                                    />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Confirm Password"
                                    onChange={(e)=>setConPassword(e.target.value)}    
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-green-200"
                                    />
                            </div>
                            
                            <div>
                                <button  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-green-600 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-green-200 focus:ring-4">Sign Up
                                </button>
                            </div>
                            <a href="/signin" className="text-center underline  text-blue-600 focus:text-blue-800">Already Have an Account? Signin.</a>

                        </form>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Signup

Signup.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>
    );
}