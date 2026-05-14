import { useMemo, useState } from "react"

function useMemoHook(){
    const[count, setCount] = useState(0)
    const[val, setVal] = useState(0);

    function handleIncrement(){
        setCount(count => count+1)
    }
    function handleDecrement(){
        setCount(count => count-1)
    }

    function calculateSum(e){
        // let sum;
        // const num = e.target.value
        // sum = num * (num+1)/2;
        setVal(Number(e.target.value) );
    }

    const ansDisplay = useMemo(()=>{
        const ans = val*(val+1)/2;
        console.log(ans);
        return ans
    },[val])
    // const ans = val*(val+1)/2;
    // console.log(ans);
    

    return(
        <div>
            <div>
                <button onClick={handleIncrement}>+Inc</button>
                <h1>{count}</h1>
                <button onClick={handleDecrement}>-Dec</button>
                <h2>ans : {ansDisplay}</h2>
            </div>
            <input type="number" onChange={calculateSum}  value={val} />
        </div>
    )
}

export default useMemoHook