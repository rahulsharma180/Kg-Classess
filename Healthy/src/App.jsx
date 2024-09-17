 
import './App.css'
import ErrorMassege from './Component/ErrorMassege'
import Foodinput from './Component/Foodinput'
import Foodlist from "./Component/Foodlist"
function App() {
 
  let foodItems = ["dal","rice","roti","Milk","Salad","Quinoa Pulao", "Chia Pudding", "Idli", "Vegetable Upma", "Palak Paneer",]
  // let foodItems = [];  
  return (
    <>  
     <h1 className='hd'>Healthy Food</h1> 
     <Foodinput/>
     <Foodlist item={foodItems}/> 
      <ErrorMassege item={foodItems}/> 
      </>
  )
}

export default App
