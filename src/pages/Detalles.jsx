import React, { useEffect, useState, useContext } from "react";
import service from "../service/service.config";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Detalles() {
  const { id, commentId } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [comments, setComments] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [newComment, setNewComment] = useState("");
  const [deleteComentario, setDeleteComentario] = useState({});
  const { activeUserId } = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get(`/coleccion/${id}`);
      console.log(response.data);
      setBook(response.data.book);

      setComments(response.data.comments); //comentarios
      setUserRole(response.data.userRole);
      console.log(userRole);
    } catch (error) {
      console.error("Error con el libro", error);
    }
  };

  //agregar comentario
  const agregarComentario = async () => {
    try {
      const nuevoComentario = newComment;
      console.log(nuevoComentario);
      await service.post(`/coleccion/${id}`, { nuevoComentario });

      setNewComment("");
      getData();
    } catch (error) {
      console.error("Error al agregar comentario", error);
    }
  };
  console.log(comments);

  //borrar comentario
  const borrarComentario = async (commentId) => {
    
    
    try {
      await service.delete(`/comentarios/${commentId}` );
    
      getData(); // los comentarios sin el elimanado
    } catch (error) {
      console.error("Error al borrar", error);
    }
  };

  const borrarLibro = async () => {
    try {
      await service.delete(`/borrar-libro/${id}`);
      navigate("/coleccion");
    } catch (error) {
      console.error("Error al borrar el libro", error);
    }
  };

  if (book === null) {
    return <p>buscando libro</p>;
  }

  return (
    <div>
      <h3>Detalles del Libro</h3>
      <p>Título: {book.title}</p>
      <p>Descripción: {book.description}</p>
      <p>Autor: {book.author}</p>
      <p>Temática: {book.tematica}</p>
      <p>
        Prestado a: {book.isBorrowed ? book.prestamo.username : "Disponible"}
      </p>

      <div>
        <input
          type="text"
          placeholder="Escribe tu comentario"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />

        <button onClick={agregarComentario}>Agregar Comentario</button>
      </div>

      <div>
        <h4>Comentarios</h4>

        {comments.map((comments) => (
          <div key={comments._id}>
            <p>Autor: {comments.autor.username}</p>
            <p>Contenido: {comments.contenido}</p>
            {userRole === "admin" ? (
              <button onClick={() => borrarComentario(comments._id)}>
                Borrar Comentario
              </button>
            ) : (
              comments.autor._id === activeUserId && (
                <button onClick={() => borrarComentario(comments._id)}>
                  Borrar Comentario
                </button>
              )
            )}
            <div>
              {userRole === "admin" && (
                <>
                  <button onClick={() => prestarLibro(book._id)}>
                    Prestamo
                  </button>
                  <button onClick={() => devolverLibro(book._id)}>
                    Devuelto
                  </button>
                  <button onClick={borrarLibro}>Borrar Libro</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detalles;
