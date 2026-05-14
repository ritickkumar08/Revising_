import { memo, useState } from "react"

function Memoo({naam}){
    const[person, setPerson] = useState(naam)

    function handleNaam(){
        setPerson(Math.floor(Math.random() * 10))
    }

    return (
        <div>
            <Chotu naam={person}/>
            <button onClick={handleNaam}>Change Name</button>
            <Chotu naam="ritick"/>
            <Chotu naam="kumar"/>
            <Chotu naam="noor"/>
        </div>
    )
}

export default Memoo

let Chotu = memo(function({naam}){
    return(
        <div>
            <h1>naam : {naam}</h1>
        </div>
    )
})

// function Chotu({naam}){
//     return(
//         <div>
//             <h1>naam : {naam}</h1>
//         </div>
//     )
// }