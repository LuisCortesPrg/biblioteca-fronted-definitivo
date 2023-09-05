import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const navigate = useNavigate();
  const { isUserActive, verifyToken } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    verifyToken();
    navigate("/login");
  };
  return (
    <div className="rutas">
      {isUserActive === true ? (
        <>
          <Link className="linkeando" to="/editarperfil">
            Editar Perfil
          </Link>
          <Link className="linkeando" to="/perfil">
            Perfil
          </Link>
          <Link className="linkeando" to="/home">
            Home
          </Link>{" "}
          {/*admin y user */}
          <Link className="linkeando" to="/coleccion">
            Colección
          </Link>
          <Link className="linkeando" to="/anadir">
            Añadir
          </Link>{" "}
          {/*admin */}
          <Link className="linkeando" to="/gestion">
            Gestion
          </Link>
          {/*admin */}
          {/* <Link className="linkeando" to="/busqueda">Busqueda</Link> */}
          <button className="cierro" onClick={handleLogout}>
            Cerrar Sesión
          </button>
          {/* <Link to="/private">Pagina Privada</Link> */}
        </>
      ) : (
        <>
          <Link className="linkeando" to="/signup">
            Registro
          </Link>
          <Link className="linkeando" to="/login">
            Acesso
          </Link>
        </>
      )}
    </div>
  );
}
export default Navbar;
