import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div 
            className="h-screen w-full flex flex-col items-center justify-center text-center text-white"
            style={{
                backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4c1bfd6-740f-4577-a3d0-0cb5b71fb2df/dgjewv2-ba931599-9f57-4ccc-ba8a-8964b290e60e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0YzFiZmQ2LTc0MGYtNDU3Ny1hM2QwLTBjYjViNzFmYjJkZlwvZGdqZXd2Mi1iYTkzMTU5OS05ZjU3LTRjY2MtYmE4YS04OTY0YjI5MGU2MGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LGD0EaqVCKvpYWrQL5igZS5NXg2N7_IeuyGgUXr8CwQ')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="bg-black bg-opacity-50 p-10 rounded-lg">
                <h1 className="text-4xl mb-4 font-bold">Pokémon Memory Game</h1>
                <p className="mb-6 text-xl">
                    Este es un proyecto de DAW2 de David Valdezate que recrea un juego de memoria basado en Pokémon.
                </p>
                <p className="mb-6 text-xl">
                    ¿Quieres jugar? Regístrate o inicia sesión.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link to="/login" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
                        Iniciar Sesión
                    </Link>
                    <Link to="/registro" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Registrarse
                    </Link>
                </div>
            </div>
        </div>
    );
}