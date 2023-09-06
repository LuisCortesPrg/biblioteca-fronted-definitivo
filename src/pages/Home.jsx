import React, { useEffect, useState } from 'react';
import service from '../service/service.config';

function Home() {
  const [username, setUsername] = useState('');

  useEffect(() => {
   
    service.get('/home') // lo busco aqui xq en teoria es cuando se confirma con el token
      .then((response) => { console.log(response.data)
        setUsername(response.data.userData.username); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Bienvenido a la Biblioteca</h1>
      <h3>{username}</h3>
    </div>
  );
}

export default Home;
