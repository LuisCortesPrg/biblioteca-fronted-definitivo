import React, { useState } from "react";
import service from "../service/service.config";
import { useNavigate } from "react-router-dom";


function Añadir() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [tematica, setTematica] = useState("Amoroso");
  const navigate= useNavigate()
  const [userRole, setUserRole] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleTematicaChange = (e) => setTematica(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response= await service.post("/anadir",{title, description, author, tematica} ) 




      
        console.log(response)

        
      
    } catch (error) {
      console.error("Error al añadir el libro:", error);
    }
    navigate("/coleccion")
  };

  return (
    <div>
      <h3>Añadir Libro</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div>
          <label>Autor:</label>
          <input
            type="text"
            value={author}
            onChange={handleAuthorChange}
            required
          />
        </div>
        <div>
          <label>Temática:</label>
          <select
            value={tematica}
            onChange={handleTematicaChange}
            required
          >
            <option value="Amoroso">Amoroso</option>
            <option value="Histórico">Histórico</option>
            <option value="Aventuras">Aventuras</option>
            <option value="Policial">Policial</option>
            <option value="Fantástico">Fantástico</option>
          </select>
        </div>
        
        <button className="boton" type="submit">Añadir Libro</button>
      </form>
    </div>
  );
}

export default Añadir;
