import axiosInstance from "../axios/axiosInsance";
import { apiEndPoints } from "../axios/axiosInsance";
import { iRegisterFormData } from "@/types/AuthTypes";

const registerSubmission = async (data: iRegisterFormData): Promise<any> => {
  const { email, password, firstName, lastName } = data;
  const payload = {
    firstName,
    lastName,
    email,
    password,
  };
  try {
    const response = await axiosInstance.post(
      apiEndPoints.auth.register(),
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default registerSubmission;
