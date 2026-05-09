function Catch({products}){
    console.log(products);
    
    const DisplayProducts = products.filter((product) =>{return(product.quantity > product.sales)})
    
    return(
        <div>
            <ul>
                {DisplayProducts.map((product,index) => {
                    return(
                        <li key={index} style={{display:"flex", gap:"10px"}}>
                            <h1>{product.name}</h1>
                            <h1>{product.quantity}</h1>
                            <h1>{product.price}</h1>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Catch