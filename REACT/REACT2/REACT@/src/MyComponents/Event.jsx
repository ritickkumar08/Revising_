function Event(){
    function handleClick1(){
        alert("1 was clicked")
    }

    return (
        <div>
            <button onClick={handleClick1}>touch me</button>
        </div>
    )
}

export default Event