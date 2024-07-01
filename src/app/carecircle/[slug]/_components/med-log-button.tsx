"use client";

import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";

export default function AddMedLog() {
  const router = useRouter();
  const pathName = usePathname();
  const pathSegments = pathName.split("/").filter(Boolean);
  const slug = pathSegments[1];
  return (
    <Button
      variant="outline"
      className="my-10 ml-2"
      onClick={() => router.replace(`/carecircle/${slug}/new`)}
    >
      New Entry
    </Button>
  );
}
