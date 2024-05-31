import { ColumnDef } from "@tanstack/react-table"

// define the shape of our data.
export type CareGiver = {
  id: string,
  name: string,
  email: string
};

export const columns: ColumnDef<CareGiver>[] = [
  {
    accessorKey: "id",
    header: "Id"
  },
  {
    accessorKey: "name",
    header: "Name"
  },
  {
    accessorKey: "email",
    header: "Email"
  }
]