import Anything from "./Components/Anything"
import Button from "./Components/Button"
import Increment from "./Components/Increment"

function App(){
  function handleClick(name){
        name = "annonymous"
        return name
    }
  return(
    <div >
      <Button name="ritick" onClick={handleClick}/>
      <Anything name="ritick"/>
      <Increment/>
    </div>
  )
}

export default App