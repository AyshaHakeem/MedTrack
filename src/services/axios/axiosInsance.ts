import { setTokens } from "@/utils/auth/helper";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MEDTRACK_SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

/*
  authenticate each request
*/
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("medtrack_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/*
  fetch the new JWT authToken if the JWT refreshToken exists
*/
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("medtrack_refresh_token");

        const response = await axios.post("/auth/renew-access-token", {
          refreshToken,
        });

        // if (response.isSuccess) {
        localStorage.setItem("medtrack_token", response.data.accessToken);
        // }

        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
        return axios(originalRequest);
      } catch (error) {
        console.error(error);
      }
    }

    return Promise.reject(error);
  }
);

export const apiEndPoints = {
  carecircle: {
    addCareCircle(careCircleId: string) {
      return `carecircle/${careCircleId}`;
    },
    getCareCircleList() {
      return "carecircle";
    },
    getCareCircleDetails(careCircleId: string) {
      return `carecircle/${careCircleId}`;
    },
    addMedicine(careCircleId: string) {
      return `carecircle/${careCircleId}/medicine`;
    },
    getMedicineList(careCircleId: string) {
      return `carecircle/${careCircleId}/medicine`;
    },
    getActiveMedicine(careCircleId: string) {
      return `carecircle/${careCircleId}/medicine/today`;
    },
  },
};

export default axiosInstance;
