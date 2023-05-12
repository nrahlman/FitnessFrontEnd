import React, { useState, useEffect } from 'react';
import { fetchMe, fetchMyRoutines } from '../API/user';
import '../Styles/myRoutines.css'

function MyRoutines({user, setUser}) {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
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
  }, []);

  if (!user.username) {
    return (
        <div className='myRoutines'>
    <h1 className='header'>My Routines</h1>
    <p className='message'>Please log in to view your routines</p>
    </div>
    )
  }

  return (
    <div className='myRoutines'>
      <h1 className='header'>My Routines</h1>
      <p className='message'>Welcome back, {user.username}!</p>
      {routines.length > 0 ? (
        <ul>
          {routines.map((routine) => (
            <li key={routine.id}>
              <h2>{routine.name}</h2>
              <p>{routine.description}</p>
              {/* additional routine details here */}
            </li>
          ))}
        </ul>
      ) : (
        <p className='message2'>You don't have any routines yet</p>
      )}
    </div>
  );
}

export default MyRoutines;