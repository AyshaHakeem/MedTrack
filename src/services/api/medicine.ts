import { iAddMedicineForm, iMedLogs } from "@/types/MedLogTypes";
import axiosInstance, { apiEndPoints } from "../axios/axiosInsance";

const addMedicine = async (
  id: string,
  data: iAddMedicineForm
): Promise<any> => {
  try {
    const response = await axiosInstance.post(
      apiEndPoints.carecircle.addMedicine(id),
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

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
              fromDate: "2024-05-01",
              toDate: "2024-06-01",
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
              fromDate: "2024-05-01",
              toDate: "2024-06-01",
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
              fromDate: "2024-05-01",
              toDate: "2024-06-01",
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
              fromDate: "2024-05-01",
              toDate: "2024-06-01",
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
              fromDate: "2024-05-01",
              toDate: "2024-06-01",
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
              fromDate: "2024-05-01",
              toDate: "2024-06-01",
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

export { addMedicine, demoMedicineLogs };
