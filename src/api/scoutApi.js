import axios from "axios";

const scoutApi = axios.create({
  baseURL: "http://localhost:4000/api",
});

scoutApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "Content-Type": "application/json",
    
  };
  return config;
});

export default scoutApi;
