import './App.css';
import { Header } from './componentes/Header';
import { Routes, Route } from 'react-router-dom';




import { Home } from './vistas/Home/Home';
import { Juego } from './vistas/Juego/Juego';
import { JuegoMarvel } from './vistas/Juego/JuegoMarvel';

import { GlobalContextProvider } from './context/GlobalContext';
import { AcercaDe } from './vistas/Cerca/Acercade';

function App() {
  return (
    <GlobalContextProvider>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Juego />} />
          <Route path="/marvel" element={<JuegoMarvel />} />
          <Route path="/acercade" element={<AcercaDe />} />
        </Routes>
      </div>
    </GlobalContextProvider>
  );
}

export default App;