"use client"

import AddCareCircle from "@/components/carecircle/AddCareCircleDialog"

import { useSession } from "next-auth/react"


const carecircle = () => {
  const data = useSession()
  console.log('In careCC',data)
    return (
      <AddCareCircle />
    )
}

export default carecircle
