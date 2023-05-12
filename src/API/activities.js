import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/**
 * The base URL for the FitnessTrac API
 * @type {string}
 */
const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

/**
 * Fetches all activities from the FitnessTrac API
 * @returns {Promise<Array>} - An array of activity objects
 */
export async function DisplayActivities() {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
}

/**
 * Posts a new activity to the FitnessTrac API
 * @param {string} token - The user's access token
 * @param {string} name - The name of the activity
 * @param {string} description - The description of the activity
 * @returns {Promise<Object>} - The newly created activity object
 */
export async function PostActivities(token, name, description) {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
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
    // Display an error message to the user using toast
    
  }
}

/**
 * Updates an existing activity in the FitnessTrac API
 * @param {number} Id - The ID of the activity to update
 * @param {string} token - The user's access token
 * @param {string} name - The updated name of the activity
 * @param {string} description - The updated description of the activity
 * @returns {Promise<Object>} - The updated activity object
 */
export async function PatchActivities(Id, token, name, description) {
  console.log(Id, token, name, description);
  try {
    const response = await fetch(`${BASE_URL}/activities/${Id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      body: JSON.stringify({
        name,
        description,
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
}

/**
 * Fetches all routines associated with an activity from the FitnessTrac API
 * @param {number} Id - The ID of the activity
 * @returns {Promise<Array>} - An array of routine objects associated with the activity
 */
export async function GetRoutines(Id) {
  try {
    const response = await fetch(`${BASE_URL}/activities/${Id}/routines`, {
      headers: {
        "Content-Type": "application/json",
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
}

/**
 * An array of image links for use in other modules
 * @type {Array<string>}
 */
const links = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.webp",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.avif",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
  "/images/15.png",
  "/images/16.jpg",
  "/images/17.jpg",
  "/images/18.jpg",
  "/images/19.jpg",
  "/images/20.jpg",
  "/images/21.jpg",
  "/images/22.avif",
  "/images/23.webp",
  "/images/24.jpg",
  "/images/25.webp",
  "/images/26.jpg",
  "/images/27.jpg",
];

// export the array for use in other modules
export { links };
