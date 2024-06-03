import MedLogsList from "./components/med-logs";
import { demoMedicineLogs } from "@/services/api/carecircle";

export default function displayList() {
    return <MedLogsList data={demoMedicineLogs} />
}