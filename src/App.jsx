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
import Detalles from "./pages/Detalles";
import EditarPerfil from "./pages/EditarPerfil"
import EditarLibro from "./pages/EditarLibro";

function App() {
  return (
    <>
      <Navbar />
<div className="rutas" >
      <Routes >
        <Route path="/home" element={<IsPrivate><Home /></IsPrivate>}  />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/private" element={<IsPrivate><Private /></IsPrivate>} />
        <Route path="/perfil" element={<IsPrivate><Perfil /></IsPrivate>} />
        <Route path="/editarperfil" element={<IsPrivate><EditarPerfil /></IsPrivate>} />
        <Route path="/coleccion" element={<IsPrivate><Coleccion /></IsPrivate>} />
        <Route path="/gestion" element={<IsPrivate><Gestion /></IsPrivate>} /> {/*admin */}         
        <Route path="/anadir" element={<IsPrivate><Añadir /></IsPrivate>} /> {/*admin */} 
        <Route path="/busqueda" element={<IsPrivate><Busqueda /></IsPrivate>} />
        <Route path="/coleccion/:id" element={<IsPrivate><Detalles /></IsPrivate>} />
        <Route path="/editarlibro" element={<IsPrivate><EditarLibro /></IsPrivate>} />

        <Route path="/error" element={<Error />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
