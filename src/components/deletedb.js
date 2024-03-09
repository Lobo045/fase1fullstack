import React, { useState } from 'react';

const DeleteDb = ({ project, onDelete }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    onDelete(project.id);
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <li>
      {project.project_name}
      <button onClick={handleDelete}>Delete</button>
      {showConfirmation && (
        <div>
          <p>Are you sure you want to delete {project.project_name}?</p>
          <button onClick={confirmDelete}>Yes</button>
          <button onClick={cancelDelete}>No</button>
        </div>
      )}
    </li>
  );
};

export default DeleteDb;