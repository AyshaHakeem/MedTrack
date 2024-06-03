"use client"

import { useState } from "react";
import MedLogsList from "./components/med-log-list";
import MedLogDisplay from "./components/med-log-display";
import AddMedLog from "./components/add-med-log-dialog";
import { demoMedicineLogs } from "@/services/api/carecircle";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Button } from "@/components/ui/button"
import { Patient } from "@/types/MedLogTypes";

  

export default function DisplayList() {

    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

    const handleSelectPatient = (patientId: string) => {
        const patient = demoMedicineLogs.patients.items[patientId] || null;
        console.log(patient)
        setSelectedPatient(patient);
    };
    

    return (
        <div className="mx-auto py-10">
            <AddMedLog /> 
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                    <MedLogsList data={demoMedicineLogs} onSelection={handleSelectPatient} />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel minSize={55}>
                    <MedLogDisplay patient={selectedPatient} />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
        
    )
    // return 
}