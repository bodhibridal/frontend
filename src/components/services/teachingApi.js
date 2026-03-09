// import axios from "axios";

// const BASE_URL = "http://localhost:3435/api/teachings";

// export const getTeachings = async (monkId) => {
//   const res = await axios.get(`${BASE_URL}/monk/${monkId}`);
//   return res.data;
// };

// export const addTeaching = async (data) => {
//   const res = await axios.post(BASE_URL, data);
//   return res.data;
// };

// export const updateTeaching = async (id, data) => {
//   const res = await axios.put(`${BASE_URL}/${id}`, data);
//   return res.data;
// };

// export const deleteTeaching = async (id) => {
//   const res = await axios.delete(`${BASE_URL}/${id}`);
//   return res.data;
// };


import api from "./axiosConfig";

const BASE_URL = "https://backend-5e2b.onrender.com/api/teachings";
//const BASE_URL =  import.meta.env.VITE_API_BASE_URL ||"localhost:3435/api/teachings";


export const getTeachings = async (monkId) => {
  const res = await api.get(`${BASE_URL}/monk/${monkId}`);
  return res.data;
};

export const addTeaching = async (data) => {
  const res = await api.post(BASE_URL, data);
  return res.data;
};

export const updateTeaching = async (id, data) => {
  const res = await api.put(`${BASE_URL}/${id}`, data);
  return res.data;
};

export const deleteTeaching = async (id) => {
  const res = await api.delete(`${BASE_URL}/${id}`);
  return res.data;
};
