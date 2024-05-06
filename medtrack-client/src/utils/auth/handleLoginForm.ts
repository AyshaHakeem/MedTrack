import loginSubmission from "@/services/api/login";
import LoginFormSchema from "@/schema/LoginFormSchema";
import { z } from "zod"

const handleLogin = async (
    data: z.infer<typeof LoginFormSchema>,
    setMessage: (message: string) => void,
    router: any
) => {
    try {
        const response = await loginSubmission(data)
        if (response.isSuccess){
            localStorage.setItem('medtrack_token', `Bearer ${response.token}`)
            router.push('/dashboard')
        }
    } catch (error: any) {
        console.error(error)
        setMessage(error.response?.data?.error || "An error occurred, please try again");
    }
}

export default handleLogin