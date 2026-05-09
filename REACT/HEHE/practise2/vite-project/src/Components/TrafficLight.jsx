import { useState } from "react";

function TrafficLight(){
    const colors = ["red", "yellow", "green"];
    const[index, setIndex] = useState(0);
    
    const next = () =>{
        setIndex(prev => (prev + 1)%3)
    }

    const current = colors[index];

    const colorMap = {
        red: "#e74c3c",
        yellow: "#f1c40f",
        green: "#2ecc71",
    };


    return(
        <div style={{textAlign:"center"}}>
            <div style={{
                width:100,
                height:100,
                borderRadius:"50%",
                backgroundColor: colorMap[current],
                margin:"0 auto 16px"
            }}></div>
            <p style={{fontSize:24, color:colorMap[current]}}>{current.toUpperCase()}</p>
            <button onClick={next}>next</button>
        </div>
    )
}

export default TrafficLight