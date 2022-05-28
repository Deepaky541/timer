import React, { useState } from 'react'

function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

export const Stopwatch = () => {
    const [watch,setWatch]=useState(0);
    const [timerid,setTimerId]=useState(null);

    const start=()=>{
      if(!timerid){

      let id= setInterval(()=>{
           setWatch((prev)=>prev+100);
       },100)
       setTimerId(id);
    
    }
   
    }
    const pause=()=>{
        clearInterval(timerid);
        setTimerId(null);
    }
    const reset=()=>{
      clearInterval(timerid);
      setWatch(0);
      setTimerId(null);
    }
  return (
    <div>
      <h2>{msToTime(watch)}</h2>
      <div>
        <button onClick={start}>start</button>
        <button onClick={pause}>pause</button>
        <button onClick={reset}>stop</button>
      </div>
    </div>
  );
}
