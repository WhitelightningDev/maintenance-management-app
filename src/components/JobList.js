import React from 'react';
import { Alert } from 'react-bootstrap';

const JobList = ({ jobs }) => {
  return (
    <div>
      <h2>Jobs List</h2>
      {jobs.length === 0 && <Alert variant="info">No jobs found</Alert>}
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <p>Description: {job.description}</p>
            <p>Location: {job.location}</p>
            <p>Priority: {job.priority}</p>
            <p>Status: {job.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
