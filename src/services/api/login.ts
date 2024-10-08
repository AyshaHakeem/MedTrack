import axiosInstance from "../axios/axiosInsance";
import { apiEndPoints } from "../axios/axiosInsance";
import { iLoginFormData, iAuthToken } from "@/types/AuthTypes";

const loginSubmission = async (data: iLoginFormData): Promise<any | void> => {
  try {
    const response = await axiosInstance.post(apiEndPoints.auth.login(), data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default loginSubmission;
