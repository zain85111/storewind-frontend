import { products } from "../../../products/products"

export default function handler(req, res) {

    if (req.method === 'GET') {
        
        res.status(200).json(products);
        
    } else if (req.method === 'POST') {
        const id = req.body.id
        const name = req.body.name
        const brand = req.body.brand
        const price = req.body.price
        const discount = req.body.discount
        const isStock = req.body.isStock
        const storeId = req.body.storeId
        const categories = req.body.categories
        const subCatagories = req.body.subCatagories
        const tags = req.body.tags
        const location = req.body.location
        const barCode = req.body.barCode
        const modified = req.body.modified
        const imgUrl = req.body.imgUrl

        const newitem = {
            id,
            name,
            brand,
            price,
            discount,
            isStock,
            storeId,
            categories,
            subCatagories,
            tags,
            location,
            barCode,
            modified,
            imgUrl,
        }

        products.push(newitem);

        res.status(201).json(newitem)
    } 

}