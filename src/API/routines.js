const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`;
import { toast } from 'react-toastify';

/**
 * Retrieve all public routines from the API.
 * @returns {Promise<Array>} An array of public routines.
 */
export const getPublicRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Creates a new routine on the API.
 * @param {string} token The user's JWT token.
 * @param {string} name The name of the routine.
 * @param {string} goal The goal of the routine.
 * @param {boolean} isPublic Determines whether the routine should be public or private.
 * @returns {Promise<Object>} The newly created routine object.
 */
export const createRoutine = async (token, name, goal, isPublic) => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic,
      }),
    });
    const result = await response.json();
    if (!result.error) {
      return result;
    } else {
      toast.error(result.message || "Registration failed. Please try again.", {
        position: "bottom-center",
        autoClose: 3000,
        style: {
          fontSize: "16px",
        },
      });
    }
  } catch (err) {
    console.error(err);
    toast.error(err.message || 'Log in failed. Please try again.', {
      position: "bottom-center",
      autoClose: 3000,
      style: {
        fontSize: '16px'
      }
    });
  }
};

/**
 * Updates an existing routine on the API.
 * @param {string} token The user's JWT token.
 * @param {number} routineId The ID of the routine to update.
 * @returns {Promise<Object>} The updated routine object.
 */
export const updateRoutine = async (token, routineId) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: "Long Cardio Day",
        goal: "To get your heart pumping!",
      }),
    });
    const result = await response.json();
    if (!result.error) {
      return result;
    } else {
      toast.error(result.message || "Registration failed. Please try again.", {
        position: "bottom-center",
        autoClose: 3000,
        style: {
          fontSize: "16px",
        },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

/**
 * Deletes an existing routine from the API.
 * @param {string} token The user's JWT token.
 * @param {number} routineId The ID of the routine to delete.
 * @returns {Promise<Object>} The deleted routine object.
 */
export const deleteRoutine = async (token, routineId) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    if (!result.error) {
      return result;
    } else {
      toast.error(result.message || "Registration failed. Please try again.", {
        position: "bottom-center",
        autoClose: 3000,
        style: {
          fontSize: "16px",
        },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

/**
 * Attaches a single activity to a routine on the API.
 * @param {number} routineId The ID of the routine to attach the activity to.
 * @param {number} activityId The ID of the activity to attach.
 * @param {number} count The number of times (reps) this activity should be performed for this routine.
 * @param {number} duration The length of time (in minutes) this activity should be performed for this routine.
 * @returns {Promise<Object>} The newly created routine_activity object.
 */
export const addActivityToRoutine = async (
  routineId,
  activityId,
  count,
  duration
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activityId: activityId,
          count: count,
          duration: duration,
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
