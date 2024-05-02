import axios from "axios";
import { LoginFormData } from "@/types/AuthTypes";

export const loginSubmission = async (data: LoginFormData): Promise<void> => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/login`!, data); 
    console.log(response.data); 
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
