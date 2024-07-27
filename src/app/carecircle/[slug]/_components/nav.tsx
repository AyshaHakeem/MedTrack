"use client";

// import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import CareGivers from "./caregiver/page";
// import DailyLogs from "./today/page";
// import DisplayList from "./medicine/page";

const CareCircleNav = () => {
  //   const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const slug = pathSegments[1];
  const finalPathSegment = pathSegments[pathSegments.length - 1];
  const router = useRouter();

  const handleTabChange = (value: string) => {
    router.replace(`/carecircle/${slug}/${value}`);
  };

  return (
    <div>
      <Tabs defaultValue={finalPathSegment} onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="today">Today's MedLogs</TabsTrigger>
          <TabsTrigger value="medicine">Patients & Logs</TabsTrigger>
          <TabsTrigger value="caregiver">Caregivers</TabsTrigger>
        </TabsList>
        {/* <TabsContent value="today">
          <DailyLogs />
        </TabsContent>
        <TabsContent value="medicine">
          <DisplayList />
        </TabsContent>
        <TabsContent value="caregiver">
          <CareGivers />
        </TabsContent> */}
      </Tabs>
    </div>
  );
};

export default CareCircleNav;
