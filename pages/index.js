import Head from "next/head";
import Navbar from "../components/Navbar";
function Home() {
  return (
    
    <div>
      <Head>
        <title>Storewind | Dashboard</title>
      </Head>
      <Navbar pageTitle={'Dashboard'}/>
    </div>
  )
}

export default Home
