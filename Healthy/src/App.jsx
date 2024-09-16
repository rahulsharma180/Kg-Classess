 
import './App.css'
import ErrorMassege from './Component/ErrorMassege'
import Foodlist from "./Component/Foodlist"
function App() {
 
  let foodItems = ["dal","rice","roti","Milk","Salad","Quinoa Pulao", "Chia Pudding", "Idli", "Vegetable Upma", "Palak Paneer",]
  // let foodItems = [];  
  return (
    <>  
      <center className='Mr'><h1>Healthy Food</h1></center>
     <center> <Foodlist item={foodItems}/></center> 
     <center>  <ErrorMassege item={foodItems}/></center> 
      </>
  )
}

export default App
