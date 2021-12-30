import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import SidebarCash from "./Sidebar2";

const Layout = ({ children }) => {
    const isLoggedIn = false;

    return (
       
        <div className="bg-gray-100 h-screen">
            <main className="grid grid-cols-5">
                <div className="">
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
