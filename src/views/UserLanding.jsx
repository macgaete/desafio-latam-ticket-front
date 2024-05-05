import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import EventSummaryCard from "../components/EventSummaryCard";
import { useUser } from '../contexts/UserContext.jsx'
import CoolButton from "../components/CoolButton.jsx";
import EventContainer from "../components/EventContainer.jsx";
import PageHeader from "../components/PageHeader.jsx";
import ApiConfig from "../constants/BackendApiConfig.json"

// Esto representa una respuesta del Backend por ahora
import EventList from "../assets/eventPlaceholder.json"

const UserLanding = () => {
    // TODO: Obtener datos de Backend
    
    const { user } = useUser();
    const navigate = useNavigate();
    
    const handleNewEvent = () => {
        navigate('/create-event')
    }

    useEffect(() => {
        fetch(ApiConfig.api.url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + user.userObj.jwt
            }
        })
        .then(response => {
            if (!response.ok) {
              throw new Error('Respuesta de API no OK');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Fetch error:', error);
          });
    }, [])

    return (
        <div>
            <PageHeader h1={`Hola ${user.userObj.name}!`} h4='Próximos eventos' />
            <div className="pageHeader pageHeaderMarginBottom">
                { user.isOrganizer && <CoolButton text={'Crear Evento'} onClickFunction={handleNewEvent} />}
            </div>
            <EventContainer>
                {EventList.eventList.map(event => (
                    <EventSummaryCard
                        key={event.eventID}
                        eventName={event.eventName}
                        eventTimeStart={event.eventTimeStart}
                        eventTimeEnd={event.eventTimeEnd}
                        eventLocation={event.eventLocation}
                        eventDate={event.eventDate}
                        eventTicketsSent={event.eventTicketsSent}
                        eventTicketsTotal={event.eventTicketsTotal}
                        eventID={event.eventID}
                    />
                ))}
            </EventContainer>
        </div>
    );
};

export default UserLanding;