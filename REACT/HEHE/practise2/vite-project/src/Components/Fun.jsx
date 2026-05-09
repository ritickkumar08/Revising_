import { useState } from "react"

function Fun(){
    const[count, setCount]= useState(0)
    // function handleClick(){
    //     setCount(count+1)
    //     console.log(count);
        
    // }

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    };

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>+Inc</button>
        </div>
    )
}

export default Fun