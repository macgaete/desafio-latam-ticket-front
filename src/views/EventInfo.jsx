import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import PageHeader from "../components/PageHeader";
import EventList from '../assets/eventPlaceholder.json';
import CenterDiv from '../components/CenterDiv';

// TODO: Diferenciar vista según organizador e invitado
const EventInfo = () => {
    const { eventID } = useParams();

    const eventObj = EventList.eventList.find(event => event.eventID === eventID);

    if (!eventObj) {
        return (
            <PageHeader h1='Evento no encontrado!' />
        );
    }

    return (
        <CenterDiv>
            <PageHeader h1={eventObj.eventName} />
            <div>
                <p><strong>Fecha:</strong> {eventObj.eventDate}</p>
                <p><strong>Horario:</strong> {eventObj.eventTimeStart} - {eventObj.eventTimeEnd}</p>
                <p><strong>Lugar:</strong> {eventObj.eventLocation}</p>
                <p><strong>Tickets enviados:</strong> {eventObj.eventTicketsSent}/{eventObj.eventTicketsTotal}</p>
            </div>
        </CenterDiv>
    );
};

export default EventInfo;
