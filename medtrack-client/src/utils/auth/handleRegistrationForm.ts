import { z } from "zod"
import RegisterFormSchema from "@/schema/RegisterFormSchema"
import { iRegisterFormData } from "@/types/AuthTypes"
import registerSubmission from "@/services/api/register"

const validateRegisterForm = (
    formData: z.infer<typeof RegisterFormSchema>,
    form: any
) => {
    if (formData.password !== formData.confirmPassword) {
        form.setError("confirmPassword", { type: "custom", message: "Passwords do not match" })
        return false;
    }
    return true
}


const handleRegistration = async (
    data: z.infer<typeof RegisterFormSchema>,
    form: any,
    setLoading: (value: boolean) => void,
    setErrorMessage: (message: string) => void,
    router: any
) => {

    if ( !validateRegisterForm(data, form) ){
        setLoading(false);
        return;
    }   

    try {
        const response = await registerSubmission(data);
        setLoading(false);
        if (response.isSuccess) {
            router.push("/auth/login"); // Redirect to login on success
        } 
    } catch (error: any) {
        setLoading(false);
        console.log(error.error)
        console.error(error);
        setErrorMessage(error.response?.data?.error || "An error occurred, please try again");

    }
    
}

export default handleRegistration