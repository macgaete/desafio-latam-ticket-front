import { useNavigate } from "react-router-dom";
import CoolButton from "./CoolButton";

const EventSummaryCard = ({eventName, eventLocation, eventDate, eventID}) => {
  
  const navigate = useNavigate();

  const buttonClickFunction = () => {
    navigate(`/event/${eventID}`);
  }
  
  return (
    <div className="eventSummaryCard">
      <div className="eventCardContent">
        <h4>{eventName}</h4>
        <div>{eventLocation}</div>
        <div>{eventDate}</div>
      </div>
      <div className="eventCardFooter">
        <CoolButton text={'Detalle Evento'} onClickFunction={buttonClickFunction} />
      </div>
    </div>
  );
};
  
  export default EventSummaryCard;