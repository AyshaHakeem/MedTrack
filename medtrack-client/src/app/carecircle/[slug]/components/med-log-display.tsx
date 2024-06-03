import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"
import { Trash2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Patient } from "@/types/MedLogTypes"

interface MedLogDisplayProps {
    patient: Patient | null;
}

const MedLogDisplay: React.FC<MedLogDisplayProps> = ({ patient }) => {
    return (
        <div className="flex flex-col">
            {patient ? (
                <div className="flex flex-1 flex-col">
                    <div className="flex items-center gap-4 text-sm p-4">
                        <Avatar>
                            <AvatarImage alt={patient.name} />
                            <AvatarFallback>
                                {patient.name
                                    .split(" ")
                                    .map((chunk) => chunk[0])
                                    .join("")}
                            </AvatarFallback>
                        </Avatar>
                
                        <div className="grid gap-1">
                            <div className="font-semibold">{patient.name}</div>
                        </div>
                    </div>
                    <Separator />
                    <div className="flex-1 whitespace-pre-wrap text-sm">
                        {Object.values(patient.medicines.items).map((medicine) => (
                            <>
                            <div key={medicine.medicine_id} className="p-4">
                                    <div className="font-bold">{medicine.name}</div>
                                    <div className="text-xs text-muted-foreground">
                                        From: {medicine.from_date} To: {medicine.to_date}
                                    </div>
                                <ul className="list-decimal mx-4">
                                    {Object.values(medicine.doses.items).map((dose) => (
                                        <li key={dose.time} className="pt-1">
                                            <span className="font-semibold">{dose.time}</span>: {dose.dose} - {dose.note}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Separator className="ml-4" />
                            </>
                        ))}
                    </div>
                </div>
            ) : null}
        </div> 
    )
}

export default MedLogDisplay