import { useState } from "react"

function Anything({name}){
    const[user, setuser]=useState(name);
    function handleClick(){
        setuser("annynoumous")
    }

    return(
        <div>
            <h1>{user}</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Anything