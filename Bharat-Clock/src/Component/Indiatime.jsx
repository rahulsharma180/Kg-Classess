 


 import React, { useEffect, useState } from 'react';

 export function Indiatime() {
   const [currentTime, setCurrentTime] = useState(new Date());
 
   useEffect(() => {
     // Set interval to update the time every second
     const interval = setInterval(() => {
       setCurrentTime(new Date());
     }, 1000); // 1000 milliseconds = 1 second
 
     // Cleanup the interval on component unmount
     return () => clearInterval(interval);
   }, []);
 
   return (
     <>
       <div>
         <center>
           <p className="fs-4 text">
             This is the current time: {currentTime.toLocaleTimeString()}{" "}
             {currentTime.toLocaleDateString()}
           </p>
         </center>
       </div>
     </>
   );
 }
 
// export function Indiatime (){
//     let today  = new Date ();



    
//     return(
//         <><div> <center><p className="fs-4 text"> This is the current time: {today.toLocaleTimeString()}{" "}{today.toLocaleDateString()}</p></center> </div>
        
        
        
        
//         </>
//     )




// };
