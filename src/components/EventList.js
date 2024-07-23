import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';

function EventList() {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvent() {
      try {
        const response = await axios.get('https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task');
        console.log('Fetched event:', response.data);
        console.log(response.data) 
        setEvent(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchEvent();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="event-list">
      {event ? <EventCard event={event} /> : <div>No events available</div>}
    </div>
  );
}

export default EventList;
