import { CareGiver, columns } from "@/types/CareGiverTypes";
import DataTable from "@/components/DataTable";
import { demoCaregiverList } from "@/services/api/carecircle";
import AddCareGiver from "../_components/add-care-giver-dialog";
import CareCircleNav from "../_components/nav";

async function getData(): Promise<CareGiver[]> {
  // TODO: Fetch data from api
  return [
    // CareGiversList
  ];
}

export default function CareGivers() {
  const data = demoCaregiverList;
  return (
    <>
      <CareCircleNav />
      <div className=" mx-auto py-10">
        <h3 className="mb-4 font-medium">
          Caregivers associated with this care circle.
        </h3>
        <AddCareGiver />
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
