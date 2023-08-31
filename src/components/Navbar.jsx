import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>

        
        <Link to="/signup">Registro</Link>
        <Link to="/login">Acesso</Link>
        <Link to="/private">Pagina Privada</Link>

        <Link to="/home">Home</Link> {/*admin y user */}
        <Link to="/perfil">Perfil</Link>
        <Link to="/coleccion">Colección</Link>
        <Link to="/gestion">Gestion</Link>{/*admin */}
        <Link to="/añadir">Añadir</Link>{/*admin */}
        <Link to="/busqueda">Busqueda</Link>
        
        </div>
    )
}
export default Navbar