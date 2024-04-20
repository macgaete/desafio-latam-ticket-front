import { useNavigate } from "react-router-dom";
import CoolButton from "./CoolButton";

const EventSummaryCard = ({eventName, eventTimeStart, eventTimeEnd, eventLocation, eventDate, eventTicketsSent, eventTicketsTotal, eventID}) => {
  
  const navigate = useNavigate();

  const buttonClickFunction = () => {
    navigate(`/event/${eventID}`);
  }
  
  return (
    <div>
      <div>
        <h4>{eventName}</h4>
        <div>{eventTimeStart} - {eventTimeEnd}</div>
        <div>{eventLocation}</div>
        <div>{eventDate}</div>
      </div>
      <div>
        <CoolButton text={'Detalle Evento'} onClickFunction={buttonClickFunction} />
        <div>Tickets Enviados: {eventTicketsSent}/{eventTicketsTotal}</div>
      </div>
    </div>
  );
};
  
  export default EventSummaryCard;