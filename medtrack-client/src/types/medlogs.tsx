import { DailyLog, columns } from "@/types/DailyLogTypes";
import DataTable from "@/components/DataTable"
import { demoDailyLogs } from "@/services/api/carecircle";
// import AddCareCircle from "./AddCareCircleDialog"

async function getData(): Promise<DailyLog[]> {
  // Fetch data from API
  return [
    // demoCarecircleList
  ]
}

export default async function DemoPage() {
  const data = demoDailyLogs

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
