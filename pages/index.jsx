import Head from "next/head";
import CashierHome from "../components/CashierHome";
import Navbar from "../components/Navbar";
import { DashboardContent } from "../components/DashboardContent";
import useToken from "../helper/useToken";

function Home() {
  const { token ,setToken} = useToken();
  
  const getCurrEmp = async () => {
    try {
      
      let response = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/employees/get_employee", {
          method: 'POST',
          headers: {
              
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          credentials: "include",
          body: JSON.stringify({"_id": token.currentUser.iat })
      });
  
      let result = await response.json();
    } catch (error) {
      console.log(error)
    }
  }
  
  if (token.currentUser.rolename != 'ADMIN') {
    getCurrEmp();
  } 

  return (
    
    <div>
      {token.currentUser.rolename == 'ADMIN' ? (
        <>
          <Head>
            <title>Storewind | Dashboard</title>
          </Head>
          <Navbar pageTitle={'Dashboard'} />
          <DashboardContent/>
        </>
        ) : (
        <>
            <Head>
              <title>Storewind | Home</title>
            </Head>
            <Navbar pageTitle={'Home'} />     
            <CashierHome/>
        </>
      )}
    </div>
  )
}

export default Home