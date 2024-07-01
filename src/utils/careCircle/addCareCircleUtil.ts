import { addCareCircle } from "@/services/api/carecircle";

export default async function addCareCircleUtil(data: any, router: any) {
  try {
    const response = await addCareCircle(data);
    if (response.isSuccess) {
      router.push(`/carecircle/${response.care_circle_Id}`);
    }
  } catch (error: any) {
    console.error(error);
  }
}
