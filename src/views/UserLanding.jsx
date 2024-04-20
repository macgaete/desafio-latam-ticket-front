import React from "react";
import { useNavigate } from "react-router-dom"
import EventSummaryCard from "../components/EventSummaryCard";
import { useUser } from '../contexts/UserContext.jsx'
import CoolButton from "../components/CoolButton.jsx";

// TODO: Obtener datos de BBDD
// TODO: Generar contenido y cantidad de cartas dinámicamente según data de BBDD

const UserLanding = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    const handleNewEvent = () => {
        navigate('/create-event')
    }

    return (
        <div>
            <h1>Hola { user.userObj.name }!</h1>
            <h4>Próximos eventos</h4>
            <div>
                <EventSummaryCard 
                    eventName='FIESTA INAUGURACIÓN CONMEBOL'
                    eventTimeStart='16:00'
                    eventTimeEnd='21:00'
                    eventLocation='CLUB HIPICO DE SANTIAGO'
                    eventDate='20 MAYO 2024'
                    eventTicketsSent='32'
                    eventTicketsTotal='100'
                    eventID='1'
                />
                <EventSummaryCard 
                    eventName='FIESTA SPONSORS CONMEBOL'
                    eventTimeStart='17:00'
                    eventTimeEnd='23:00'
                    eventLocation='CENTRO EVENTOS CASA PIEDRA'
                    eventDate='23 MAYO 2024'
                    eventTicketsSent='167'
                    eventTicketsTotal='200'
                    eventID='2'
                />
            </div>
            <div>
                { user.isOrganizer && <CoolButton text={'Crear Evento'} onClickFunction={handleNewEvent} />}
            </div>
        </div>
    );
};

export default UserLanding;