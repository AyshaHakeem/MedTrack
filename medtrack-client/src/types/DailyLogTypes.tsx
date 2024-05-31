"use client"

import { 
  ColumnDef,
  ColumnFiltersState,
  useReactTable
 } from "@tanstack/react-table";
 
import { Checkbox } from "@/components/ui/checkbox"

export type DailyLog = {
    id: string,
    patientName: string,
    time: string
    medicineName: string,
    dose: string,
    note: string
}

export const columns: ColumnDef<DailyLog>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "patientName",
        header: "Patient"
    },
    {
        accessorKey: "time",
        header: "Time"
    },
    {
        accessorKey: "medicineName",
        header: "Medicine"
    },
    {
        accessorKey: "dose",
        header: "Dose"
    }
]