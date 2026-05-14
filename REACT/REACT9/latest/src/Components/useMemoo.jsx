import { useState } from "react"

function useMemoo(){
    const[count, setCount] = useState(0)
    const[val, setVal] = useState(0);

    function handleIncrement(){
        setCount(count => count+1)
    }
    function handleDecrement(){
        setCount(count => count-1)
    }

    function calculateSum(e){
        let sum;
        const num = e.target.value
        sum = num * (num-1)/2;
        setVal(sum);
    }

    return(
        <div>
            <div>
                <button onClick={handleIncrement}>+Inc</button>
                <h1>{count}</h1>
                <button onClick={handleDecrement}>-Dec</button>
            </div>
            <input type="text" onChange={calculateSum}  value={val} />
        </div>
    )
}

export default useMemoo