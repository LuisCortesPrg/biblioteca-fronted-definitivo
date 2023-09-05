// Resultado.js
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import service from "../service/service.config";

function Resultado() {
  const location = useLocation();
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Paso los parámetros de consulta de la URL
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get("title") || "";
    const author = searchParams.get("author") || "";
    const tematica = searchParams.get("tematica") || "";

   //solicito la informacion al servidor
    service
      .get(`/api/busqueda?title=${title}&author=${author}&tematica=${tematica}`)
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.error("Error de búsqueda", error);
      });
  }, [location.search]);

  return (
    <div>
      <h3>Resultados de Búsqueda</h3>
      <ul>
        {results.map((book) => (
          <li key={book._id}>
            <Link to={`/coleccion/${book._id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resultado;
