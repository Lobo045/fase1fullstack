import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListDB = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from your database using Axios
    axios.get('http://localhost:3001/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty array as second argument to run effect only once after initial render

  const handleDelete = (projectId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (!confirmDelete) {
      return;
    }
    // Make a DELETE request to your backend to delete the project
    axios.delete(`http://localhost:3001/projects/${projectId}`)
      .then(() => {
        // If deletion is successful, remove the project from the state
        setProjects(projects.filter(project => project.id !== projectId));
      })
      .catch(error => {
        console.error('Error deleting project:', error);
      });
  }

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.project_name}</h3>
            <p>Description: {project.prject_description}</p>
            <p>Person in Charge: {project.person_chrage}</p>
            <p>Client Name: {project.client_name}</p>
            <p>Status: {project.done ? 'Done' : 'Not Done'}</p>
            <button onClick={() => handleDelete(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDB;