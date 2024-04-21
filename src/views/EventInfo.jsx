import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import PageHeader from "../components/PageHeader";
import EventList from '../assets/eventPlaceholder.json';
import CenterDiv from '../components/CenterDiv';
import CoolButton from "../components/CoolButton";
import FormContainer from "../components/FormContainer";
import EventContainer from "../components/EventContainer";

// TODO: Diferenciar vista según organizador e invitado
const EventInfo = () => {
    const { eventID } = useParams();
    const navigate = useNavigate();

    const eventObj = EventList.eventList.find(event => event.eventID === eventID);

    if (!eventObj) {
        return (
            <PageHeader h1='Evento no encontrado!' />
        );
    }

    const handleSend = () => {
        navigate(`/send-event/${eventID}`)
    }

    return (
        <>
            <PageHeader h1={eventObj.eventName} />
            <CenterDiv>
                <>
                    <p><strong>Fecha:</strong> {eventObj.eventDate}</p>
                    <p><strong>Horario:</strong> {eventObj.eventTimeStart} - {eventObj.eventTimeEnd}</p>
                    <p><strong>Lugar:</strong> {eventObj.eventLocation}</p>
                    <p><strong>Tickets enviados:</strong> {eventObj.eventTicketsSent}/{eventObj.eventTicketsTotal}</p>
                </>
                <CoolButton onClickFunction={handleSend} text={'Enviar'}/>
            </CenterDiv>
        </>
    );
};

export default EventInfo;
