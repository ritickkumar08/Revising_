function Display({items}){
    // console.log(items);
    
    return(
        <div>
            {
                items.map((item)=>{
                    return(
                        <h1>{item}</h1>
                    )
                })
            }
        </div>
    )
}

export default Display