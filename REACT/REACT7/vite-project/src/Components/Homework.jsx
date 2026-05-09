import { useEffect, useState } from "react"

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === 'https://example.com/api/products') {
                resolve({
                    status: 200,
                    message: 'Success',
                    data: {
                        products: [
                            { name: 'Color Pencils', price: 50,  quantity: 40 },
                            { name: 'Sketchpens',    price: 110, quantity: 20 },
                            { name: 'Erasor',        price: 20,  quantity: 20 },
                            { name: 'Sharpner',      price: 22,  quantity: 30 },
                        ],
                    },
                })
            } else {
                reject({
                    status: 404,
                    message: 'Items list not found.',
                })
            }
        })
    })
}

function Homework(){
    const[products, setproducts] = useState([]);
    const[showFiltered, setShowFiltered] = useState(false)
    const API = 'https://example.com/api/products';

    useEffect(()=>{
        async function fake(){
            const data = await fakeFetch(API);
            const resp = data.data.products
            setproducts(resp)
        }

        fake();
    },[])

    const displayProducts = showFiltered ? products.filter((item)=> item.quantity > 20) : products

    return(
        <div>
            {
                displayProducts.map((item, index) => {
                    return(
                        <div key={index} style={{display:"flex"}}>
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                            <p>{item.quantity}</p>
                        </div>
                    )
                })
            }

            <button onClick={()=>setShowFiltered(false)}>allProducts</button>
            <button onClick={()=>setShowFiltered(true)}>less than 20</button>
        </div>
    )
}

export default Homework