import React, { useState } from 'react';

function Main() {
    const [projectItems, setProjectItems] = useState([]);
    const [formData, setFormData] = useState({
      projectName: '',
      description: '',
      personInCharge: '',
      clientName: '',
      isDone: false
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newProjectItem = {
        id: Date.now(), // Generate a unique ID
        ...formData
      };
      setProjectItems(prevItems => [...prevItems, newProjectItem]);
      setFormData({
        projectName: '',
        description: '',
        personInCharge: '',
        clientName: '',
        isDone: false
      });
    };
  
    return (
      <main>
        <h1>Project Management</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="projectName">Project Name:</label>
          <input type="text" id="projectName" name="projectName" value={formData.projectName} onChange={handleChange} required />
          <br />
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>
          <br />
          <label htmlFor="personInCharge">Person in Charge:</label>
          <input type="text" id="personInCharge" name="personInCharge" value={formData.personInCharge} onChange={handleChange} required pattern="[a-zA-Z\s]+" title="Only letters and spaces allowed" />
          <br />
          <label htmlFor="clientName">Client Name:</label>
          <input type="text" id="clientName" name="clientName" value={formData.clientName} onChange={handleChange} required pattern="[a-zA-Z\s]+" title="Only letters and spaces allowed" />
          <br />
          <label htmlFor="isDone">Work Done:</label>
          <input type="checkbox" id="isDone" name="isDone" checked={formData.isDone} onChange={() => setFormData(prevState => ({ ...prevState, isDone: !prevState.isDone }))} />
          <br />
          <button type="submit">Add Project</button>
        </form>
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
      </main>
    );
  }

export default Main;