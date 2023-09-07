import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import service from '../service/service.config';

function EditarPerfil() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const { id } = useParams();
  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await service.patch(`/user/editarperfil`, { username });

      navigate('/perfil');
    } catch (error) {
      console.log(error);
      navigate('/error');
    }
  };

  return (
    <div className="container">
      <h3 className="my-4">Editar Perfil</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            onChange={handleUsernameChange}
            value={username}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Editar
        </button>
      </form>
    </div>
  );
}

export default EditarPerfil;