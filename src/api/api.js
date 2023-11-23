// src/api/api.js
import axios from "axios";

/* Function to get the JSON with axios and pass it a URL */
export const getJSON = async (path) => {
  try {
    const response = await axios.get(path);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
