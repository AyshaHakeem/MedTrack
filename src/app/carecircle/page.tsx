"use client";

import { CareCircleRow, columns } from "@/types/CareCircleTypes";
import DataTable from "@/components/DataTable";
import {
  demoCarecircleList,
  getCareCircleList,
} from "@/services/api/carecircle";
import AddCareCircle from "./_components/add-care-circle-dialog";
import { useRouter } from "next/navigation";
import PageTitle from "@/components/ui/PageTitle";
import { useEffect } from "react";

const DemoPage = () => {
  //code to display api data
  const router = useRouter();
  const data = demoCarecircleList;
  let handleClick = (id: string) => router.push(`/${id}/today`);

  return (
    <div className="container mx-auto">
      <PageTitle title="Your Carecircles" />
      <AddCareCircle />
      <DataTable columns={columns} data={data} handleRowClick={handleClick} />
    </div>
  );
};

export default DemoPage;
