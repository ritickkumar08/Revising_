import Body from "./Components/Body"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom"
// import ApiCalling from "./Components/ApiCalling"
import {Provider} from 'react-redux'
import { appStore } from "./Utils/appStore"


function App(){
  return(
    <Provider store={appStore}>
      <div>
      {/* <ApiCalling/> */}
      <NavBar/>
        <Outlet/>
      <Footer/>
    </div>
    </Provider>
  )
}

export default App