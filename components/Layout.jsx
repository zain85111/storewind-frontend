import Signin from "../pages/signin";
import Sidebar from "./Sidebar"
import SidebarCash from "./Sidebar2";
import useToken from "../helper/useToken";
const Layout = ({ children }) => {

    const { token } = useToken();
    console.log(token)

    if (token && token.currentUser!=null) {
        
        return (
           
            <div className="bg-gray-100 grid grid-cols-5 min-h-screen" style={{fontFamily:''}}>
                <div className="col-span-1">
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
