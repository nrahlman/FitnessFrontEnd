import React, { useState } from 'react';
import { PatchActivities } from '../API/activities';

const PatchActivities = ({ name, description }) => {
  const [name, setName] = useState(currentActivity.name);
  const [description, setDescription] = useState(currentActivity.description);


  const handleSubmit = async (e) => {
    e.preventDefault();
    await PatchActivities(name, description);
    onPostUpdated(index);
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

export default PatchActivities;