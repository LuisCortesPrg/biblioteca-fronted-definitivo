import React from "react";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../service/service.config";
import { AuthContext } from "../context/auth.context";

function EditarLibro() {
  const params = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [tematica, setTematica] = useState("");

  const { activeUserId, activeUserRole } = useContext(AuthContext);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleTematicaChange = (e) => setTematica(e.target.value);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get(`/book/editarlibro/${params.id}`);
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setDescription(response.data.description);
      setTematica(response.data.tematica);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await service.put(`/book/editarlibro/${params.id}`, {
        title,
        author,
        description,
        tematica,
      });

      navigate(`/coleccion/${params.id}`);
    } catch (error) {
      console.log(error);
      navigate("/coleccion");
    }
  };

  return (
    <div className="container">
      {activeUserRole === "admin" ? (
        <>
          <h3>Editar Libro</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Título
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                onChange={handleTitleChange}
                value={title}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Autor
              </label>
              <input
                type="text"
                className="form-control"
                id="author"
                name="author"
                onChange={handleAuthorChange}
                value={author}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Descripción
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                onChange={handleDescriptionChange}
                value={description}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="tematica" className="form-label">
                Temática
              </label>
              <select
                className="form-select"
                id="tematica"
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

            <button type="submit" className="btn btn-primary">
              Editar
            </button>
          </form>
        </>
      ) : (
        <p>Busque al administrador para realizar esta función</p>
      )}
    </div>
  );
}

export default EditarLibro;
