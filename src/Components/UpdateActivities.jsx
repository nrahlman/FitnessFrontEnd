import React, { useState } from "react";
import { PatchActivities } from "../API/activities";
import "../Styles/Update.css";

const UpdateActivities = ({ token, id, onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await PatchActivities(id, token, name, description);
    onClose(false);
    
  };

  return (
    <div className="update-post">
      <div className="updateHeader">
        <h2>Update Post {id}</h2>
        <div className="close-button" onClick={onClose}>
          X
        </div>
      </div>
      <form className="updateForm" onSubmit={handleSubmit}>
        <label>New Activity Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>New Description:</label>
        <textarea
          className="updateDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default UpdateActivities;
