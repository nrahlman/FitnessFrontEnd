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

  // @param {string} token
 
  export async function PostActivities (token, name, description){
    try {
      const response = await fetch(`${BASE_URL}/activities`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name,
          description
        }) 
      });
  
      const result = await response.json();
  
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  export async function PatchActivities (Id, token, name, description){
    console.log(Id, token, name, description)
    try {
      const response = await fetch(`${BASE_URL}/activities/${Id}`, {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        method: "PATCH",
        body: JSON.stringify({
          name,
          description
        })
      });
  
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
      console.error(err);
      }
  }

  // export async function GetActivities (){
  //   try {
  //     const response = await fetch(`${BASE_URL}/activities/:activityId/routines`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     const result = await response.json();
  //     console.log(result);
  //     return result
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  const links = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.webp',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.avif',
    '/images/8.jpg',
    '/images/9.jpg',
    '/images/10.jpg',
    '/images/11.jpg',
    '/images/12.jpg',
    '/images/13.jpg',
    '/images/14.jpg',
    '/images/15.png',
    '/images/16.jpg',
    '/images/17.jpg',
    '/images/18.jpg',
    '/images/19.jpg',
    '/images/20.jpg',
    '/images/21.jpg',
    '/images/22.avif',
    '/images/23.webp',
    '/images/24.jpg',
    '/images/25.jpg'
  ];
  
  
  // export the array for use in other modules
  export { links };
  