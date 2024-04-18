// TODO: Agregar vista de editar evento

const EventSummaryCard = ({eventName, eventTimeStart, eventTimeEnd, eventLocation, eventDate, eventTicketsSent, eventTicketsTotal}) => {  
    return (
      <div>
        <div>
          <h4>{eventName}</h4>
          <div>{eventTimeStart} - {eventTimeEnd}</div>
          <div>{eventLocation}</div>
          <div>{eventDate}</div>
        </div>
        <div>
          <button>Detalle Ticket</button>
          <div>Tickets Enviados: {eventTicketsSent}/{eventTicketsTotal}</div>
        </div>
      </div>
    );
  };
  
  export default EventSummaryCard;