import React from 'react';
import Event from './Event';
import './EventList.css';
import { useSelector } from 'react-redux';

function EventList() {
  const eventsList = useSelector(state => state);
  return(
    <div className="EventList">
      {eventsList.map((event, index) => {
        return <Event key={index} name={`${event.fName} ${event.sName}`} email={event.email} date={event.date} index={index} />
      })
    } 
    </div>
  );

}

export default EventList;