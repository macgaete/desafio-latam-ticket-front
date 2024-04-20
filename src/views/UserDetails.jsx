import React from 'react';
import { useNavigate } from "react-router-dom";
import { useUser } from '../contexts/UserContext';
import CoolButton from '../components/CoolButton';

// TODO: Agregar detalles del perfil

const UserDetails = () => {
	const { user } = useUser();
	const navigate = useNavigate();

	const goToEditProfile = () => {
		navigate('/edit-user')
	}

	return (
		<div>
			<h1>Detalles Perfil</h1>
			<div>
				Hola {user.userObj?.name || 'Usuario'}
			</div>
			<div>
				Tipo de cuenta: { (user.isOrganizer ? 'Organizador' : 'Invitado') || '' }
			</div>
			<CoolButton text={'Editar Perfil'} onClickFunction={goToEditProfile} />
		</div>
	);
};

export default UserDetails;