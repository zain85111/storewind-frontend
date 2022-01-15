import Sidebar from "./Sidebar"
import SidebarCash from "./Sidebar2";
import Login from '../pages/login';
import { useSession } from "next-auth/react";

const Layout = ({ children }) => {
    const { data: session } = useSession()
    const adminId = 1234567890;
    console.log(session)

    if (session) {
        
        return (
           
            <div className="bg-gray-100 h-screen">
                <main className="grid grid-cols-5">
                    <div className="col-span-1">
                        {adminId === 1234567890 ? (
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
                </main>
            </div>
    
        )
    } else {
        return <Login/>
    }

}

export default Layout
