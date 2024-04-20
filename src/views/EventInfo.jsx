import React from "react";
import { useParams } from "react-router-dom";

const EventInfo = () => {
    const { eventID } = useParams();

    // TODO: Render dinámico luego de consultar info de evento según ID

    return (
        <div>
            <h1>Event {eventID}</h1>
            <h4>Sistema de Tickets</h4>
        </div>
    );
};

export default EventInfo;