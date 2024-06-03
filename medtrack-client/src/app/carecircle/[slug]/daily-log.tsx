
import DailyLogsTable from "@/components/DailyLogsTable";
import { DailyLog, columns } from "@/types/DailyLogTypes";
import { demoDailyLogs } from "@/services/api/carecircle";

export default function DailyLogs() {
    //TODO:fetch data
    const data = demoDailyLogs
  
    return (
      <div className="mx-auto py-10">
        <DailyLogsTable columns={columns} data={data} />
      </div>
    )
  }
  
