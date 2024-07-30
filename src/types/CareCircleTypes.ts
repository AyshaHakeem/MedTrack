import { ColumnDef } from "@tanstack/react-table";
export interface iAddCareCircleForm {
  name: string;
}

export type CareCircleRow = {
  id: string;
  name: string;
  status: "pending" | "processing" | "success" | "failed";
};

export const columns: ColumnDef<CareCircleRow>[] = [
  {
    accessorKey: "index",
    header: "index",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

export interface carecircleListDTO {
  ids: string[];
  items: {
    [careCircleId: string]: {
      id: string;
      name: string;
    };
  };
}
