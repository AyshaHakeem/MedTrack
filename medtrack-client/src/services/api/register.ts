import axiosInstance from "../axiosInsance";
import { iRegisterFormData } from "@/types/AuthTypes";

const registerSubmission = async (data: iRegisterFormData): Promise<any> => {
    try {
        const response = await axiosInstance.post('/register', data)
        console.log(response.data)
        return response.data
    } catch (error) {
        throw error
    }
}

export default registerSubmission