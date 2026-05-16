import Body from "./Components/Body"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom"
// import ApiCalling from "./Components/ApiCalling"


function App(){
  return(
    <div>
      {/* <ApiCalling/> */}
      <NavBar/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default App