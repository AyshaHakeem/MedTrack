import { addCareCircle } from "@/services/api/carecircle";

export default async function addCareCircleUtil(data: any, router: any) {
  try {
    const response = await addCareCircle(data);
  } catch (error: any) {
    console.error(error);
  }
}
