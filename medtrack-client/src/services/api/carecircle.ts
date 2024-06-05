import axiosInstance from "../axiosInsance";
import { iAddCareCircleForm } from "@/types/CareCircleTypes";
import { iMedLogs } from "@/types/MedLogTypes";

const addCareCircle = async (data: iAddCareCircleForm): Promise<any> => {
  try {
    const response = await axiosInstance.post("/carecircle", data);
    return response.data;
  } catch (error) {
    throw error;
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
    status: "pending",
  },
  {
    id: "26",
    name: "East Wing",
    status: "pending",
  },
];

const demoCaregiverList = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    id: "3",
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
  },
  {
    id: "4",
    name: "Michael Brown",
    email: "michael.brown@example.com",
  },
  {
    id: "5",
    name: "Sarah Davis",
    email: "sarah.davis@example.com",
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

const demoMedicineLogs: iMedLogs = {
  carecircle_id: "cc_001",
  patients: {
    ids: ["p_001", "p_002", "p_003"],
    items: {
      p_001: {
        patient_id: "p_001",
        name: "Alice Green",
        username: "alice.green",
        medicines: {
          ids: ["m_001", "m_002"],
          items: {
            m_001: {
              medicine_id: "m_001",
              name: "Aspirin",
              from_date: "2024-05-01",
              to_date: "2024-06-01",
              note: "Administered daily with breakfast.",
              doses: {
                ids: ["d_001", "d_002"],
                items: {
                  d_001: {
                    time: "08:00 AM",
                    dose: "100 mg",
                    note: "Administered with breakfast. No side effects reported.",
                  },
                  d_002: {
                    time: "08:00 PM",
                    dose: "100 mg",
                    note: "Evening dose. Patient felt fine.",
                  },
                },
              },
            },
            m_002: {
              medicine_id: "m_002",
              name: "Vitamin D",
              from_date: "2024-05-01",
              to_date: "2024-06-01",
              note: "Administered daily.",
              doses: {
                ids: ["d_003", "d_004"],
                items: {
                  d_003: {
                    time: "09:00 AM",
                    dose: "1000 IU",
                    note: "Taken with water.",
                  },
                  d_004: {
                    time: "09:00 PM",
                    dose: "1000 IU",
                    note: "Evening dose. No issues reported.",
                  },
                },
              },
            },
          },
        },
      },
      p_002: {
        patient_id: "p_002",
        name: "Bob White",
        username: "bob.white",
        medicines: {
          ids: ["m_003", "m_004"],
          items: {
            m_003: {
              medicine_id: "m_003",
              name: "Metformin",
              from_date: "2024-05-01",
              to_date: "2024-06-01",
              note: "Administered with meals.",
              doses: {
                ids: ["d_005", "d_006"],
                items: {
                  d_005: {
                    time: "07:00 AM",
                    dose: "500 mg",
                    note: "Taken with breakfast. Slight nausea reported.",
                  },
                  d_006: {
                    time: "07:00 PM",
                    dose: "500 mg",
                    note: "Evening dose. Patient felt fine.",
                  },
                },
              },
            },
            m_004: {
              medicine_id: "m_004",
              name: "Ibuprofen",
              from_date: "2024-05-01",
              to_date: "2024-06-01",
              note: "Administered as needed for pain.",
              doses: {
                ids: ["d_007", "d_008"],
                items: {
                  d_007: {
                    time: "10:00 AM",
                    dose: "200 mg",
                    note: "Taken for headache relief.",
                  },
                  d_008: {
                    time: "04:00 PM",
                    dose: "200 mg",
                    note: "Taken for muscle pain.",
                  },
                },
              },
            },
          },
        },
      },
      p_003: {
        patient_id: "p_003",
        name: "Charlie Brown",
        username: "charlie.brown",
        medicines: {
          ids: ["m_005", "m_006"],
          items: {
            m_005: {
              medicine_id: "m_005",
              name: "Lisinopril",
              from_date: "2024-05-01",
              to_date: "2024-06-01",
              note: "Administered once daily.",
              doses: {
                ids: ["d_009", "d_010"],
                items: {
                  d_009: {
                    time: "08:00 AM",
                    dose: "10 mg",
                    note: "Morning dose with water.",
                  },
                  d_010: {
                    time: "08:00 PM",
                    dose: "10 mg",
                    note: "Evening dose with water.",
                  },
                },
              },
            },
            m_006: {
              medicine_id: "m_006",
              name: "Omeprazole",
              from_date: "2024-05-01",
              to_date: "2024-06-01",
              note: "Administered before meals.",
              doses: {
                ids: ["d_011", "d_012"],
                items: {
                  d_011: {
                    time: "07:00 AM",
                    dose: "20 mg",
                    note: "Taken before breakfast.",
                  },
                  d_012: {
                    time: "07:00 PM",
                    dose: "20 mg",
                    note: "Taken before dinner.",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export {
  addCareCircle,
  demoCarecircleList,
  demoCaregiverList,
  demoDailyLogs,
  demoMedicineLogs,
};
