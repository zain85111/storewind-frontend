import { useState } from "react";
import Signin from "../pages/signin";
import Sidebar from "./Sidebar"
import SidebarCash from "./Sidebar2";
import { useSession } from "next-auth/react";


const Layout = ({ children }) => {
    const { data: session } = useSession()

    // console.log(session)

    const isAdmin = false;

    if (session) {
        
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
