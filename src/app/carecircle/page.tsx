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
import { useEffect, useState } from "react";

const DemoPage = () => {
  const [careCircleList, setCareCircleList] = useState(null);
  useEffect(() => {
    let fetchCareCircleList = async () => {
      const apiData = await getCareCircleList();
      setCareCircleList(apiData);
    };
    fetchCareCircleList();
  }, []);

  //code to display api data
  const router = useRouter();
  let handleClick = (id: string) => router.push(`/${id}/today`);

  return (
    <div className="container mx-auto">
      <PageTitle title="Your Carecircles" />
      <AddCareCircle />

      {careCircleList !== null ? (
        <DataTable
          columns={columns}
          data={careCircleList}
          handleRowClick={handleClick}
        />
      ) : (
        <>
          <h4>Create new carecircle!</h4>
        </>
      )}
    </div>
  );
};

export default DemoPage;
