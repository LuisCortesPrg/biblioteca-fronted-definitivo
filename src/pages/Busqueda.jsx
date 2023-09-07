import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Busqueda() {
const navigate = useNavigate();
const [ queryInput, setQueryInput ] = useState("")
  
  
 

  const buscarLibro = async (event) => {
setQueryInput(event.target.value)
    
    try {
      const response= await service.post("/busqueda",{title, author, tematica} ) 

      
        console.log(response)

        
      
    } catch (error) {
      console.error("Error al añadir el libro:", error);
    }
    navigate("/resultado")}

  

  const handleInputName = (e) => {
    
    
  };
  const handleInputAuthor = (e) => {
    
   
  };
  const handleInputTematica = (e) => {
    
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
