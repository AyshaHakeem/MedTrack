"use client";

import { CareCircleRow, columns } from "@/types/CareCircleTypes";
import DataTable from "@/components/DataTable";
import { demoCarecircleList } from "@/services/api/carecircle";
import AddCareCircle from "./components/add-care-circle-dialog";
import { useRouter } from "next/navigation";
import PageTitle from "@/components/ui/PageTitle";

async function getData(): Promise<CareCircleRow[]> {
  // Fetch data via API
  return [
    // demoCarecircleList
  ];
}

export default function DemoPage() {
  const data = demoCarecircleList;
  const router = useRouter();
  let handleClick = (id: string) => router.push(`/${id}`);

  return (
    <div className="container mx-auto">
      <PageTitle title="Your Carecircles" />
      <AddCareCircle />
      <DataTable columns={columns} data={data} handleRowClick={handleClick} />
    </div>
  );
}
