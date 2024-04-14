import React, { useState } from 'react';
import { utilitzaClics } from '../scripts/ContextClicks';

const incrementaClics = () => {
  setClics(clics + 1);
  incrementaClicsGlobals(); 
};

export function Tarjeta({ nombre, imagen }) {
  const { incrementaClicsGlobals } = utilitzaClics(); 
  const [clics, setClics] = useState(0);

  const incrementaClics = () => {
    setClics(clics + 1);
    incrementaClicsGlobals();
  };

  return (
    <div className="flex flex-col w-[150px] h-[200px] border p-2 bg-slate-200 shadow-lg rounded justify-between" onClick={incrementaClics}>
      
      <p className="text-center">Clicks: <span>{clics}</span></p>
      <div className="h-[158px] flex justify-center items-center overflow-hidden">
        <img src={imagen} alt={nombre} className="max-h-full object-scale-down"/>
      </div>
      <p className="text-center mt-auto">{nombre}</p>
    </div>
  );
}