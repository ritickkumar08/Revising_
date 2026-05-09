import Mango from './MyComponents/Mango'
import './App.css'
import Game from './MyComponents/Game'
import Event from './MyComponents/Event'
import Props from './MyComponents/Props'
import EmploeeCard from './MyComponents/EmployeeCard'
import Display from './MyComponents/Display'


function App() {
  const items = ["pen","pencil","ruler","eraser"]

  return (
    <>
      <p>i am the app.</p>
      <Mango/>
      <Game/>
      <Event/>
      <Props  age={20} naam={"ritick"}/>
      <EmploeeCard naam="ritick" designation="SDE" experience={1}/>
      <Display items={items}/>
    </>
  )
}

export default App
