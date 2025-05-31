import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Implement refresh token logic here
        // const refreshToken = localStorage.getItem('refreshToken');
        // const response = await axiosInstance.post('/auth/refresh', { refreshToken });
        // localStorage.setItem('token', response.data.token);
        // Retry the original request
        // return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Handle refresh token failure
        localStorage.removeItem("token");
        // localStorage.removeItem('refreshToken');
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
