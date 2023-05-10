import React from 'react';

const BASE_URL= "https://fitnesstrac-kr.herokuapp.com/api"

export async function DisplayActivities (){
    try {
      const response = await fetch(`${BASE_URL}/activities`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
  
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  export async function PostActivities (){
    try {
      const response = await fetch(`${BASE_URL}/activities`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Running',
          description: 'Keep on running!'
        }) 
      });
  
      const result = await response.json();
  
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  export async function PatchActivities (){
    try {
      const response = await fetch(`${BASE_URL}/activities`, {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
        method: "PATCH",
        body: JSON.stringify({
          name: 'Running',
          description: 'Keep on running, til you drop!'
        })
      });
  
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
      console.error(err);
      }
  }

  export async function GetActivities (){
    try {
      const response = await fetch(`${BASE_URL}/activities/:activityId/routines`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  const links = [
    '/public/images/1.jpg',
    '/public/images/2.jpg',
    '/public/images/3.jpg',
    '/public/images/4.webp',
    '/public/images/5.jpg',
    '/public/images/6.jpg',
    '/public/images/7.avif',
    '/public/images/8.jpg',
    '/public/images/9.jpg',
    '/public/images/10.jpg',
    '/public/images/11.jpg',
    '/public/images/12.jpg',
    '/public/images/13.jpg',
    '/public/images/14.jpg',
    '/public/images/15.png',
    '/public/images/16.jpg',
    '/public/images/17.jpg',
    '/public/images/18.jpg',
    '/public/images/19.jpg',
    '/public/images/20.jpg',
    '/public/images/21.jpg',
    '/public/images/22.avif',
    '/public/images/23.webp',
    '/public/images/24.jpg',
    '/public/images/25.jpg'
  ];
  
  
  // export the array for use in other modules
  export { links };
  