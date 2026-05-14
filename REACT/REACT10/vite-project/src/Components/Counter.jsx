import { useRef, useState } from "react"

function Counter(){
    const[count,setCount] = useState(0)
    

    const countRef = useRef(0)
    // console.log(countRef);
    


    return(
        <div>
            <button onClick={()=>setCount(count+1) }>+Inc - {count} </button>
            <br /><br />
            <button onClick={()=>countRef.current++}>+IncRef - {countRef.current}</button>
        </div>
    )
}

export default Counter