# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh







<strong>Project Name</strong>
Foro-teca

<strong>Description</strong>
La mejor herramienta para averiguar cual es tu próximo libro a leer. Requiere estar registrado para su uso. Se accede a las diferentes secciones por enlaces en la cabecera de la web.
Hay 3 modelos: usuario, comentario y libros.
Los usuarios pueden realizar funciones como añadir sus comentarios,editar su perfil y borrar comentarios.El administrador será el encargado de añadir y editar libros, aparte controlara el flujo de comentarios pudiendo eliminar todos los que necesite.
La relación está establecida mayormente entre las libros y comentarios.

<strong>Technologies used</strong>
Realizando proyecto final de Bootcamp con HTML, CSS, JavaScript, NodeJS,
Express, MongoDB, React, Postman y Axios.

<strong>Estructura del cliente</strong>
404 - Como usuario, quiero ver una buena página 404 cuando voy a una página que no existe para saber que fue mi culpa
500 - Como usuario, quiero ver una buena página de error cuando el súper equipo la arruina para que sepa que no es mi culpa
homepage - Como usuario, quiero poder acceder a la página de inicio para ver de qué se trata la aplicación e iniciar sesión y registrarme
registrarse - Como usuario quiero registrarme en la página web para poder ver todos los libros y la opinion de los demas usuarios
login - Como usuario, quiero poder iniciar sesión en la página web para poder volver a mi cuenta
logout - Como usuario, quiero poder cerrar sesión en la página web para asegurarme de que nadie acceda a mi cuenta.
lista de libro - Como usuario quiero ver todos los libros sobre los que hay opiniones

<strong>Rutas de clientes</strong>

<table>
  <tr>

<td><strong>Method</strong></td>

<td><strong>url</strong></td>

<td><strong>params</strong></td>

<td><strong>body</strong></td>

<td><strong>description</strong></td>

  </tr>

   <tr>

<td>get</td>

<td>/coleccion</td>

<td></td>

<td></td>

<td>todos los libros</td>

  </tr>

  
   <tr>

<td>post</td>

<td>/añadir</td>

<td></td>

<td>nombre, autor, tematica</td>

<td>nuevo libro</td>

  </tr>

  
   <tr>

<td>get</td>

<td>/coleccion/:bookId</td>

<td>bookId</td>

<td></td>

<td>detalles libro</td>

  </tr>

  
   <tr>

<td>post</td>

<td>/coleccion/:bookId</td>

<td>bookId</td>

<td>contenido</td>

<td>agregar comentarios</td>

  </tr>

  
   <tr>

<td>delete</td>

<td>/coleccion/:comentarioId</td>

<td>comentarioId</td>

<td></td>

<td>usuario borra comentario</td>

  </tr>

  
   <tr>

<td>get</td>

<td>/busqueda</td>

<td></td>

<td></td>

<td>buscar libro</td>

  </tr>

  
   <tr>

<td>delete</td>

<td>/coleccion/:bookId</td>

<td>bookId</td>

<td></td>

<td>borra libro</td>

  </tr>

  
   <tr>

<td>patch</td>

<td>/perfil</td>

<td></td>

<td>img</td>

<td>editar imagen</td>

  </tr>

  
   <tr>

<td>post</td>

<td>‘/auth/signup’</td>

<td></td>

<td>Username, email, password</td>

<td>registro</td>

  </tr>

  
   <tr>

<td>post</td>

<td>‘/auth/login’</td>

<td></td>

<td>email, password</td>

<td>validacion de credenciales</td>

  </tr>

  
   <tr>

<td>get</td>

<td>‘/auth/verify’</td>

<td></td>

<td></td>

<td>verificacion si el usuario esta online</td>

  </tr>

</table>

<strong>Servicios</strong>
<strong>Servicio de autenticación</strong>

auth.login(usuario)
auth.signup(usuario)
auth.verify()

<strong>API externa</strong>

Axios


<strong>Contexto</strong>
auth.context
theme.context
