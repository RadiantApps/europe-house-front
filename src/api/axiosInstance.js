import { apiUrl } from "@/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // If the request data is FormData, remove JSON content-type
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
