
// const API_BASE_URL =
//   import.meta.env.VITE_API_BASE_URL || "https://backend-5e2b.onrender.com";
//   //"https://backend-q0wc.onrender.com";
// /**
//  * Fetch all Buddhist Monks from database
//  */
// export const fetchAllMonks = async () => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/api/monks`);
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error('Error fetching monks:', error);
//     throw error;
//   }
// };

// /**
//  * Fetch single monk by ID
//  */
// export const fetchMonkById = async (id) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/api/monks/${id}`);
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(`Error fetching monk with ID ${id}:`, error);
//     throw error;
//   }
// };

// import axios from "axios";

// const BASE_URL = "http://localhost:3435/api/monasteries";

// export const getMonasteries = async () => {
//   const res = await axios.get(BASE_URL);
//   return res.data;
// };

// export const getMonastery = async (id) => {
//   const res = await axios.get(`${BASE_URL}/${id}`);
//   return res.data;
// };

// export const createMonastery = async (formData) => {
//   const res = await axios.post(BASE_URL, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data"
//     }
//   });
//   return res.data;
// };

// export const updateMonastery = async (id, formData) => {
//   const res = await axios.put(`${BASE_URL}/${id}`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data"
//     }
//   });
//   return res.data;
// };

// export const deleteMonastery = async (id) => {
//   const res = await axios.delete(`${BASE_URL}/${id}`);
//   return res.data;
// };



import api from "./axiosConfig";

//const BASE_URL =  import.meta.env.VITE_API_BASE_URL ||"localhost:3435/api/monasteries";
const BASE_URL = "https://backend-5e2b.onrender.com/api/monasteries";

export const getMonasteries = async () => {
  const res = await api.get(BASE_URL);
  return res.data;
};

export const getMonastery = async (id) => {
  const res = await api.get(`${BASE_URL}/${id}`);
  return res.data;
};

export const createMonastery = async (formData) => {
  const res = await api.post(BASE_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return res.data;
};

export const updateMonastery = async (id, formData) => {
  const res = await api.put(`${BASE_URL}/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return res.data;
};

export const deleteMonastery = async (id) => {
  const res = await api.delete(`${BASE_URL}/${id}`);
  return res.data;
};
