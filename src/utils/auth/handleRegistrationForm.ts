import { z } from "zod";
import RegisterFormSchema from "@/schema/RegisterFormSchema";
import { iRegisterFormData } from "@/types/AuthTypes";
import registerSubmission from "@/services/api/register";
import { setTokens } from "./helper";

const validateRegisterForm = (
  formData: z.infer<typeof RegisterFormSchema>,
  form: any
) => {
  if (formData.password !== formData.confirmPassword) {
    form.setError("confirmPassword", {
      type: "custom",
      message: "Passwords do not match",
    });
    return false;
  }
  return true;
};

const handleRegistration = async (
  data: z.infer<typeof RegisterFormSchema>,
  form: any,
  setLoading: (value: boolean) => void,
  setErrorMessage: (message: string) => void,
  router: any
) => {
  if (!validateRegisterForm(data, form)) {
    setLoading(false);
    return;
  }

  try {
    const response = await registerSubmission(data);
    setLoading(false);
    if (response.isSuccess) {
      setTokens(
        response.data.tokens.accessToken,
        response.data.tokens.refreshToken
      );
      router.push("/carecircle");
      // TODO:display success dialogue
    }
  } catch (error: any) {
    setLoading(false);
    console.error(error);
    setErrorMessage(
      error.response?.data?.error || "An error occurred, please try again"
    );
  }
};

export default handleRegistration;
