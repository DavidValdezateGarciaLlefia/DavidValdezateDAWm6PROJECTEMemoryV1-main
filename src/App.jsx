import './App.css';
import { Header } from './componentes/Header';
import { Routes, Route } from 'react-router-dom';




import { Home } from './vistas/Home/Home';
import { Juego } from './vistas/Juego/Juego';
import { JuegoMarvel } from './vistas/Juego/JuegoMarvel';

import { GlobalContextProvider } from './context/GlobalContext';
import { AcercaDe } from './vistas/Cerca/Acercade';
import { Login } from './vistas/Autentificacion/Login';
import { Registro } from './vistas/Autentificacion/Registro';
import { Ranking } from './vistas/Juego/Ranking';

function App() {
  return (
    <GlobalContextProvider>
      <div className="flex flex-col min-h-screen" 
        style={{
          backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4c1bfd6-740f-4577-a3d0-0cb5b71fb2df/dgjewv2-ba931599-9f57-4ccc-ba8a-8964b290e60e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0YzFiZmQ2LTc0MGYtNDU3Ny1hM2QwLTBjYjViNzFmYjJkZlwvZGdqZXd2Mi1iYTkzMTU5OS05ZjU3LTRjY2MtYmE4YS04OTY0YjI5MGU2MGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LGD0EaqVCKvpYWrQL5igZS5NXg2N7_IeuyGgUXr8CwQ')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Header />
        <div className="flex-grow flex items-center justify-center bg-purple-600 bg-opacity-70">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<Juego />} />
            <Route path="/marvel" element={<JuegoMarvel />} />
            <Route path="/acercade" element={<AcercaDe />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/registro' element={<Registro/>} />
            <Route path='/ranking' element={<Ranking/>} />
          </Routes>
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;