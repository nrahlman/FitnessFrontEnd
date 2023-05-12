import React, { useState } from 'react';
import { createRoutine } from '../API/routines';
import { useNavigate } from 'react-router-dom';
import "../Styles/Update.css";

const AddRoutine = ({ token, onClose }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(null);

  return (
    <div className="update-post">
      <div className="updateHeader">
        <h2>Add Routine</h2>
        <div className="close-button" onClick={onClose}>
          X
        </div>
      </div>
      <form className='updateForm'
        onSubmit={async (e) => {
          e.preventDefault();
          await createRoutine(token, name, goal, isPublic);
          onClose(false);
          navigate("/routines");
        }}
      >
        <label>Routine Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <label>Goal:</label>
        <textarea
          className="updateDescription"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Goal"
          required
        ></textarea>
        <label>
          Public:
          <input
            type="checkbox"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
          />
        </label>
        <button type="submit">Create Routine</button>
      </form>
    </div>
  );
};

export default AddRoutine;