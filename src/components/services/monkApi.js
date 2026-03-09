// import axios from "axios";

// const BASE_URL = "http://localhost:3435/api/monks";

// export const getMonks = async () => {
//   const res = await axios.get(BASE_URL);
//   return res.data;
// };

// export const getMonk = async (id) => {
//   const res = await axios.get(`${BASE_URL}/${id}`);
//   return res.data;
// };

// export const createMonk = async (formData) => {
//   const res = await axios.post(BASE_URL, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data"
//     }
//   });
//   return res.data;
// };

// export const updateMonk = async (id, formData) => {
//   const res = await axios.put(`${BASE_URL}/${id}`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data"
//     }
//   });
//   return res.data;
// };

// export const deleteMonk = async (id) => {
//   const res = await axios.delete(`${BASE_URL}/${id}`);
//   return res.data;
// };



import api from "./axiosConfig";

const BASE_URL = "https://backend-5e2b.onrender.com/api/monks";
//const BASE_URL =  import.meta.env.VITE_API_BASE_URL ||"localhost:3435/api/monks";


export const getMonks = async () => {
  const res = await api.get(BASE_URL);
  return res.data;
};

export const getMonk = async (id) => {
  const res = await api.get(`${BASE_URL}/${id}`);
  return res.data;
};

export const createMonk = async (formData) => {
  const res = await api.post(BASE_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return res.data;
};

export const updateMonk = async (id, formData) => {
  const res = await api.put(`${BASE_URL}/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return res.data;
};

export const deleteMonk = async (id) => {
  const res = await api.delete(`${BASE_URL}/${id}`);
  return res.data;
};
