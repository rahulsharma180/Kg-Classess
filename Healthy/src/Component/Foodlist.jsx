 function Foodlist() {

  let foodItems = ["dal","rice","roti","Milk","Salad","Quinoa Pulao", "Chia Pudding", "Idli", "Vegetable Upma", "Palak Paneer",]
  
  let food = foodItems.map((item)=>(
      <li class="list-group-item"> {item}</li>
    ))

  return (
   <> <div className="Mu"><ul key={item} class="list-group">
   {food}
  </ul></div></>
  )
}

export default Foodlist