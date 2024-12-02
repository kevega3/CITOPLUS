import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    // config.baseURL = "http://127.0.0.1:1880/Citoplus/"; // api Node-red Node-red
    config.baseURL = "http://localhost:3000/Citoplus/"; // api Node-red Node.js
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});

export default axios;
