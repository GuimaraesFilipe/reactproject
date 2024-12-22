import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Contato from './pages/Contato';
import Fotos from './pages/Fotos';
import Comentario from './pages/Comentarios';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={'/'}>


        </Route>
        <Route element={<Contato />} path={'/contato'} />
        <Route element={<Fotos />} path={'/fotos'} />
        <Route element={<Comentario />} path={'/comentario'} />


      </Routes>


    </BrowserRouter>

  );
}

export default App;
