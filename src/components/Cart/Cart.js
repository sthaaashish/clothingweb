import { Box } from "@mui/system"
import React from "react"

export default function Cart({cart}) {
 
  return (
    <>
    <Box sx={{display:'flex', flexDirection:'row'}}>
      <ol>  
        {cart.map((item)=>
            <li key={item.id}>
           <span > productid:{item.id}--</span>
             <span>   {item.title}--</span>
               <span> {item.price}</span>
            </li>
    
        )} 
         </ol>
        </Box>
    </>
  )
}



