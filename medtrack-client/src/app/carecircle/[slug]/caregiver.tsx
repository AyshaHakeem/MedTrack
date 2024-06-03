import { CareGiver, columns } from "@/types/CareGiverTypes"
import DataTable from "@/components/DataTable"
import { demoCaregiverList } from "@/services/api/carecircle"
// import AddCareCircle from "./AddCareCircleDialog"

async function getData(): Promise<CareGiver[]> {
  // TODO: Fetch data from api
  return [
    // CareGiversList
  ]
}

export default async function CareGivers() {
  const data = demoCaregiverList
  return (
    <div className=" mx-auto py-10">
      <h3 className="mb-4 font-medium">Caregivers associated with this care circle.</h3>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
