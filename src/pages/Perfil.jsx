import { useEffect, useState } from "react";
import service from "../service/service.config";


function Perfil() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    service
      .get("/perfil") // lo busco aqui xq en teoria es cuando se confirma con el token
      .then((response) => {
        console.log(response.data);
        setUsername(response.data.userData.username);
        setEmail(response.data.userData.email);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <div>
      <h1>Bienvenido a tu perfil</h1>
      <h3>{username}</h3>
      <h3>{email}</h3>

      

      
    </div>
  );
}

export default Perfil;
