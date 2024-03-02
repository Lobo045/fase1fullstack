import React, { useState } from 'react';
import axios from 'axios';

const MyFormComponent = () => {
  const generateUniqueId = () => {
    // Generate a unique ID using a random number
    return Math.floor(Math.random() * 1000000); // Change 1000000 to any maximum value you desire
  };

  const [formData, setFormData] = useState({
    id: generateUniqueId(), // Generate a unique numeric ID
    project_name: '',
    prject_description: '',
    person_chrage: '',
    client_name: '',
    done: false,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/projects', formData);
      console.log(response.data);
      // Optionally, reset the form after successful submission
      setFormData({
        id: generateUniqueId(), // Generate a new unique numeric ID
        project_name: '',
        prject_description: '',
        person_chrage: '',
        client_name: '',
        done: false,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Project Name:
        <input type="text" name="project_name" value={formData.project_name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="prject_description" value={formData.prject_description} onChange={handleChange} />
      </label>
      <br />
      <label>
        Person in Charge:
        <input type="text" name="person_chrage" value={formData.person_chrage} onChange={handleChange} />
      </label>
      <br />
      <label>
        Client Name:
        <input type="text" name="client_name" value={formData.client_name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Is the project done?
        <input type="checkbox" name="done" checked={formData.done} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormComponent;