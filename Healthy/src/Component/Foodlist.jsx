 

 
 function Foodlist(props) {

  // let foodItems = ["dal","rice","roti","Milk","Salad","Quinoa Pulao", "Chia Pudding", "Idli", "Vegetable Upma", "Palak Paneer",]
  
  let food = props.item.map((myfood)=>(
      <li key={myfood}className="list-group-item"> {myfood}</li>
    ))

  return (
   <> <div className ="Mu"><ul className="list-group">
   {food}
 
  </ul></div></>
  )
}

export default Foodlist 