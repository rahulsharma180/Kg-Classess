 

export default function Foodinput() {

    const handleonChange=(event)=>{console.log(event.target.value)};

  return (
    <div>
       <center><input className='mybox' type="text" placeholder="Enter your food" onChange={handleonChange
       } /></center>
    </div>
  )
}
