import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

export const Timer = () => {
    const [timer,setTimer]=useState(0);
    const [timerid,setTimerid]=useState(null);
    const [data, setdata] = useState(0)
    const submitHandler=()=>{
      setTimer(data);
    }

    useEffect(() => {
       if(timer<=0)
        {
             clearInterval(timerid);
        }
        else{ 
           const id = setInterval(() => {
              setTimer(timer - 1);
            }, 1000);
            setTimerid(id);
          }
          return(
            clearInterval(timerid)
          )
          
    }, [timer])
    

  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "100%" }}>
     
      <input
        type="number"
        placeholder="Enter seconds"
        onChange={(e) => setdata(e.target.value)}
      />
      <button onClick={submitHandler}>submit</button>
      <h1>Time left:{timer} secs</h1>
    </div>
  );
}
