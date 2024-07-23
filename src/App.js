// App.js
import React from 'react';
import './styles.css';
import EventList from './components/EventList';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>KonfHub Events</h1>
      </header>
      <main>
        <EventList />
      </main>
    </div>
  );
};

export default App;