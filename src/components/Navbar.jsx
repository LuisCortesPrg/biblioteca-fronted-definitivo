import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contex/auth.context";

function Navbar() {
    const navigate= useNavigate()
  const { isUserActive, verifyToken } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    verifyToken()
    navigate("/login")
  };
  return (
    <div>
      {isUserActive === true ? (
        <>
          <Link to="/home">Home</Link> {/*admin y user */}
          <Link to="/perfil">Perfil</Link>
          <Link to="/coleccion">Colección</Link>
          <Link to="/gestion">Gestion</Link>{/*admin */}         
          <Link to="/añadir">Añadir</Link> {/*admin */}
          <Link to="/busqueda">Busqueda</Link>
          <button onClick={handleLogout}>Cerrar Sesión</button>
          <Link to="/private">Pagina Privada</Link>
        </>
      ) : (
        <>
          <Link to="/signup">Registro</Link>
          <Link to="/login">Acesso</Link>
        </>
      )}
    </div>
  );
}
export default Navbar;
