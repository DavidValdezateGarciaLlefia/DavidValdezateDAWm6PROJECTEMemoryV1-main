import React from 'react';
import { arrayPersonajes } from "../bd/arrayPersonajes";
import { Tarjeta } from "./Tarjeta";
import { ProveidorClics, utilitzaClics } from '../scripts/ContextClicks'; 

export function GrupoTarjetas() {
  return (
    <ProveidorClics>
      <ContadorGlobal/>
      <div className="flex flex-wrap gap-2 bg-slate-700 p-5">
      
        {
          arrayPersonajes.map((item) => (
            <Tarjeta nombre={item.nombre} imagen={item.imagen} key={item.nombre}/>
          ))
        }
        
      </div>
    </ProveidorClics>
  );
}

export function ContadorGlobal() {
  const { clicsGlobals } = utilitzaClics(); 

  return (
    <div className="text-white w-20 border p-2 bg-slate-700 shadow-lg rounded ">
      <p className="text-center mt-auto">Clicks: {clicsGlobals}</p>
    </div>
  );
}