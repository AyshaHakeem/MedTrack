import loginSubmission from "@/services/api/login";
import LoginFormSchema from "@/schema/LoginFormSchema";
import { z } from "zod";
import { setTokens } from "./helper";

const handleLogin = async (
  data: z.infer<typeof LoginFormSchema>,
  setMessage: (message: string) => void,
  router: any
) => {
  try {
    const response = await loginSubmission(data);
    if (response.isSuccess) {
      setTokens(response.data.accessToken, response.data.refreshToken);
      router.push("/carecircle");
    }
  } catch (error: any) {
    console.error(error);
    setMessage(
      error.response?.data?.error || "An error occurred, please try again"
    );
  }
};

export default handleLogin;
