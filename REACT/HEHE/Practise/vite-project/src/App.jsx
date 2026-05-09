import Button from "./Components/Button"
import UserCard from "./Components/UserCard"


function App(){
  function handleClick(){
    alert("I was clicked")
  }
  function handleClick1(){
    alert("I was not clicked")
  }

  return(
    <div>
      <UserCard name="ritick" age={22} />
      <Button label="Click Me" onClick={handleClick} disabled={false}/>
      <Button label="Click Me" onClick={handleClick1} disabled={true}/>
    </div>
  )
}

export default App