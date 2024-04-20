import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import CoolButton from '../components/CoolButton';

// TODO: Implementar validaciones

const EditEvent = () => {
  const [eventName, setEventName] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [sponsor, setSponsor] = useState('');
  const [project, setProject] = useState('');
  const [inviteNameList, setInviteNameList] = useState('');
  const [inviteEmailList, setInviteEmailList] = useState('');

  const { eventID } = useParams();
  // TODO: Conseguir datos de evento desde API según ID

  const navigate = useNavigate();

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleOrganizerChange = (event) => {
    setOrganizer(event.target.value);
  }

  const handleSponsorChange = (event) => {
    setSponsor(event.target.value);
  }

  const handleProjectChange = (event) => {
    setProject(event.target.value);
  }

  const handleInviteNameListChange = (event) => {
    setInviteNameList(event.target.value);
  }

  const handleInviteEmailListChange = (event) => {
    setInviteEmailList(event.target.value);
  }

	const handleEdit = () => {
		// TODO: Implementar lógica
		console.log('TODO: Implementar lógica');
    navigate(`/event/${eventID}`);
	}

  return (
    <div>
      <h1>Editar Evento {eventID}</h1>
      <div>
        <form>
          <div>
            <label>Nombre Evento </label>
            <input
              type='text'
              id='eventName'
              value={eventName}
              onChange={handleEventNameChange}
            />
          </div>
          <div>
            <label>Mandante Organizador </label>
            <input
              type='text'
              id='organizer'
              value={organizer}
              onChange={handleOrganizerChange}
            />
          </div>
          <div>
            <label>Sponsor </label>
            <input
              type='text'
              id='sponsor'
              value={sponsor}
              onChange={handleSponsorChange}
            />
          </div>
          <div>
            <label>Proyecto </label>
            <input
              type='text'
              id='project'
              value={project}
              onChange={handleProjectChange}
            />
          </div>
          <div>
            <label>Nombre(s) Invitado(s) </label>
            <input
              type='textarea'
              id='inviteNameList'
              value={inviteNameList}
              onChange={handleInviteNameListChange}
            />
          </div>
          <div>
            <label>Correo(s) Invitado(s) </label>
            <input
              type='textarea'
              id='inviteEmailList'
              value={inviteEmailList}
              onChange={handleInviteEmailListChange}
            />
          </div>
					<CoolButton text={'Guardar'} onClickFunction={handleEdit} />
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
