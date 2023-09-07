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
    <div className="container mt-4">
      <h3>Lista de Libros</h3>
      <ul className="list-group">
        {books.map((book) => (
          <li className="list-group-item" key={book._id}>
            <Link to={`/coleccion/${book._id}`} className="text-decoration-none text-dark">
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Coleccion;