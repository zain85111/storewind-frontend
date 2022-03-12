import Sidebar from "./Sidebar"
import SidebarCash from "./Sidebar2";

const Layout = ({ children }) => {

    const isAdmin = false;

    return (
       
        <div className="bg-gray-100 h-">
            <main className="grid grid-cols-5">
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
            </main>
        </div>

    )
}

export default Layout
