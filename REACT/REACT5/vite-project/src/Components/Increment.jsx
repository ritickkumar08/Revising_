import { useState } from "react"

function Increment(){
    const[num, setNum] = useState(0);
    function handleIncrease(){
        setNum((prev)=>prev+1)
    }
    function handleDecrease(){
        setNum((prev)=>prev-1)
    }
    return(
        <div style={{display:"flex", gap:"10px"}}>
            <button onClick={handleDecrease}>-</button>
            <h1>{num}</h1>
            <button onClick={handleIncrease}>+</button>
        </div>
    )
}

export default Increment