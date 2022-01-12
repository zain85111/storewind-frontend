import { products } from "../../../products/products"

export default function handler(req, res) {
    const { id } = req.query;
    
    if (req.method === 'GET') {      
        
        const item = products.find(item => item.id === parseInt(id))

        // res.status(200).json(item)
        res.status(200).json(id)
        
    }else if (req.method === 'DELETE') {
        const delItem = products.find((item) => item.id === parseInt(id))
        console.log(id)
        console.log(delItem)

        const index = products.findIndex(item => item.id === parseInt(id))
        
        products.splice(index,1)
            
        res.status(200).json(delItem);
    }
}