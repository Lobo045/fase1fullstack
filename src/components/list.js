import React from 'react';

function ProjectList({ projectItems }) {
  return (
    <div className="itemList">
      {projectItems.map(item => (
        <div className="projectItem" key={item.id}>
          <div><strong>ID:</strong> {item.id}</div>
          <div><strong>Project Name:</strong> {item.projectName}</div>
          <div><strong>Description:</strong> {item.description}</div>
          <div><strong>Person in Charge:</strong> {item.personInCharge}</div>
          <div><strong>Client Name:</strong> {item.clientName}</div>
          <div><strong>Done:</strong> {item.isDone ? 'Yes' : 'No'}</div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;