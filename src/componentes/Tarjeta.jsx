import React from 'react';
import { utilitzaClics } from '../scripts/ContextClicks';

export function Tarjeta({ id, nombre, imagen, handleCardClick, isFlipped }) {
  const { incrementaClicsGlobals } = utilitzaClics();

  const handleClick = () => {
    handleCardClick(id, nombre);
    incrementaClicsGlobals();
  };

  return (
    <div className="flex flex-col w-[150px] h-[200px] border p-2 bg-slate-200 shadow-lg rounded justify-between" onClick={handleClick}>
      <div className="h-[158px] flex justify-center items-center overflow-hidden">
        {isFlipped ? (
          <img src={imagen} alt={nombre} className="max-h-full object-scale-down" />
        ) : (
          <img src="https://i.etsystatic.com/29988796/r/il/e48668/3102482850/il_570xN.3102482850_kznq.jpg" alt="Parte trasera de la tarjeta" className="max-h-full object-scale-down" />
        )}
      </div>
      <p className="text-center mt-auto">{nombre}</p>
    </div>
  );
}