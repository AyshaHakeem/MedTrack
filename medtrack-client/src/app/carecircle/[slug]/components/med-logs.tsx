import { ScrollArea } from "@/components/ui/scroll-area";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { iMedLogs } from "@/types/MedLogTypes";

// Assuming ScrollArea, twMerge, and clsx are correctly imported
interface MedLogsListProps {
    data: iMedLogs | null;
  }
  
const MedLogsList: React.FC<MedLogsListProps> = ({ data }) => {
    if (!data) {
        return <div>No data available</div>;
    }
  return ( 
    <ScrollArea>
      <div className="flex flex-col gap-2 p-4 pt-0">
        {Object.keys(data.patients.items).map((key) => {
          const item = data.patients.items[key];
          return (
            <button
              key={item.patient_id}
              className={twMerge(clsx(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              ))}
            //   onClick={() => console.log(item)}
            >
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">{item.name}</div>
                  </div>
                </div>
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground">
                {item.medicines.ids.map(medicineId => (
                  <div key={medicineId}>
                    {item.medicines.items[medicineId].name}
                  </div>
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </ScrollArea>
  );
};

export default MedLogsList;
