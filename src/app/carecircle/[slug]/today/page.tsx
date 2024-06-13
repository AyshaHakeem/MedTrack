import DailyLogsTable from "@/components/DailyLogsTable";
import { DailyLog, columns } from "@/types/DailyLogTypes";
import { demoDailyLogs } from "@/services/api/carecircle";
import CareCircleNav from "../components/nav";

const DailyLogs = () => {
  //TODO:fetch data
  const data = demoDailyLogs;

  return (
    <>
      <CareCircleNav />
      <div className="mx-auto py-10">
        <h3 className="mb-4 font-medium">Today`s List</h3>
        <DailyLogsTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default DailyLogs;
