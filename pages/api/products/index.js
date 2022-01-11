import { products } from "../../../products/products"

export default function handler(req, res) {

    if (req.method === 'GET') {
        
        res.status(200).json(products);
        
    } else if (req.method === 'POST') {
        const name = req.body.name
        const brand = req.body.brand
        const price = req.body.price
        const discount = req.body.discount
        const stock = req.body.stock

        const newitem = {
            id: Date.now(),
            name,
            brand,
            price,
            discount,
            isStock:stock,
        }

        products.push(newitem);

        res.status(201).json(newitem)
    } 

}