"use client";

import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";

export default function AddMedLog() {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <Button
      variant="outline"
      className="my-10 ml-2"
      onClick={() => router.push(`${pathName}/new`)}
    >
      New Entry
    </Button>
  );
}
