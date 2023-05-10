import React, { useEffect } from "react";
import { useState } from "react";
import { DisplayActivities, links } from "../API/activities";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getActivities() {
      const activities = await DisplayActivities();
      setActivities(activities);
    }
    getActivities();
  }, []);
  console.log(activities[0]);
  return (
    <div className="activitiesContainer">
      <h1>Activities</h1>
      <div className="activities">
        {activities.map((activity) => {
          return (
            <div className="activity" key={activity.id}>
              <img
                src={links[Math.floor(Math.random() * 22) + 1]}
                alt="activity"
              />

              <p>{activity.name}</p>
              <p>Descritpion: {activity.description}</p>
              <button onClick={() => navigate(`/activities/${activity.id}`)}>
                See Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
