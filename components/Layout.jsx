import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import SidebarCash from "./Sidebar2";

const Layout = ({ children }) => {

    return (
       
        <div className="bg-gray-100 h-screen">
            <main className="grid grid-cols-5">
                <div className="col-span-1">
                    <Sidebar  />
                    {/* <SidebarCash /> */}
                </div>
                <div className="col-span-4">
                    <Navbar />
                    {children}
                </div>
            </main>
        </div>

    )
}

export default Layout
