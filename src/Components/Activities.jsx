import React, { useEffect } from 'react';
import { useState } from 'react';
import { DisplayActivities } from '../API/activities';
import { useNavigate } from 'react-router-dom';


const Activities = () => {
const [activities, setActivities]=useState([])
const navigate=useNavigate()
            
        useEffect(()=>{
             async function getActivities (){
                const activities= await DisplayActivities()
            setActivities(activities)}
            getActivities()
            },[])
            console.log(activities[0])
    return (
        <div>
             <h1>Activities</h1>
          {activities.map((activity) => {
            return (
              <div className='activities' key={activity.id}>
                <p>Name: {activity.name}</p>
                <p>Descritpion: {activity.description}</p>
                <button onClick={()=>navigate(`/activities/${activity.id}`)}>See Details</button>
              </div>
            );
          })}
        </div>
    );

};

export default Activities;
