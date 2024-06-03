import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CareGivers from "./caregiver"
import DailyLogs from "./daily-log"
import DisplayList from "./med-log"

const carecircleDetails = () => {
    return(
        <div className="container">
            <Tabs defaultValue="account" className="">
                <TabsList>
                    <TabsTrigger value="today">Today`s MedLogs</TabsTrigger>
                    <TabsTrigger value="entry">Patients & Logs</TabsTrigger>
                    <TabsTrigger value="caregiver">Caregivers</TabsTrigger>
                </TabsList>
                <TabsContent value="today"><DailyLogs /></TabsContent>
                <TabsContent value="entry"><DisplayList /></TabsContent>
                <TabsContent value="caregiver"><CareGivers /></TabsContent>
            </Tabs>
        </div> 

    )
}

export default carecircleDetails