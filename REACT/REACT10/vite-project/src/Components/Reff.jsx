import { useEffect, useRef } from "react";

function Reff(){
    let salary = 200000;
    let spanEl = useRef()

    useEffect(()=>{
        setTimeout(()=>{
            spanEl.current.innerHTML = "200"
        },3000)
    },[])
    return(
        <div>
            <h1>my salary : <span ref={spanEl}>{salary}</span></h1>
        </div>
    )
}

export default Reff