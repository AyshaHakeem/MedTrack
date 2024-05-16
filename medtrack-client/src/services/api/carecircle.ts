import axiosInstance from "../axiosInsance";
import { iAddCareCircleForm } from "@/types/CareCircleTypes";



const addCareCircle = async (data: iAddCareCircleForm): Promise<any> => {
    try {
        const response = await axiosInstance.post('/carecircle', data)
        return response.data
    } catch (error) {
        throw error
        
    }
}

export {addCareCircle}