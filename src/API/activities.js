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
      const response = await fetch(`${BASE_URL}/activities/3/routines`, {
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