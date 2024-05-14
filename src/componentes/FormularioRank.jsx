import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { supabase } from '../supabase/supabase';


export const FormularioRank = ({ puntos }) => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const { usuario } = useContext(GlobalContext);
  const [insertResult, setInsertResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleString('es-ES', {
      hour12: false
    });
    setFecha(formattedDate);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log('usuario: ', usuario);
    const { email } = usuario;

    async function insertData() {
        try {
            const { error: insertError } = await supabase
                .from('datos_memory')
                .insert([{ nombre: nombre, fecha: fecha, email: email, puntuacion: puntos }]);

            if (!insertError) {
                console.log('Insert exitoso');
                setInsertResult('Insert successful');
                navigate('/ranking'); // Aquí usamos navigate para redirigir
            } else {
                console.error(insertError);
                setInsertResult(`Insert error: ${insertError.message}`);
            }
        } catch (error) {
            console.error('Unexpected error', error);
            setInsertResult(`Unexpected error: ${error.message}`);
        }
    }

    insertData();
}

    return (
        <div className="flex items-center justify-center min-h-screen ">
          <div className="relative bg-white bg-opacity-90 p-5 rounded-lg shadow-lg max-w-md"
            style={{ backgroundImage: `url('https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/800px-Pikachu.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <form onSubmit={handleSubmit} className="bg-white bg-opacity-80 rounded-lg p-4">
              <div className="text-center mb-4 text-2xl font-bold text-red-700">Ranking Pokémon</div>
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Fecha y hora actual:</label>
                <input
                  type="text"
                  value={fecha}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  disabled
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Puntuación:</label>
                <input
                  type="text"
                  value={puntos}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  disabled
                />
              </div>
              <button type="submit" className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Enviar
              </button>
            </form>
          </div>
        </div>
      );
}

 
  

export default FormularioRank