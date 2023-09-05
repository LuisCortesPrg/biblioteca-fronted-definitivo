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

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/private" element={<Private />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/editarperfil" element={<EditarPerfil />} />
        <Route path="/coleccion" element={<Coleccion />} />
        <Route path="/gestion" element={<Gestion />} /> {/*admin */}         
        <Route path="/anadir" element={<Añadir />} /> {/*admin */} 
        <Route path="/busqueda" element={<Busqueda />} />
        <Route path="/coleccion/:id" element={<Detalles />} />

        <Route path="/error" element={<Error />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
