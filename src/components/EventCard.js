import React from 'react';
import './style.css'; // Ensure this file contains your styles

const EventCard = ({ event }) => {
  const {
    description,
    image,
    name,
    startDate,
    endDate,
    organiserName,
    organiserEmail,
    organiserPhone,
    organiserWebsite,
    organiserImageUrl,
    organiserInfo
  } = event;

  return (
    <div className="event-card">
      <div className="event-content">
        {/* Image Side */}
        <div className="event-image">
          <img
            src={image}
            alt={name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'path/to/placeholder/image.jpg'; // Placeholder image
            }}
          />
        </div>
        {/* Text Side */}
        <div className="event-text">
          <h2>{name}</h2>
          <div
            className="event-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <p>
            <span>Starts: {startDate}</span>
            <span>Ends: {endDate}</span>
          </p>
        </div>
      </div>
      {/* Organizer Info */}
      <div className="organizer-info">
        <h3>Organizer: {organiserName}</h3>
        <img
          src={organiserImageUrl}
          alt={organiserName}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'path/to/placeholder/image.jpg'; // Placeholder image
          }}
        />
        <p>{organiserInfo}</p>
        <p>Email: <a href={`mailto:${organiserEmail}`}>{organiserEmail}</a></p>
        <p>Phone: {organiserPhone}</p>
        <p>Website: <a href={organiserWebsite} target="_blank" rel="noopener noreferrer">{organiserWebsite}</a></p>
      </div>
    </div>
  );
};

export default EventCard;
