import { useCallback, useState } from "react"

function UseCallBack(){
    const[count, setCount] = useState(0)

    let a = useCallback(function(){ console.log("hey")},[])

    return(
        <div>
            <Chotu prop={a}/>
            <button onClick={()=>setCount(count+1)}>count - {count}</button>
        </div>
    )
}

export default UseCallBack

function Chotu({prop}){
    return(
        <div>
            <h1>Hey {prop()}</h1>
        </div>
    )
}