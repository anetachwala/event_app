import "./Event.css";
import { useDispatch } from "react-redux";
import { removeEvent } from "./actions";

function Event(props) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeEvent(props.index));
  };

  return (
    <div data-cy="Event" className="Event">
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.date}</p>
      <p data-cy="DeleteEvent" className="Event_delete" onClick={handleDelete}>
        delete
      </p>
    </div>
  );
}

export default Event;
