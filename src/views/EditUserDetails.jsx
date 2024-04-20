import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from "react-router-dom";
import CoolButton from '../components/CoolButton';

// TODO: Implementar validaciones

const EditUserDetails = () => {
  const { user, userCtxSetOrganizer, userCtxSetGuest } = useUser();
  
  const [name, setName] = useState(user.given_name);
  const [role, setRole] = useState(user.isOrganizer ? 'organizador' : 'invitado');

  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRoleChange = (event) => {
    const { value } = event.target;
    setRole(value);
  };

  // TODO: Arreglar función
	const handleEdit = () => {
    if(role === 'organizador' && !user.isOrganizer){ // Si eligió organizador y no es actualmente organizador
      userCtxSetOrganizer(user.userObj);
    } else if (role === 'invitado' && user.isOrganizer) { // Si eligió invitado y no es actualmente invitado
      userCtxSetGuest(user.userObj);
    }
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
					<CoolButton text={'Guardar'} onClickFunction={handleEdit} />
        </form>
      </div>
    </div>
  );
};

export default EditUserDetails;
