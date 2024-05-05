import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import PageHeader from "../components/PageHeader";
import CenterDiv from '../components/CenterDiv';
import CoolButton from "../components/CoolButton";
import ApiConfig from "../constants/BackendApiConfig.json"

const EventInfo = () => {
    const { eventID } = useParams();
    const [eventObj, setEventObj] = useState({});
    const { user } = useUser();
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


    const handleSend = () => {
        navigate(`/send-event/${eventID}`)
    }

    return (
        <>
            <PageHeader h1={eventObj.name} />
            <CenterDiv>
                <>
                    <p><strong>Fecha:</strong> {eventObj.date}</p>
                    <p><strong>Lugar:</strong> {eventObj.location}</p>
                </>
                <CoolButton onClickFunction={handleSend} text={'Enviar'}/>
            </CenterDiv>
        </>
    );
};

export default EventInfo;
