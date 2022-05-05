import Head from "next/head";
import CashierHome from "../components/CashierHome";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import { DashboardContent } from "../components/DashboardContent";

function Home() {
  const { data: session } = useSession()
    const isAdmin = false;
    return (
      
      <div>
        {isAdmin ? (
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
