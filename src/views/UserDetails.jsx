import React from 'react';
import { useNavigate } from "react-router-dom";

// TODO: Agregar detalles del perfil

const UserDetails = () => {
	const navigate = useNavigate();

	const goToEditProfile = () => {
		navigate('/edit-user')
	}

	return (
		<div>
			<h1>Detalles Perfil</h1>
			<div>
				Detalles del perfil
			</div>
			<button type='button' onClick={goToEditProfile}>Editar Perfil</button>
		</div>
	);
};

export default UserDetails;