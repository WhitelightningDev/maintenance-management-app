import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const JobForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [priority, setPriority] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !location || !priority) {
      setError('Please fill out all fields');
      return;
    }
    onSubmit({ description, location, priority });
    setDescription('');
    setLocation('');
    setPriority('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobForm;
