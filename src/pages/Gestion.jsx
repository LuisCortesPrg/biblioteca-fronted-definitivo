import React, { useEffect, useState } from "react";
import service from "../service/service.config";
import { Link } from "react-router-dom";

function Gestion() {
  const [prestados, setPrestados] = useState([]);

  useEffect(() => {
    getPrestados();
  }, []);

  const getPrestados = async () => {
    try {
      const response = await service.get("/coleccion");
      setPrestados(response.data);
    } catch (error) {
      console.error("Error en prestados", error);
    }
  };

  const devolverLibro = async (bookId) => {
    try {
      await service.put(`/coleccion/${bookId}`);
      getPrestados();
    } catch (error) {
      console.error("Error al devolver", error);
    }
  };

  const borrarLibro = async (bookId) => {
    try {
      await service.delete(`/coleccion/${bookId}`);
      getPrestados();
    } catch (error) {
      console.error("Error al borrar el libro:", error);
    }
  };

  return (
    <div>
      <h3>Lista de Libros Prestados</h3>
      <ul>
        {prestados.map((book) => (
          <li key={book._id}>
            <Link to={`/coleccion/${book._id}`}>{book.title}</Link>
            <button onClick={() => devolverLibro(book._id)}>Devolver</button>
            <button onClick={() => borrarLibro(book._id)}>Borrar Libro</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gestion;
