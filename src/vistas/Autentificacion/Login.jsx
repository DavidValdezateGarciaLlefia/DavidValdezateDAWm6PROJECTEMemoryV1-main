import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { supabase } from "../../supabase/supabase";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { usuario, setUsuario } = useContext(GlobalContext);

  function controladorEmail(e) {
    setEmail(e.target.value);
  }

  function controladorPassword(e) {
    setPassword(e.target.value);
  }

  function controladorSubmit(e) {
    e.preventDefault();
    async function inicioSesion() {
      try {
        let { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password
        });
        if (error) throw new Error(error.message);
        setUsuario({
          email: data.user.email,
          password: password
        });
        console.log('data de login', data);
        navigate('/pokemon'); 
      } catch (error) {
        console.log('ERROR EN LOGIN', error);
      }
    }
    inicioSesion();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-200" 
            style={{ 
                backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4c1bfd6-740f-4577-a3d0-0cb5b71fb2df/dgjewv2-ba931599-9f57-4ccc-ba8a-8964b290e60e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0YzFiZmQ2LTc0MGYtNDU3Ny1hM2QwLTBjYjViNzFmYjJkZlwvZGdqZXd2Mi1iYTkzMTU5OS05ZjU3LTRjY2MtYmE4YS04OTY0YjI5MGU2MGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LGD0EaqVCKvpYWrQL5igZS5NXg2N7_IeuyGgUXr8CwQ')`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            <h1 className="text-4xl font-bold text-center text-yellow-500 mb-8">Inicio de sesión</h1>
            <form onSubmit={(e) => controladorSubmit(e)} className="w-[400px] border-4 border-yellow-400 mx-auto p-5 bg-white shadow-lg rounded-lg">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-yellow-700 font-bold mb-2">Email:</label>
                    <input
                        onChange={(e) => controladorEmail(e)}
                        value={email}
                        type="text"
                        className="p-2 w-full border-2 border-yellow-400 rounded-lg"
                        placeholder="email@example.com"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-yellow-700 font-bold mb-2">Password:</label>
                    <input
                        onChange={(e) => controladorPassword(e)}
                        value={password}
                        type="password"
                        className="p-2 w-full border-2 border-yellow-400 rounded-lg"
                    />
                </div>
                <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mt-3" type="submit">
                    Iniciar sesión
                </button>
            </form>
        </div>
  );
}