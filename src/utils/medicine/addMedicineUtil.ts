import { addMedicine } from "@/services/api/carecircle";

export default async function addMedicineUtil(id: string, data: any) {
  try {
    const response = await addMedicine(id, data);
    if (response.isSuccess) {
      // TODO: display success dialog
    }
  } catch (error: any) {
    console.error(error);
    // TODO: display error message
  }
}
