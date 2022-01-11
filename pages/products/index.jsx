import Head from "next/head";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";

export const getStaticProps = async () => { 

    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await fetch('http://localhost:3000/api/products');
    const data = await res.json();
    
    return {
        props: {
            products: data,
        }
    }
};
    
    
const Products = ({ products }) => {
    
    const data = {
        products: products,
    }

    return (
        <div>
            <Head>
                <title>Storewind | Products</title>
            </Head>
            <Navbar pageTitle={'Products'}/>
            <Content data={data}/>
        </div>
    )
}

export default Products
