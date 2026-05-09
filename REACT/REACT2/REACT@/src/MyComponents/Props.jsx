function Props({age, naam}){
    console.log(age, naam);
    
    return(
        <div>
            <h1>{naam} aged {age} is a great human and seems to be a hero</h1>
        </div>
    )
}

export function Props11(props){
    return(
        <div>
            <h1>{props.age}</h1>
            <h1>{props.naam}</h1>
        </div>
    )
}

export default Props