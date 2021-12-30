import Head from "next/head";
import Content from "../../components/Content";

export const getStaticProps = async () => { 

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
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
            <Content pageTitle='Products' data={data}/>
        </div>
    )
}

export default Products
