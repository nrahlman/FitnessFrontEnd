import React, { useState, useEffect } from "react";
import { DisplayActivities } from "../API/activities";
const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function getActivities() {
      const activites = await DisplayActivities();
      setActivities(activites);
    }
    getActivities();
  }, []);
  console.log(activities[0]);
  return (
    <div>
      <h1>Activities</h1>
      {activities.map((activity) => {
        return (
          <div key={activity.id}>
            <p>Name: {activity.name}</p>
            <p>Descritpion: {activity.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Activities;
