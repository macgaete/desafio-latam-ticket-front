import React, { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import CenterDiv from '../components/CenterDiv';
import EventSummaryCard from "../components/EventSummaryCard";
import EventContainer from "../components/EventContainer";
import FormContainer from "../components/FormContainer";
import InputWithError from "../components/InputWithError";
import CoolButton from "../components/CoolButton";
import ApiConfig from "../constants/BackendApiConfig.json"

const SendEvent = () => {
    const { user } = useUser();
    const [inviteList, setInviteList] = useState('')
    const [inviteListError, setInviteListError] = useState('')
    const [eventObj, setEventObj] = useState({});
    const { eventID } = useParams();
    const navigate = useNavigate();

    const getEventInfo = () => {
        fetch(ApiConfig.api.url + '/event/' + eventID, {
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
        .then(data => {
            setEventObj(data)
        })
            .catch(error => {
            console.error('Fetch error:', error);
        });
    }

    useEffect(() => {
        getEventInfo();
    }, [])

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
                <PageHeader h1={`Enviar evento "${eventObj.name}"`} h4='Sistema de Tickets' />
                <FormContainer>
                    <>
                        <p><strong>Fecha:</strong> {eventObj.date}</p>
                        <p><strong>Lugar:</strong> {eventObj.location}</p>
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