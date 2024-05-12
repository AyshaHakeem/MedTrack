import axios from "axios";
// import { addCareCircle } from "../api/carecircle";

const axiosInstance = axios.create({
  baseURL: process.env.MEDTRACK_SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const refreshToken = async () => {
  try {
    const resp = await customFetch.get("auth/refresh");
    console.log("refresh token", resp.data);
    return resp.data;
  } catch (e) {
    console.log("Error", e);
  }
};

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
