import axiosInstance from "../axios/axiosInsance";
import { iRegisterFormData } from "@/types/AuthTypes";

const registerSubmission = async (data: iRegisterFormData): Promise<any> => {
  console.log("User sign-up", data);
  // try {
  //   const response = await axiosInstance.post("/auth/signup", data);
  //   return response.data;
  // } catch (error) {
  //   throw error;
  // }
};

export default registerSubmission;
