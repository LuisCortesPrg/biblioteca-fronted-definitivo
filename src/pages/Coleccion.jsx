import React, { useEffect, useState } from "react";
import service from "../service/service.config";
import { Link } from "react-router-dom";

function Coleccion() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get("/book/coleccion");
      setBooks(response.data);
    } catch (error) {
      console.error("Error al obtener la colección:", error);
    }
  };

  return (
    <div>
      <h3>Lista de Libros</h3>
      <ul>
        {books.map((book) => (
          <li className="listas" key={book._id}>
            <Link  className="libros" to={`/coleccion/${book._id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Coleccion;
