import React from 'react';

const deletedb = ({ project, onDelete }) => {
  return (
    <li>
      {project.name}
      <button onClick={() => onDelete(project.id)}>Delete</button>
    </li>
  );
};

export default deletedb;