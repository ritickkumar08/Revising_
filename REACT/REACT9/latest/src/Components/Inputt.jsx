import { useState } from "react"

function Inputt(){
    const[inp, setInp] = useState("")

    function handleChange(e){
        setInp(e.target.value)
    }

    return(
        <div>
            <input type="text" onChange={ ()=>handleChange() } value={inp} />
        </div>
    )
}

export default Inputt