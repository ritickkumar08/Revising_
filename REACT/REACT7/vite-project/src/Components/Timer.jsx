import { useEffect, useState } from "react"



function Timer(){
    const[timer, setTimer] = useState(0);

    useEffect(()=>{
        let id = setInterval(()=>{
            console.log(timer); // always logs 0!
            setTimer(timer+1);
        },1000)

        return () => clearInterval(id)
    },[])

    return(
        <div>
           {timer}
        </div>
    )
}

// function Timer(){
    // const[timer, setTimer] = useState(0);

//     useEffect(()=>{
//         let id = setInterval(()=>{
//             setTimer(timer => timer+1);
//         },1000)

//         return () => clearInterval(id)
//     },[])

//     return(
//         <div>
//            {timer}
//         </div>
//     )
// }

// function Timer(){
//     const[timer, setTimer] = useState(0);

//     useEffect(()=>{
//         let id = setInterval(()=>{
//             setTimer(timer+1);
//         },1000)

//         return () => clearInterval(id)
//     },[timer])

//     return(
//         <div>
//            {timer}
//         </div>
//     )
// }

export default Timer