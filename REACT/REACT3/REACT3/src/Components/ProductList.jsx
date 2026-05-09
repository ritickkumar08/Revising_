function Productlist({products}){ 
    console.log(products);
    
    return(
        <div>
            <ul>
                {
                    products.map((product, index) =>{
                        return(
                            <li key={index} style={{display:"flex",  gap:"5px", border:"2px solid black"}}>
                                <h2>{product.name}</h2>
                                <h2>{product.quantity}</h2>
                                <h2>{product.sales}</h2>
                            </li>
                        )
                    })
                }   
            </ul>
        </div>
    )
}

export default Productlist