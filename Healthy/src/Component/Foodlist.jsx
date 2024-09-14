 function Foodlist() {

  let foodItems = ["dal","rice","roti","Milk","Salad","Quinoa Pulao", "Chia Pudding", "Idli", "Vegetable Upma", "Palak Paneer",]
  
  let food = foodItems.map((item)=>(
      <li key={item}className="list-group-item"> {item}</li>
    ))

  return (
   <> <div className ="Mu"><ul className="list-group">
   {food}
  </ul></div></>
  )
}

export default Foodlist