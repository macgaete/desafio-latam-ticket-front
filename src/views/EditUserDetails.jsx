import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from "react-router-dom";
import CoolButton from '../components/CoolButton';
import CenterDiv from '../components/CenterDiv';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const EditUserDetails = () => {
  const { user, userCtxSetOrganizer, userCtxSetGuest } = useUser();
  
  const [name, setName] = useState(user.given_name);
  const [role, setRole] = useState(user.isOrganizer ? 'admin' : 'invitado');

  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRoleChange = (event) => {
    const { value } = event.target;
    setRole(value);
  };
  
    const handleReturn = () => {
      navigate('/user-details')
    }

	const handleEdit = () => {
    if(role === 'admin' && !user.isOrganizer){ // Si eligió admin y no es actualmente admin
      userCtxSetOrganizer(user.userObj);
    } else if (role === 'invitado' && user.isOrganizer) { // Si eligió invitado y no es actualmente invitado
      userCtxSetGuest(user.userObj);
    }
    handleReturn();
	}

  return (
    <CenterDiv>
      <PageHeader h1='Editar Perfil' h4={`Sesión de ${ user.userObj.name }`} />
      <Card>
        <form>
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
              id='admin'
              name='role'
              value='admin'
              checked={role === 'admin'}
              onChange={handleRoleChange}
            />
            <label htmlFor='admin'>Organizador</label>
          </div>
					<CoolButton text={'Guardar'} onClickFunction={handleEdit} />
          <CoolButton text={'Cancelar'} onClickFunction={handleReturn} />
        </form>
      </Card>
    </CenterDiv>
  );
};

export default EditUserDetails;
