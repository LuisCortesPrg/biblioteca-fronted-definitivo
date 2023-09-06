import React from "react";
const router = require("express").Router();
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../services/service.config";

function EditarLibro() {
  const params = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [tematica, setTematica] = useState("");
  const [userRole, setUserRole] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleTematicaChange = (e) => setTematica(e.target.value);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get(`/editarlibro/${params.id}`);
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setDescription(response.data.description);
      setTematica(response.data.tematica);
      setUserRole(response.data.userRole);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
      await service.put(`/editarlibro/${params.id}`, {
        title,
        author,
        description,
        tematica,
      });

      navigate(`/coleccion/${params.id}`);
    } catch (error) {
      console.log(error);
      
    }
    navigate("/coleccion");
  };

  return (
    <div>
         {userRole === "admin" ? (
            <>
      <h3>Editar Libro</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={handleTitleChange}
          value={title}
        />

        <br />

        <label htmlFor="author">Autor</label>
        <input
          type="text"
          name="author"
          onChange={handleAuthorChange}
          value={author}
        />

        <br />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          onChange={handleDescriptionChange}
          value={description}
        />

        <br />

        <label htmlFor="tematica">Tematica</label>
        <select value={tematica} onChange={handleTematicaChange} required>
          <option value="Amoroso">Amoroso</option>
          <option value="Histórico">Histórico</option>
          <option value="Aventuras">Aventuras</option>
          <option value="Policial">Policial</option>
          <option value="Fantástico">Fantástico</option>
        </select>

        <br />

        <button type="submit">Editar</button>
      </form>
      </>
      ) : (
        <p>Busque al administrador para realizar esta función</p>
        )}

    </div>
  );
}

export default EditarLibro;
