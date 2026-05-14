import {lazy, Suspense} from 'react'
import { Routes, Route } from "react-router-dom"
// import Counter from "./Components/Counter"
// import Reff from "./Components/Reff"
// import TextItem from "./Components/TextItem"


import Home from "./Components/Home"
import Profile from "./Components/Profile"
// import Dashboard from "./Components/Dashboard"
import Contacts from "./Components/Contacts"

const Dashboard = lazy(()=>import ("./Components/Dashboard"))


function App(){
  return(
    <> 
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/profile' element={ <Profile/> }/>
      <Route path='/Dashboard' element={ <Dashboard/> }/>
      <Route path='/contact' element={ <Contacts/>}/>
    </Routes>
    <div>
      {/* <Reff/>
      <Counter/>
      <TextItem/> */}
    </div>
    </>
  )
}

export default App