import React, { useState } from 'react';
import CoolButton from '../components/CoolButton'
import { useNavigate } from "react-router-dom";
import FormError from '../components/FormError'
import FormContainer from '../components/FormContainer';
import InputWithError from '../components/InputWithError';
import PageHeader from '../components/PageHeader';

const NewEvent = () => {
	const [eventName, setEventName] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [sponsor, setSponsor] = useState('');
  const [project, setProject] = useState('');
  const [inviteNameList, setInviteNameList] = useState('');
  const [inviteEmailList, setInviteEmailList] = useState('');

	// Errores
	const [eventNameError, setEventNameError] = useState('');
	const [organizerError, setOrganizerError] = useState('');
	const [sponsorError, setSponsorError] = useState('');
	const [projectError, setProjectError] = useState('');
	const [inviteNameListError, setInviteNameListError] = useState('');
	const [inviteEmailListError, setInviteEmailListError] = useState('');
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	const errorList = {
    eventNameError: 'Por favor ingresa un nombre de evento.',
    organizerError: 'Por favor ingresa un nombre de organizador.',
    sponsorError: 'Por favor ingresa un nombre de patrocinador.',
    projectError: 'Por favor ingresa un nombre de proyecto.',
    inviteNameListError: 'Por favor ingresa uno o más nombres de invitados.',
    inviteEmailListError: 'Por favor ingresa uno o más correos electrónicos de invitados.'
  };

  const navigate = useNavigate();

  const handleEventNameChange = (event) => {
    const newEventName = event.target.value;
    setEventName(newEventName);

    const isValid = validateNotEmpty(newEventName);
    if (!isValid) {
        setEventNameError(errorList.eventNameError);
    } else {
        setEventNameError('');
    }
};

const handleOrganizerChange = (event) => {
    const newOrganizer = event.target.value;
    setOrganizer(newOrganizer);

    const isValid = validateNotEmpty(newOrganizer);
    if (!isValid) {
        setOrganizerError(errorList.organizerError);
    } else {
        setOrganizerError('');
    }
};

const handleSponsorChange = (event) => {
    const newSponsor = event.target.value;
    setSponsor(newSponsor);

    const isValid = validateNotEmpty(newSponsor);
    if (!isValid) {
        setSponsorError(errorList.sponsorError);
    } else {
        setSponsorError('');
    }
};

const handleProjectChange = (event) => {
    const newProject = event.target.value;
    setProject(newProject);

    const isValid = validateNotEmpty(newProject);
    if (!isValid) {
        setProjectError(errorList.projectError);
    } else {
        setProjectError('');
    }
};

const handleInviteNameListChange = (event) => {
    const newInviteNameList = event.target.value;
    setInviteNameList(newInviteNameList);

    const isValid = validateNotEmpty(newInviteNameList);
    if (!isValid) {
        setInviteNameListError(errorList.inviteNameListError);
    } else {
        setInviteNameListError('');
    }
};

const handleInviteEmailListChange = (event) => {
    const newInviteEmailList = event.target.value;
    setInviteEmailList(newInviteEmailList);

    const isValid = validateNotEmpty(newInviteEmailList);
    if (!isValid) {
        setInviteEmailListError(errorList.inviteEmailListError);
    } else {
        setInviteEmailListError('');
    }
}

const handleCreate = () => {
  const isValidEventName = validateNotEmpty(eventName);
  if (!isValidEventName) {
    setEventNameError(errorList.eventNameError);
  } else {
    setEventNameError('');
  }

  const isValidOrganizer = validateNotEmpty(organizer);
  if (!isValidOrganizer) {
    setOrganizerError(errorList.organizerError);
  } else {
    setOrganizerError('');
  }

  const isValidSponsor = validateNotEmpty(sponsor);
  if (!isValidSponsor) {
    setSponsorError(errorList.sponsorError);
  } else {
    setSponsorError('');
  }

  const isValidProject = validateNotEmpty(project);
  if (!isValidProject) {
    setProjectError(errorList.projectError);
  } else {
    setProjectError('');
  }

  const isValidInviteNameList = validateNotEmpty(inviteNameList);
  if (!isValidInviteNameList) {
    setInviteNameListError(errorList.inviteNameListError);
  } else {
    setInviteNameListError('');
  }

  const isValidInviteEmailList = validateNotEmpty(inviteEmailList);
  if (!isValidInviteEmailList) {
    setInviteEmailListError(errorList.inviteEmailListError);
  } else {
    setInviteEmailListError('');
  }

  if (isValidEventName && isValidOrganizer && isValidSponsor && isValidProject && isValidInviteNameList && isValidInviteEmailList) {
    setShowErrorMessage(false);

    // TODO: Implementar lógica para crear evento
    console.log('>>> PLACEHOLDER ', eventName, organizer, sponsor, project, inviteNameList, inviteEmailList);
		navigate('/user-landing')
  } else {
    setShowErrorMessage(true);
  }
};


	const validateNotEmpty = (field) => {
		return field.trim() != '';
	}

	return (
		<div>
      <PageHeader h1='Crear Evento' />
      <FormContainer>
        <InputWithError
          type='text'
          label='Nombre Evento'
          id='eventName'
          value={eventName}
          onChange={handleEventNameChange}
          error={eventNameError}
        />
        <InputWithError 
          type='text'
          label='Mandante Organizador'
          id='organizer'
          value={organizer}
          onChange={handleOrganizerChange}
          error={organizerError}
        />
        <InputWithError 
          type='text'
          label='Sponsor'
          id='sponsor'
          value={sponsor}
          onChange={handleSponsorChange}
          error={sponsorError}
        />
        <InputWithError 
          type='text'
          label='Proyecto'
          id='project'
          value={project}
          onChange={handleProjectChange}
          error={projectError}
        />
        <InputWithError 
          type='textarea'
          label='Nombre(s) Invitado(s)'
          id='inviteNameList'
          value={inviteNameList}
          onChange={handleInviteNameListChange}
          error={inviteNameListError}
        />
        <InputWithError 
          type='text'
          label='Correo(s) Invitado(s)'
          id='inviteEmailList'
          value={inviteEmailList}
          onChange={handleInviteEmailListChange}
          error={inviteEmailListError}
        />
        {showErrorMessage && <FormError errorMessage={'Por favor revisa la información que ingresaste'} />}
        <div className="formGroup">
          <CoolButton text={'Guardar'} onClickFunction={handleCreate} />
        </div>
      </FormContainer>
	</div>
	);
};

export default NewEvent;