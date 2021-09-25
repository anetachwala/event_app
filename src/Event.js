import './Event.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeEvent } from './actions';

function Event(props) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeEvent(props.index));
  };

  return(
    <div className="Event">
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.data}</p>
      <p className="Event_delete" onClick={handleDelete}>delete</p>
    </div>
  );
}

export default Event;