import React from 'react';
import { useState } from 'react';
import { utilitzaClics } from '../scripts/ContextClicks';

export function Tarjeta({ id, nombre, imagen, handleCardClick, isFlipped }) {
  const { incrementaClicsGlobals } = utilitzaClics();

  const handleClick = () => {
    handleCardClick(id, nombre);
    incrementaClicsGlobals();
  };
  const incrementaClics = () => {
    setClics(clics + 1);
    incrementaClicsGlobals(); 
  };
  const [clics, setClics] = useState(0);
  return (
    <div className="flex flex-wrap justify-center items-center" onClick={incrementaClics}>
      
      <div className="flex flex-col w-[210px] h-[300px] m-1 relative" onClick={handleClick}>
  {isFlipped ? (
    <>
      <img src={imagen} alt={nombre} className="w-[210px] h-[300px] object-scale-down bg-slate-400 absolute top-0 left-0 z-0" />
      <p className="absolute bottom-0 left-0 right-0 z-10 p-1 bg-black bg-opacity-50 text-white text-center">
        Clicks: <span>{clics}</span>
      </p>
    </>
  ) : (
    <img src="https://tcg.pokemon.com/assets/img/global/tcg-card-back.jpg" alt="Parte trasera de la tarjeta" className="w-full h-full object-scale-down" />
  )}
</div>
</div>
      
  
  );
}