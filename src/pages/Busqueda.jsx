import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import service from "../service/service.config";

function Busqueda() {
  const navigate = useNavigate();
  const [filterArrTitle, setFilterArrTitle] = useState([]);
  const [queryInput, setQueryInput] = useState("");

  const buscarLibro = async (event) => {
    setQueryInput(event.target.value);

    try {
      const response = await service.get("/book/buscarlibro");

      setFilterArrTitle(
        response.data.filter((eachBook) =>
          eachBook.title.includes(queryInput)
        )
      );
    } catch (error) {
      console.error("Error al buscar el libro:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Búsqueda de Libros</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Título:
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={queryInput}
            onChange={buscarLibro}
          />
        </div>
      </form>

      <br />
      <div>
        <ul className="list-group">
          {filterArrTitle.map((book) => (
            <li className="list-group-item" key={book._id}>
              <Link to={`/coleccion/${book._id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Busqueda;
