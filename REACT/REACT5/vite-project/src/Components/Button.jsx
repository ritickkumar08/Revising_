function Button({name, onClick}){
    return(
        <div>
            <h1>name: {name}</h1>
            <button onClick={onClick}>Logout</button>
        </div>
    )
}

export default Button