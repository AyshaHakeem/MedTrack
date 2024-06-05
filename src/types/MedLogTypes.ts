type ids = string[]

interface Dose{
    time: string;
    dose: string;
    note: string;
}

interface Medicine{
    medicine_id: string;
    name: string;
    from_date: string;
    to_date: string;
    note: string;
    doses: {
        ids: ids;
        items: Record<string, Dose>
    }
}

export interface Patient{
    patient_id: string;
    name: string;
    username: string;
    medicines: {
        ids: ids;
        items: Record<string, Medicine>
    }
}

export interface iMedLogs{
    carecircle_id: string,
    patients: {
        ids: ids;
        items: Record<string, Patient>
    }
}