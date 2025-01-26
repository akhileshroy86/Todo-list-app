'use client'
import React from "react";
import { useParams } from 'next/navigation';
import AddOrEditTask from "@/app/components/addOrEdit";

// Updated Params interface
interface Params extends Record<string, string> {
  id: string;
}

export default function EditTask() {
  const params = useParams<Params>();  // Using updated Params type

  if (!params || !params.id) {
    // Optionally handle this case, like showing an error message or redirecting
    return <div>Task ID not found!</div>;
  }

  const { id } = params;
  return (<AddOrEditTask id={id} />);
}
