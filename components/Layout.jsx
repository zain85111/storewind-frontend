import { useState } from "react";
import Signin from "../pages/signin";
// import  Login  from "../pages/login.jsx";
import Sidebar from "./Sidebar"
import SidebarCash from "./Sidebar2";

const Layout = ({ children }) => {

    const [auth, setAuth] = useState(true);

    const isAdmin = false;

    if (auth) {
        
        return (
           
            <div className="bg-gray-100 grid grid-cols-5 min-h-screen">
                <div className="col-span-1">
                    {isAdmin ? (
                    <>
                        <Sidebar  />
                        
                    </>
                    ) : (
                            <>
                        <SidebarCash />
                            </>
                        )}
                </div>
                <div className="col-span-4">
                    {children}
                </div>
            </div>
    
        )
    } else {
        return <Signin/>
    }
}


export default Layout
