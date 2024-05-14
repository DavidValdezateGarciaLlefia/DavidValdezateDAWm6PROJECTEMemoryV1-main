import React, { useState, useEffect } from 'react';
import { Tarjeta } from "./Tarjeta";
import { ProveidorClics, utilitzaClics } from '../scripts/ContextClicks';
import { FormularioRank } from './FormularioRank';

export function GrupoTarjetas() {
  const [pokemons, setPokemons] = useState([]);
  const [carta1, setCarta1] = useState(null);
  const [carta2, setCarta2] = useState(null);
  const [tiempoRestante, setTiempoRestante] = useState(20);
  const [puntos, setPuntos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [visibleForm, setVisibleForm] = useState(false);  
  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
  };


  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemonIds = Array.from({length: 9}, () => Math.floor(Math.random() * 150) + 1);
        const pokemonPromises = pokemonIds.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json()));
        const pokemonData = await Promise.all(pokemonPromises);
        const formattedData = pokemonData.map(p => ({
          id: p.id,
          nombre: p.name,
          imagen: p.sprites.front_default
        }));

        const duplicatedPokemons = formattedData.flatMap(p => [p, {...p, id: `${p.id}-duplicate`}]); 
        setPokemons(shuffleArray(duplicatedPokemons));
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    const compararCartas = () => {
      if (carta1 && carta2) {
        if (carta1.nombre === carta2.nombre) {
          setPuntos(prev => prev + 50);
          setPokemons(pokemons => {
            return pokemons.map(pokemon => {
              if (pokemon.id === carta1.id || pokemon.id === carta2.id) {
                return { ...pokemon, isFlipped: true };
              }
              return pokemon;
            });
          });
        }
      }
    };
  
    compararCartas();
  
    const limpiarCartas = setTimeout(() => {
      setCarta1(null);
      setCarta2(null);
    }, 1000);
  
    return () => clearTimeout(limpiarCartas);
  }, [carta1, carta2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTiempoRestante(prev => {
        if (prev <= 1) clearInterval(interval); 
        return prev - 1;
      });
    }, 1000);
  
    const timeout = setTimeout(() => {
      clearInterval(interval); 
      setVisible(false);
      setVisibleForm(true);
    }, 20000);
  
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  

  if (visibleForm) {
    console.log("Form debería ser visible");
    return (
      <div>
        <FormularioRank puntos={puntos} />
      </div>
    );
    
  }
  const handleCardClick = (id, nombre) => {
    if ((carta1 && carta2) || (carta1?.id === id || carta2?.id === id)) {
      return;
    }

    if (!carta1) {
      setCarta1({ id, nombre });
    } else {
      if (carta1.id === id) {
        return;
      }
      setCarta2({ id, nombre });
    }
  };

  return (
    <ProveidorClics>
      <div className="flex flex-col justify-center items-center min-h-screen ">
        <ContadorGlobal tiempoRestante={tiempoRestante} puntos={puntos} />
        <div className="flex flex-wrap gap-2 p-5  ">
          {pokemons.map(pokemon => (
            <Tarjeta
              key={pokemon.id}
              id={pokemon.id}
              nombre={pokemon.nombre}
              imagen={pokemon.imagen}
              handleCardClick={handleCardClick}
              isFlipped={pokemon.isFlipped || (carta1 && carta1.id === pokemon.id) || (carta2 && carta2.id === pokemon.id)}
            />
          ))}
        </div>
      </div>
    </ProveidorClics>
  );
}

export function ContadorGlobal({ tiempoRestante, puntos }) {
  const { clicsGlobals } = utilitzaClics();

  return (
    <div className="text-white w-20 border p-2 bg-slate-700 shadow-lg rounded ">
      <p className="text-center mt-auto">Tiempo: {tiempoRestante}s</p>
      <p className="text-center">Puntos: {puntos}</p>
      <p className="text-center">Clicks: {clicsGlobals}</p>
    </div>
  );
}