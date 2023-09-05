import React from 'react'
import { useEffect, useState } from "react";
import service from "../service/service.config";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

function EditarPerfil() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const { id } = useParams();
  const handleUsernameChange = (e) => setUsername(e.target.value);
  useContext(AuthContext)
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await service.patch(`/editarperfil`,{username}) 
        
      
      navigate("/perfil")

      
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };







  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          onChange={handleUsernameChange}
          value={username}
        /> <button type="onSubmit">Editar</button>
      </form>

     
    </div>
  )
}

export default EditarPerfil
