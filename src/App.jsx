import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Private from './pages/Private'
import Error from './pages/Error'
import NotFound from './pages/NotFound'
import IsPrivate from "./components/IsPrivate";
import Perfil from "./pages/Perfil";
import Coleccion from "./pages/Coleccion";
import Gestion from "./pages/Gestion";
import Añadir from "./pages/Añadir";
import Busqueda from "./pages/Busqueda";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<IsPrivate><Home /></IsPrivate>} />
        <Route path="/login" element={<IsPrivate><Login /></IsPrivate>} />
        <Route path="/signup" element={<IsPrivate><Signup /></IsPrivate>} />
        <Route path="/private" element={<IsPrivate><Private /></IsPrivate>} />
        <Route path="/perfil" element={<IsPrivate><Perfil /></IsPrivate>} />
        <Route path="/coleccion" element={<IsPrivate><Coleccion /></IsPrivate>} />
        <Route path="/gestion" element={<IsPrivate><Gestion /></IsPrivate>} /> {/*admin */}         
        <Route path="/añadir" element={<IsPrivate><Añadir /></IsPrivate>} /> {/*admin */} 
        <Route path="/busqueda" element={<IsPrivate><Busqueda /></IsPrivate>} />

        <Route path="/error" element={<Error />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
