import React from "react";
import { useParams } from "react-router-dom";

const SendEvent = () => {
    const { eventID } = useParams();

    // TODO: Render dinámico luego de consultar info de evento según ID
    // TODO: try-catch validando si el evento existe para el usuario logueado

    return (
        <div>
            <h1>Send Event {eventID}</h1>
            <h4>Sistema de Tickets</h4>
        </div>
    );
};

export default SendEvent;