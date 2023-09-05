import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Busqueda() {

  
  const navigate = useNavigate();
  const [apartados, setApartados] = useState({
    title: "",
    author: "",
    tematica: "",
  });

  const buscarLibro = async () => {
    try {
      const response= await service.post("/anadir",{title, author, tematica} ) 

      
        console.log(response)

        
      
    } catch (error) {
      console.error("Error al añadir el libro:", error);
    }
    navigate("/resultado")}

  

  const handleInputName = (e) => {
    const { name, value } = e.target;
    setApartados({
      ...setApartados,
      [name]: value,
    });
  };
  const handleInputAuthor = (e) => {
    const { author, value } = e.target;
    setApartados({
      ...setApartados,
      [author]: value,
    });
  };
  const handleInputTematica = (e) => {
    const { tematica, value } = e.target;
    setApartados({
      ...setApartados,
      [tematica]: value,
    });
  };

  
  
// Construir la URL de búsqueda
  const handleSearch = () => {    
    const searchParams = new URLSearchParams(apartados);
    const searchUrl = `/resultado?${searchParams.toString()}`;
    navigate(searchUrl);
  };

  return (
    <div>
      <h3>Búsqueda de Libros</h3>
      <form onSubmit={buscarLibro}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            value={apartados.title}
            onChange={handleInputName}
          />
        </div>
        <div>
          <label htmlFor="author">Autor:</label>
          <input
            type="text"
            name="author"
            value={apartados.author}
            onChange={handleInputAuthor}
          />
        </div>
        <div>
          <label htmlFor="tematica">Tematica:</label>
          <select
            type="text"
            name="tematica"
            value={apartados.tematica}
            onChange={handleInputTematica}
          />
        </div>
        <button type="button" onClick={handleSearch}>
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Busqueda;
