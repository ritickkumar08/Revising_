import './App.css'
import Productlist from './Components/ProductList';
import Catch from './Components/Catch';
import Grade from './Components/Grade';

function App() {

  const products = [
    { name: 'Perk', quantity: 10, sales: 7 },
    { name: 'Pepsi', quantity: 10, sales: 20 },
    { name: 'Coke', quantity: 18, sales: 50 },
    { name: 'Maggi', quantity: 41, sales: 22 },
    { name: '5Star', quantity: 7, sales: 1 },
  ];
  
  return(
    <div>
      <p>Hey! I am the Header</p>
      {/* <Productlist  products={products}/>
      <Catch products={products}/> */}
      <Grade/>
    </div>
  )
}

export default App
