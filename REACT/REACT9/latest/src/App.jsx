import Memoo from "./Components/Memoo"
import UseCallBack from "./Components/UseCallBack"
import UseMemoHook from "./Components/UseMemoHook"

function App(){
  return(
    <div>
      <Memoo naam="hero"/>
      <UseMemoHook />
      <UseCallBack/>
    </div>
  )
}

export default App