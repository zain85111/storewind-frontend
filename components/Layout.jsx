import Signin from "../pages/signin";
import Sidebar from "./Sidebar"
import SidebarCash from "./Sidebar2";
import useToken from "../helper/useToken";
const Layout = ({ children }) => {

    const { token } = useToken();
    console.log(token)

    if (token && token.currentUser!=null) {
        
        return (
           
            <div className="flex bg-gray-100 lg:grid lg:grid-cols-5 min-h-screen">
                <div className="invisible w-0 lg:col-span-1  lg:visible">
                    {token.currentUser.rolename == 'ADMIN' ? (
                    <>
                        <Sidebar  />
                        
                    </>
                    ) : (
                            <>
                        <SidebarCash />
                            </>
                        )}
                </div>
                <div className="w-full lg:col-span-4  ">
                    {children}
                </div>
            </div>
    
        )
    } else {
        return <Signin/>
    }
}


export default Layout
