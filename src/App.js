// src/App.js
import React, { useState, useEffect } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs');
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (newJob) => {
    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob),
      });
      if (!response.ok) {
        throw new Error('Failed to submit job');
      }
      const data = await response.json();
      setJobs([...jobs, data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Maintenance Management App</h1>
      <JobForm onSubmit={handleSubmit} />
      <JobList jobs={jobs} />
    </div>
  );
};

export default App;
