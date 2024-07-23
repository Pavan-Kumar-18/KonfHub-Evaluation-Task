import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';
import EventCard from './EventCard';
import { Grid, Container, Typography } from '@mui/material';

const HomePage = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        console.log('Fetched data:', data);  // Log the fetched data
        // Check if data is an object (single event)
        if (data && typeof data === 'object' && !Array.isArray(data)) {
          setEvent(data);
        } else {
          console.error('Unexpected data format', data);
        }
      } catch (error) {
        console.error('Error fetching event', error);
      }
    };

    getData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        KonfHub Event
      </Typography>
      <Grid container spacing={2}>
        {event ? (
          <Grid item xs={12} sm={6} md={4}>
            <EventCard event={event} />
          </Grid>
        ) : (
          <Typography variant="body1" color="textSecondary">
            No event available.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default HomePage;
