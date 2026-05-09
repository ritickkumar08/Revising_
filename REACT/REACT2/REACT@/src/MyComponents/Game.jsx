function Game(){

    let randomNumber = Math.floor((Math.random()*10))
    // if() 
    return(
        <div>
            <h1>RandomNumber : {randomNumber}</h1>
            <h2>{randomNumber == 7 ? <h2>winner</h2> : <h2>Looser</h2>}</h2>
        </div>
    )
}

export default Game