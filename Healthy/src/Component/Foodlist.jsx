  function Foodlist({item}) {

  
  
    const handleClick = (myfood) => {
    
      console.log(`Click ${myfood}`); // Logs the specific food item
    };

  let food =  item.map((myfood)=>(
      <li key={myfood}className="list-group-item"> {myfood}<button className="btn btn-info myBtn" onClick={() => handleClick( myfood)}>Buy</button ></li>
      
    ))

  return (
   <> <div   className ="Mu Mr"><ul className="list-group">
   {food} 
 
  </ul></div></>
  )
}

export default Foodlist 