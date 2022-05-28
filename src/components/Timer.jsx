import React, { useState,useEffect } from 'react'

export const Timer = () => {
    const [timer,setTimer]=useState(10);
    useEffect(() => {
      const id=setInterval(()=>{setTimer(timer-1)},1000);

    
      return () => {
        clearInterval(id);
      }
    }, [timer])
    

  return (
    <div>
     {timer}
    </div>
  )
}
