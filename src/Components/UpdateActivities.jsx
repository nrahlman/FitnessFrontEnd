import React, { useState } from 'react';
import { PatchActivities } from '../API/activities';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateActivities = ({ token }) => {
  const navigate=useNavigate()
  const {Id}= useParams()
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    await PatchActivities(Id, token, name, description);
    navigate("/activities");
  };

  return (
    <div className="update-post">
      <h2>Update Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default UpdateActivities;