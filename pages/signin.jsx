import React, {useRef,useContext,useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import axios from './api/axios'
import AuthContext from '../helper/AuthProvider'
import { useRouter } from 'next/router'
import useToken from "../helper/useToken" 

const Signin = (props) => {
    const { setAuth } = useContext(AuthContext);

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [roleName,setRoleName] = useState('ADMIN')
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState(false);

    const router = useRouter()
    // const {token, setToken} = useToken()
    // const signIn= async ()=>{
    //     try{
    //         const res1 = await axios.post("https://storewind.australiaeast.cloudapp.azure.com/api/users/signin/",{
    //             email, password, roleName: "ADMIN"
    //         });
    //         console.log(res1);
    //         const response = await axios.post("https://storewind.australiaeast.cloudapp.azure.com/api/users/curruser/");
    //         console.log(response);
    //         setToken({token: response.data});
    //         console.log({token: response.data})
    //         router.reload(window.location.pathname)        
    //     }catch(err){
    //         setToken({currentUser: null, role: null});
    //         console.log(err);
    //     }

    // }
    
    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                '/api/users/signin',
                JSON.stringify({ email, password, roleName }),
                {
                    method: 'HEAD',
                    mode: 'no-cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                    credentials: 'same-origin',
                    crossdomain: true,
                },
            );
            console.log(JSON.stringify(res?.data));

            const accessToken = res?.data?.accessToken;
            setAuth({ email, password, roleName, accessToken })
            setEmail('')
            setPassword('')
            setSuccess(true)
            
        } catch (error) {
            if (!error?.response) {
                setErr('No Response from Server')
            } else if (error.response?.status === 400) {
                setErr('Email or Password Missing.')
            }  else if (error.response?.status === 401) {
                setErr('User Not Found!')
            } else {
                setErr('Login Failed')
            }
            errRef.current.focus()
        }

    }
    
    useEffect(() => {
        userRef.current.focus(); 
    }, [])
    
    useEffect(() => {
        setErr('');
    },[])
    return (
        <>
            <Head>
                <title>Storewind | Signin</title>
            </Head>
            {
                success ? (
                    <>
                        <h1>Logged in!!</h1>
                    </>
                ): (
                
                <div className="flex  justify-center bg-white rounded-md shadow-lg h-screen w-screen">
                    <div className="flex justify-center h-full w-1/2 text-white  bg-green-600  ">
                        <div className="flex items-center justify-center my-3 text-4xl font-bold tracking-wider text-center space-x-4">
                            <Image src='/logo.png' height={80} width={80} className="shadow-md"/>
                            <p className='text-6xl'>Storewind</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-1/2  ">
                        <div className="p-20  space-y-10 bg-white w-full">
                            <form onSubmit={handleSumbit} className="flex flex-col space-y-8 ">
                                <h3 className="my-4 text-3xl font-semibold text-gray-700 text-center">Sign In</h3>
                                <div className="flex flex-col space-y-1">
                                    <p ref={errRef} className={err ? 'text-red-500' : 'invisible'} aria-live='assertive'>{err}</p>
                                </div>                                
                                <div className="flex flex-col space-y-1">                                
                                    <input
                                        ref={userRef}
                                        type="email"
                                        id="email"
                                        name="email"
                                        autoFocus
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
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
                                        value={password}
                                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-green-200"
                                        required
                                        />
                                    {/* <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a> */}
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
                                    <button className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-green-600 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-green-200 focus:ring-4">Sign in
                                    </button>
                                </div>
                                <a href="/signup" className="text-center underline  text-blue-600 focus:text-blue-800">Don't have an Account? Signup.</a>
                            </form>
                        </div>
                    </div>
                </div>        
                )
            }
        </>
    )
}
// export async function getServerSideProps(context) {
//     const cookies = context.req.headers.cookie;
//     console.log(cookies);
//     return {
//       props: {cookies},
//     };
// }
export default Signin

Signin.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>
    );
}