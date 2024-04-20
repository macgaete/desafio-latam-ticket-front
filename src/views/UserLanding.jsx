import React from "react";
import { useNavigate } from "react-router-dom"
import EventSummaryCard from "../components/EventSummaryCard";
import { useUser } from '../contexts/UserContext.jsx'
import CoolButton from "../components/CoolButton.jsx";
import EventContainer from "../components/EventContainer.jsx";
import PageHeader from "../components/PageHeader.jsx";

// Esto representa una respuesta de la API por ahora
import EventList from "../assets/eventPlaceholder.json"

// TODO: Obtener datos de BBDD

const UserLanding = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    const handleNewEvent = () => {
        navigate('/create-event')
    }

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