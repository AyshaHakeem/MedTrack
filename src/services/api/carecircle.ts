"use client";
import axiosInstance from "../axios/axiosInsance";
import { apiEndPoints } from "../axios/axiosInsance";
import { iAddCareCircleForm } from "@/types/CareCircleTypes";
import { iAddMedicineForm } from "@/types/MedLogTypes";
import { iMedLogs } from "@/types/MedLogTypes";

const addCareCircle = async (data: iAddCareCircleForm): Promise<any> => {
  try {
    const response = await axiosInstance.post(
      apiEndPoints.carecircle.addCareCircle(),
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getCareCircleList = async (): Promise<any> => {
  try {
    const response = await axiosInstance.get(
      apiEndPoints.carecircle.getCareCircleList()
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// demo data
const demoCarecircleList = [
  {
    id: "22",
    name: "Healing Haven",
    status: "pending",
  },
  {
    id: "21",
    name: "Room 09",
    status: "pending",
  },
  {
    id: "24",
    name: "Support Squad",
    status: "pending",
  },
  {
    id: "25",
    name: "Wellness Crew",
    status: "complete",
  },
  {
    id: "26",
    name: "East Wing",
    status: "complete",
  },
];

const demoDailyLogs = [
  {
    id: "1",
    patientName: "Alice Green",
    medicineName: "Aspirin",
    time: "08:00 AM",
    dose: "100 mg",
    note: "Administered with breakfast. Patient reported no side effects.",
  },
  {
    id: "2",
    patientName: "Bob White",
    medicineName: "Lisinopril",
    time: "09:00 AM",
    dose: "10 mg",
    note: "Blood pressure checked before administration. Within normal range.",
  },
  {
    id: "3",
    patientName: "Charlie Black",
    medicineName: "Metformin",
    time: "12:00 PM",
    dose: "500 mg",
    note: "Given with lunch. Patient mentioned slight nausea but felt better after.",
  },
  {
    id: "4",
    patientName: "Daisy Blue",
    medicineName: "Ibuprofen",
    time: "03:00 PM",
    dose: "200 mg",
    note: "Administered due to mild headache. Patient felt relief within an hour.",
  },
  {
    id: "5",
    patientName: "Edward Yellow",
    medicineName: "Atorvastatin",
    time: "07:00 PM",
    dose: "20 mg",
    note: "Taken after dinner. No adverse reactions reported by the patient.",
  },
  {
    id: "6",
    patientName: "Fiona Red",
    medicineName: "Albuterol",
    time: "10:00 PM",
    dose: "2 puffs",
    note: "Administered during asthma attack. Patient's breathing improved significantly.",
  },
];

export { getCareCircleList, addCareCircle, demoCarecircleList, demoDailyLogs };
