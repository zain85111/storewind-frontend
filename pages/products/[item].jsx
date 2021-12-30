import Head from "next/head"
import Content from "../../components/Content"




const Item = ({item}) => {

    const data = {
        products: null,
        item : item,
    }
    return (
        <div>
            <Head>
                <title>Storewind | Product Details</title>
            </Head>
            <Content pageTitle='Product Details' data={data}/>
            <div className="p-4">
                <p className="text-xl">Product Name</p>
                <div className="py-4 flex justify-between space-x-10 ">
                    <div className="w-96 ">
                        <img src="https://icon-library.com/images/product-icon-png/product-icon-png-11.jpg" alt="" />
                    </div>
                    <div className="w-full flex justify-around ">
                        <div className="mx-10 space-y-8">
                            <p className="text-lg font-bold">Name</p>
                            <p className="text-lg font-bold">Brand</p>
                            <p className="text-lg font-bold">Category</p>
                            <p className="text-lg font-bold">Sub-Category</p>
                            <p className="text-lg font-bold">Cost</p>
                            <p className="text-lg font-bold">Price</p>
                            <p className="text-lg font-bold">Discount</p>
                            <p className="text-lg font-bold">Stock</p>
                            <p className="text-lg font-bold">Barcode</p>
                        </div>
                        <div className="mx-10 space-y-8">
                            <p className="text-lg">Lamp</p>
                            <p className="text-lg">Bright Night</p>
                            <p className="text-lg">Electronics</p>
                            <p className="text-lg">Lights</p>
                            <p className="text-lg">$17.99</p>
                            <p className="text-lg">$22.99</p>
                            <p className="text-lg">15%</p>
                            <p className="text-lg">93</p>
                            <p className="text-lg">1324-rgw-23</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;



