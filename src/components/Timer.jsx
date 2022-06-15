import React, { useState,useEffect } from 'react'

export const Timer = ({start,end}) => {
    const [timer,setTimer]=useState(start);
    const [timerid,setTimerid]=useState(null);
    useEffect(() => {
    
       if(timer>end)
        {
             clearInterval(timerid);
        }
            const id = setInterval(() => {
              setTimer(timer + 1);
            }, 1000);
            setTimerid(id);

        return()=>{
         clearInterval(id);
        }
        
           
        
     
    }, [timer,end])
    

  return (
    <div>
     {timer}
    </div>
  )
}
