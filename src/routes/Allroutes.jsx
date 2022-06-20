import React from 'react'
import {Stopwatch} from "../components/Stopwatch"
import { Timer } from '../components/Timer';
import { Route, Routes } from "react-router-dom";


export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </div>
  );
}
