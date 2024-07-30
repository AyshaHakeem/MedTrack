import axiosInstance, { apiEndPoints } from "../axios/axiosInsance";

const inviteCareGiver = async (
  carecircleId: string,
  data: { email: string }
): Promise<any> => {
  try {
    const response = await axiosInstance.post(
      apiEndPoints.carecircle.inviteCareGiver(
        "de3c4ef4-f025-4ca6-9e96-2004fa6f6b63"
      ),
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

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

export { inviteCareGiver, demoCaregiverList };
