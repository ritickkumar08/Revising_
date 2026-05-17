import { useContext, useState } from "react";
import { CountContext } from "./Context";

function PropDrilling2(){
    const[count, setCount] = useState(0)

    return(
        <div>
            <CountContext.Provider value={{count, setCount }}>
                <Count />
            </CountContext.Provider>
        </div>
    )
}

export default PropDrilling2;


function Count(){
    return(
        <div>
            <CountRenderer/>
            <Button/>
        </div>
    )
}

function CountRenderer(){
   let { count } = useContext(CountContext)
    return(
        <div>
            <h1>count : {count}</h1>
        </div>
    )
}

function Button(){
    // let {count, setCount } = useContext(CountContext)
    function handleInc(){setCount(count+1)}
    function handleDec(){setCount(count-1)}

    return(
        <div>
            <button onClick={handleInc}>Inc</button>
            <button onClick={handleDec}>Dec</button>
        </div>
    )
}