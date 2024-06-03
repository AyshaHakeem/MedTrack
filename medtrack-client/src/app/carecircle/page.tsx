import { CareCircleRow, columns } from "@/types/CareCircleTypes" 
import DataTable from "@/components/DataTable"
import { demoCarecircleList } from "@/services/api/carecircle"
import AddCareCircle from "../../components/AddCareCircleDialog"

async function getData(): Promise<CareCircleRow[]> {
  // Fetch data from API
  return [
    // demoCarecircleList
  ]
}

export default async function DemoPage() {
  const data = demoCarecircleList

  return (
    <div className="container mx-auto py-10">
      <AddCareCircle />
      <DataTable columns={columns} data={data} />
    </div>
  )
}
