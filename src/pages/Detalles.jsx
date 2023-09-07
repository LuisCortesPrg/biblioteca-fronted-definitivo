import React, { useEffect, useState, useContext } from "react";
import service from "../service/service.config";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

function Detalles() {
  const { id, commentId } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [comments, setComments] = useState([]);
 
  const [newComment, setNewComment] = useState("");
  const [deleteComentario, setDeleteComentario] = useState({});
  const { activeUserId, activeUserRole } = useContext(AuthContext);
  

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get(`/book/coleccion/${id}`);
      console.log(response.data);
      setBook(response.data.book);

      setComments(response.data.comments); //comentarios
      
      
    } catch (error) {
      console.error("Error con el libro", error);
    }
  };

  //agregar comentario
  const agregarComentario = async () => {
    try {
      const nuevoComentario = newComment;
      console.log(nuevoComentario);
      await service.post(`/book/coleccion/${id}`, { nuevoComentario });

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
      await service.delete(`/book/comentarios/${commentId}` );
    
      getData(); // los comentarios sin el elimanado
    } catch (error) {
      console.error("Error al borrar", error);
    }
  };

  const borrarLibro = async () => {
    try {
      await service.delete(`/book/borrar-libro/${id}`);
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
      <Link  className="libros" to={`/editarlibro/${id}`}>
        <button>Editar</button>
        </Link>
      <h3><strong>Detalles del Libro</strong></h3>
      <p><strong>Título: </strong> {book.title}</p>
      <p><strong>Descripción:</strong>  {book.description}</p>
      <p><strong>Autor:</strong>  {book.author}</p>
      <p><strong>Temática: </strong> {book.tematica}</p>
      <p>
      <strong>Prestado a: </strong> {book.isBorrowed ? book.prestamo.username : "Disponible"}
      </p>

      <div>
        <input
          type="text"
          placeholder="Escribe tu comentario"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        

        <button className="boton" onClick={agregarComentario}>Agregar Comentario</button>
      </div>
      <div>
              {activeUserRole === "admin" && (
                <>
                  {/* <button className="boton" onClick={() => prestarLibro(book._id)}>
                    Prestamo
                  </button> */}
                  {/* <button className="boton" onClick={() => devolverLibro(book._id)}>
                    Devuelto
                  </button> */}
                  <button className="cierro" onClick={borrarLibro}>Borrar Libro</button>
                </>
              )}
            </div>
      <div>
        <h4>Comentarios</h4>

        {comments.map((comments) => (
          <div key={comments._id}>
            <p><strong>Autor: </strong>{comments.autor.username}</p>
            <p><strong>Contenido:</strong> {comments.contenido}</p>
            {activeUserRole === "admin" ? (
              <button className="boton" onClick={() => borrarComentario(comments._id)}>
                Borrar Comentario
              </button>

            ) : (
              comments.autor._id === activeUserId && (
                <button className="boton" onClick={() => borrarComentario(comments._id)}>
                  Borrar Comentario
                </button>
              )
            )}
           
          </div>
        ))}
      </div>
       </div>
  );
}

export default Detalles;
