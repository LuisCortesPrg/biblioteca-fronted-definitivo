import React, { useState, useContext } from "react";
import service from "../service/service.config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Añadir() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [tematica, setTematica] = useState("Amoroso");
  const navigate = useNavigate();

  const { activeUserRole } = useContext(AuthContext);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleTematicaChange = (e) => setTematica(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await service.post("/book/anadir", {
        title,
        description,
        author,
        tematica,
      });

      console.log(response);
    } catch (error) {
      console.error("Error al añadir el libro:", error);
    }
    navigate("/coleccion");
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Añadir Libro</h3>

      {activeUserRole === "admin" ? (
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label className="form-label">Título:</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción:</label>
            <textarea
              className="form-control"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Autor:</label>
            <input
              type="text"
              className="form-control"
              value={author}
              onChange={handleAuthorChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Temática:</label>
            <select
              className="form-select"
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
          <button className="btn btn-primary" type="submit">
            Añadir Libro
          </button>
        </form>
      ) : (
        <p className="text-danger">Por favor, consulte con el administrador.</p>
      )}
    </div>
  );
}

export default Añadir;