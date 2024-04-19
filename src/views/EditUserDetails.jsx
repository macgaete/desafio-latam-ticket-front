import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from "react-router-dom";

// TODO: Implementar validaciones

const EditUserDetails = () => {
  const { user } = useUser();
  
  const [name, setName] = useState(user.given_name);
  const [role, setRole] = useState('invitado');

  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

	const handleEdit = () => {
		// TODO: Implementar lógica
		console.log('TODO: Implementar lógica');
    navigate('/user-details');
	}

  return (
    <div>
      <h1>Editar Perfil</h1>
      <div>
        <form>
          <input
            type='text'
            id='name'
            value={name}
            onChange={handleNameChange}
          />
          <div>
            <input
              type='radio'
              id='invitado'
              name='role'
              value='invitado'
              checked={role === 'invitado'}
              onChange={handleRoleChange}
            />
            <label htmlFor='invitado'>Invitado</label>
          </div>
          <div>
            <input
              type='radio'
              id='organizador'
              name='role'
              value='organizador'
              checked={role === 'organizador'}
              onChange={handleRoleChange}
            />
            <label htmlFor='organizador'>Organizador</label>
          </div>
					<button type='button' onClick={handleEdit}>Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default EditUserDetails;
