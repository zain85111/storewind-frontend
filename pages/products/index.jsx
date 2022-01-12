import Head from "next/head";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import { useEffect,useState } from "react";
import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000/api/products/"
    // baseURL:"http://18.116.39.224:8080/api/product/stock_less"
    // baseURL:"https://jsonplaceholder.typicode.com/users"
})

    
const Products = () => {

    const [result,setResult] = useState([])
    useEffect(() => {
        getData()
    }, [])
    
    const getData = async () => {
        const data = await api.get('/').then(({ data }) => data)
        // const data = await api.post('/',{"Number_of_products": 100000}).then(({ data }) => data)
        setResult(data)
        console.log(result)
    }
    

    const data = {
        products: result,
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
