import Head from "next/head";
import CashierHome from "../components/CashierHome";
import Navbar from "../components/Navbar";

function Home() {
  const isAdmin = false;
  return (
    
    <div>
      {isAdmin ? (
        <>
          <Head>
            <title>Storewind | Dashboard</title>
          </Head>
          <Navbar pageTitle={'Dashboard'}/>
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
