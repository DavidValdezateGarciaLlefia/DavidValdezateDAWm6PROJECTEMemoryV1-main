import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { supabase } from '../supabase/supabase';

export function Header() {
    const navigate = useNavigate();
    const { usuario, setUsuario } = useContext(GlobalContext);

    async function controladorLogout() {
        try {
            await supabase.auth.signOut();
            setUsuario({});
            navigate('/login');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    }

    return (
        <header className="w-full p-4 bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl flex-grow text-center">POKÈMONS MEMORY</h1>
                <nav>
                    <ul className="flex space-x-4 items-center">
                        <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
                        {usuario.email ? (
                            <>
                                <li><Link to="/pokemon" className="hover:text-yellow-300">Pokemons Memory</Link></li>
                                <li><Link to="/ranking" className="hover:text-yellow-300">Ranking</Link></li>
                                <li className="flex items-center space-x-4">
                                    <span>{usuario.email}</span>
                                    <button 
                                        onClick={controladorLogout} 
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <div className="flex space-x-4">
                                <li><Link to="/login" className="hover:text-yellow-300">Login</Link></li>
                                <li><Link to="/registro" className="hover:text-yellow-300">Registro</Link></li>
                            </div>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}