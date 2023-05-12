const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`;
/**
 * Updates the count or duration of a routine activity on the API.
 * @param {string} token The user's JWT token.
 * @param {number} routineActivityId The ID of the routine activity to update.
 * @param {number} count The number of times (reps) this activity should be performed for this routine.
 * @param {number} duration The length of time (in minutes) this activity should be performed for this routine.
 * @returns {Promise<Object>} The updated routine activity object.
 */
export const updateRoutineActivity = async (token, routineActivityId, count, duration) => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        count,
        duration,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

/**
 * Deletes a routine activity from the API.
 * @param {string} token The user's JWT token.
 * @param {number} routineActivityId The ID of the routine activity to delete.
 * @returns {Promise<Object>} An object indicating success or failure of the deletion.
 */
export const deleteRoutineActivity = async (token, routineActivityId) => {
    try {
      const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  
