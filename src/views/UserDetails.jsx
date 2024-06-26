import React from 'react';
import { useNavigate } from "react-router-dom";
import { useUser } from '../contexts/UserContext';
import CoolButton from '../components/CoolButton';
import PageHeader from '../components/PageHeader';
import CenterDiv from '../components/CenterDiv'
import Card from '../components/Card'

const UserDetails = () => {
	const { user } = useUser();
	const navigate = useNavigate();

	const goToEditProfile = () => {
		navigate('/edit-user')
	}

	return (
		<>
			<PageHeader h1='Detalles Perfil' h4=''/>
			<CenterDiv>
				<Card className={'centerCard'}>
					<div>
						Hola {user.userObj?.name || 'Usuario'}
					</div>
					<div>
						Tipo de cuenta: { (user.isOrganizer ? 'Organizador' : 'Invitado') || '' }
					</div>
					<div>
						<CoolButton text={'Editar Perfil'} onClickFunction={goToEditProfile} />
					</div>
				</Card>
			</CenterDiv>
		</>
	);
};

export default UserDetails;