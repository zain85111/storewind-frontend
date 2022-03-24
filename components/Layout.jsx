import Sidebar from "./Sidebar"
import SidebarCash from "./Sidebar2";

const Layout = ({ children }) => {

    const isAdmin = false;

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
}

export default Layout
