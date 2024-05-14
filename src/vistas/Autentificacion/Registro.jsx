import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabase";
import { GlobalContext } from "../../context/GlobalContext";

export function Registro() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const { usuario, setUsuario } = useContext(GlobalContext);

    function controladorEmail(e) {
        setEmail(e.target.value);
    }
    
    function controladorPassword(e) {
        setPassword(e.target.value);
    }

    function controladorNombre(e) {
        setNombre(e.target.value);
    }

    function controladorApellido(e) {
        setApellido(e.target.value);
    }

    async function controladorSubmit(e) {
        e.preventDefault();
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if (!error) {
            const { error: insertError } = await supabase
            .from('users')
            .insert([{ email: email, nombre: nombre, apellido: apellido }]);
            
            if (!insertError) {
                setUsuario(data.user);
            } else {
                console.error(insertError);
            }
            navigate('/login');
        } else {
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-200" 
        style={{ 
            backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4c1bfd6-740f-4577-a3d0-0cb5b71fb2df/dgjewv2-ba931599-9f57-4ccc-ba8a-8964b290e60e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0YzFiZmQ2LTc0MGYtNDU3Ny1hM2QwLTBjYjViNzFmYjJkZlwvZGdqZXd2Mi1iYTkzMTU5OS05ZjU3LTRjY2MtYmE4YS04OTY0YjI5MGU2MGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LGD0EaqVCKvpYWrQL5igZS5NXg2N7_IeuyGgUXr8CwQ')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
        }}
    >
        <h1 className="text-4xl font-bold text-center text-yellow-500 mb-8">Registro</h1>
        <form className="w-[400px] border-4 border-yellow-400 mx-auto p-5 bg-white shadow-lg rounded-lg">
            <div className="mb-4">
                <label htmlFor="email" className="block text-yellow-700 font-bold mb-2">Email:</label>
                <input onChange={controladorEmail} type="text" className="p-2 w-full border-2 border-yellow-400 rounded-lg" placeholder="email@example.com" />
            </div>
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-yellow-700 font-bold mb-2">Nombre:</label>
                <input onChange={controladorNombre} type="text" className="p-2 w-full border-2 border-yellow-400 rounded-lg" />
            </div>
            <div className="mb-4">
                <label htmlFor="apellido" className="block text-yellow-700 font-bold mb-2">Apellido:</label>
                <input onChange={controladorApellido} type="text" className="p-2 w-full border-2 border-yellow-400 rounded-lg" />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-yellow-700 font-bold mb-2">Password:</label>
                <input onChange={controladorPassword} type="password" className="p-2 w-full border-2 border-yellow-400 rounded-lg" />
            </div>
            <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mt-3" type="submit">Registrarse</button>
        </form>
    </div>
    );
}
