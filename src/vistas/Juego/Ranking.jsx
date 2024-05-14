import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase";

export function Ranking() {
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDatos() {
            try {
                const { data, error } = await supabase
                    .from('datos_memory')
                    .select('nombre, fecha, email, puntuacion')
                    .order('puntuacion', { ascending: false });

                if (error) {
                    throw error;
                }
                
                setDatos(data);
            } catch (error) {
                console.error('Error al obtener datos:', error);
                setError(error.message);
            } finally {
                setCargando(false);
            }
        }

        fetchDatos();
    }, []);

    if (cargando) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Tabla de Ranking</h1>
            <table className="min-w-full bg-yellow-200 border-2 border-yellow-400 rounded-lg shadow-lg">
                <thead>
                    <tr className="bg-yellow-300 border-b-2 border-yellow-500">
                        <th className="py-3 px-6">Nombre</th>
                        <th className="py-3 px-6">Fecha</th>
                        <th className="py-3 px-6">Email</th>
                        <th className="py-3 px-6">Puntuación</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((fila, indice) => (
                        <tr key={indice} className={`text-center border-t ${indice % 2 === 0 ? 'bg-yellow-100' : 'bg-yellow-50'}`}>
                            <td className="py-3 px-6">{fila.nombre}</td>
                            <td className="py-3 px-6">{fila.fecha}</td>
                            <td className="py-3 px-6">{fila.email}</td>
                            <td className="py-3 px-6">{fila.puntuacion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}