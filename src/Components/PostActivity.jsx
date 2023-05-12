import React, { useState } from 'react';
import { PostActivities } from '../API/activities';
import { useNavigate } from 'react-router-dom';

const PostActivity = ({token}) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [descritpion, setDescription] = useState("");
  
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await PostActivities(token, name, descritpion);
          navigate("/activities");
        }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
        />
        
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={descritpion}
          type="text"
          placeholder="Description"
        />
        <button type="submit">Create Activity</button>
      </form>
    </div>
  );
};

export default PostActivity;
