import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import service from "../service/service.config";

function Busqueda() {
  const navigate = useNavigate();
  const [filterArrTitle, setFilterArrTitle] = useState([]);
  const [queryInput, setQueryInput] = useState("");
  
  const buscarLibro = async (event) => {
    console.log(event.target.value);
    setQueryInput(event.target.value);

    try {
      const response = await service.get("/book/buscarlibro");
      console.log(response.data);

      setFilterArrTitle(response.data.filter((eachBook) => {
        if (eachBook.title.includes(queryInput) === true) {
          return true;
        } else {
          return false;
        }
      })) 


      console.log(filterArrTitle);
    } catch (error) {
      console.error("Error al añadir el libro:", error);
    }
  };

  return (
    <div>
      <h3>Búsqueda de Libros</h3>
      <form>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            value={queryInput}
            onChange={() => setQueryInput(event.target.value)}
          />
        </div>

        <button type="button" onClick={buscarLibro}>
          Buscar
        </button>
      </form>

      <br />
      <div>
        {filterArrTitle.map((book) => (
          <li className="listas" key={book._id}>
            <Link className="libros" to={`/coleccion/${book._id}`}>
              {book.title}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Busqueda;
