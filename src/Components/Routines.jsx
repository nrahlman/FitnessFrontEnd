import React, { useState, useEffect } from 'react';
import { getPublicRoutines } from '../API/routines';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Routines = () => {
    const [routines, setRoutines] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const routinesData = await getPublicRoutines();
            setRoutines(routinesData);
        }
        fetchData();
    }, []);

    return (
        <div className='routines'>
            <h1>Public Routines</h1>
            {routines.map((routine) => {
                return (
                    <div className='routine' key={routine.id}>
                        <h2>{routine.name}</h2>
                        <p>Goal: {routine.goal}</p>
                        <p>Created by: {routine.creatorName}</p>
                        <p>Activities:</p>
                        <ul>
                            {routine.activities.map((activity) => {
                                return (
                                    <li key={activity.id}>
                                        <p>Name: {activity.name}</p>
                                        <p>Description: {activity.description}</p>
                                        <p>Duration: {activity.duration} minutes</p>
                                        <p>Count: {activity.count}</p>
                                    </li>
                                );
                            })}
                        </ul>
                        <button onClick={() => navigate(`/routines/${routine.id}`)}>See Details</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Routines;
