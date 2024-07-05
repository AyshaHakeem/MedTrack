import { addMedicine } from "@/services/api/carecircle";

export default async function addMedicineUtil(id: string, data: any) {
  try {
    const payload = { careCircleId: id, ...data };
    const response = await addMedicine(id, payload);
    if (response.isSuccess) {
      console.log("Medicine added successfully");
      location.reload();
      // TODO: display success toast
    }
  } catch (error: any) {
    console.error(error);
    // TODO: display error message
  }
}
