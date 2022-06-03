import Head from "next/head";
import CashierHome from "../components/CashierHome";
import Navbar from "../components/Navbar";
import { DashboardContent } from "../components/DashboardContent";
import useToken from "../helper/useToken";

function Home() {
  const { token } = useToken();
  console.log(token)
  const isAdmin = true;
  return (
    
    <div>
      {token.currentUser.role == 'ADMIN' ? (
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
