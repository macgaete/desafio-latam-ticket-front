import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import EventList from '../assets/eventPlaceholder.json';
import CenterDiv from '../components/CenterDiv';
import EventSummaryCard from "../components/EventSummaryCard";
import EventContainer from "../components/EventContainer";
import FormContainer from "../components/FormContainer";
import InputWithError from "../components/InputWithError";
import CoolButton from "../components/CoolButton";

const SendEvent = () => {
    const [inviteList, setInviteList] = useState('')
    const [inviteListError, setInviteListError] = useState('')
    const { eventID } = useParams();
    const navigate = useNavigate();

    const eventObj = EventList.eventList.find(event => event.eventID === eventID);

    // TODO: Render dinámico luego de consultar info de evento según ID del Backend

    if (!eventObj) {
        return (
            <PageHeader h1='Evento no encontrado!' />
        );
    }

    const errorList = {
        inviteListEmpty : 'La lista no puede estar vacía'
    }

    const handleInviteListChange = (event) => {
        const newInviteList = event.target.value;
        setInviteList(newInviteList)

        const isEmpty = !validateField(newInviteList);
        
        if(isEmpty){
            setInviteListError(errorList.inviteListEmpty)
        } else {
            setInviteListError('')
        }
    }

    const handleSend = () => {
        const isValidField = validateField(inviteList)

        if(isValidField){
            setInviteListError('')
            console.log('Canjeando')
            console.log('>>> PLACEHOLDER: Implementar lógica')
            navigate('/')
        } else {
            setInviteListError(errorList.inviteListEmpty)
        }
    }

    const validateField = (value) => {
        // No vacío
        return value.trim() !== '';
    };

    return (
        <>
            <CenterDiv>
                <PageHeader h1={`Enviar evento "${eventObj.eventName}"`} h4='Sistema de Tickets' />
                <FormContainer>
                    <>
                        <p><strong>Fecha:</strong> {eventObj.eventDate}</p>
                        <p><strong>Horario:</strong> {eventObj.eventTimeStart} - {eventObj.eventTimeEnd}</p>
                        <p><strong>Lugar:</strong> {eventObj.eventLocation}</p>
                        <p><strong>Tickets enviados:</strong> {eventObj.eventTicketsSent}/{eventObj.eventTicketsTotal}</p>
                    </>
                    <InputWithError
                        type='text'
                        label='Ingresa lista de invitados'
                        onChange={handleInviteListChange}
                        value={inviteList}
                        error={inviteListError}
                    />
                    <CoolButton text='Enviar' onClickFunction={handleSend} />
                </FormContainer>
            </CenterDiv>
        </>
    );
};

export default SendEvent;