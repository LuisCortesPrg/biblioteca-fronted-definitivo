// Resultado.js
import React, { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
import service from "../service/service.config";

function Resultado() {
  
  const [results, setResults] = useState([]);

  useEffect(() => {
   

   //solicito la informacion 
  })

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
