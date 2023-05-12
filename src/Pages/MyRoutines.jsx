import React, { useState, useEffect } from "react";
import { fetchMe, fetchMyRoutines } from "../API/user";
import { GetRoutines, links, DisplayActivities } from "../API/activities";
import { addActivityToRoutine } from "../API/routines";
import "../Styles/myRoutines.css";
import "../Styles/Routines.css";

function MyRoutines({ user, setUser }) {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(0);

  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchMe(token)
        .then((userData) => {
          setUser(userData);
          return fetchMyRoutines(token, userData.username);
        })
        .then((routineData) => {
          setRoutines(routineData);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    async function fetchActivities() {
      try {
        const result = await DisplayActivities();
        setActivities(result);
      } catch (err) {
        console.error(err);
      }
    }

    fetchActivities();
  }, []);

  const handleAddActivity = async (routineId, activityId) => {
    try {
      await addActivityToRoutine(routineId, selectedActivity, count, duration); // updated argument
      const updatedRoutines = await fetchMyRoutines(
        localStorage.getItem("token"),
        user.username
      );
      setRoutines(updatedRoutines);
    } catch (err) {
      console.error(err);
    }
  };

  if (!user.username) {
    return (
      <div className="my-routines">
        <h1 className="header">My Routines</h1>
        <p className="message">Please log in to view your routines</p>
      </div>
    );
  }

  return (
    <div className="my-routines">
      <h1 className="header">My Routines</h1>
      <p className="message">Welcome back, {user.username}!</p>
      {routines.map((routine) => {
        return (
          <div className="routine" key={routine.id}>
            <div className="routine-header">
              <h2>{routine.name}</h2>
              <h4>Exercises:</h4>
            </div>
            <ul className="exercises">
                {routine.activities.map((activity) => {
                  return (
                    <li
                      className="activityRoutines"
                      key={activity.id}
                      style={{
                        backgroundImage: `url(${
                          links[Math.floor(Math.random() * 25)]
                        })`,
                        "--description": `"${activity.description}"`,
                      }}
                    >
                      <p className="activityTitle">{activity.name}</p>
                      <p className="activityDirections">
                        {activity.count} Reps X {activity.duration} mins
                      </p>
                    </li>
                  );
                })}
              </ul>
            <div className="select-activity">
              <label htmlFor="activity-select">Select Activity:</label>
              <select
                id="activity-select"
                value={selectedActivity.id}
                onChange={(event) => setSelectedActivity(event.target.value)}
              >
                <option value="">--Please choose an activity--</option>
                {activities.map((activity) => (
                  <option key={activity.id} value={activity.id}>
                    {activity.name}
                  </option>
                ))}
              </select>
              <label htmlFor="count">Count:</label>
              <input
                type="number"
                id="count"
                value={count}
                onChange={(event) => setCount(event.target.value)}
              />
              <label htmlFor="duration">Duration (in minutes):</label>
              <input
                type="number"
                id="duration"
                value={duration}
                onChange={(event) => setDuration(event.target.value)}
              />
              <button
                onClick={() =>
                  handleAddActivity(
                    routine.id,
                    selectedActivity.id,
                    count,
                    duration
                  )
                }
              >
                Add Activity
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyRoutines;
