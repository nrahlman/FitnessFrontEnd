import React, { useState } from 'react';
import { PostActivities } from '../API/activities';
import { useNavigate } from 'react-router-dom';
import "../Styles/Update.css";

const PostActivity = ({token, onClose}) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  return (
    <div className="update-post">
      <div className="updateHeader">
        <h2>Add Activity</h2>
        <div className="close-button" onClick={onClose}>
          X
        </div>
      </div>
      <form className='updateForm'
        onSubmit={async (e) => {
          e.preventDefault();
          await PostActivities(token, name, description);
          onClose(false); 
          navigate("/activities");
        }}
      >
        <label>Activity Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        
        <label>Description:</label>
        <textarea
          className="updateDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        ></textarea>
        <button type="submit">Create Activity</button>
      </form>
    </div>
  );
};

export default PostActivity;
