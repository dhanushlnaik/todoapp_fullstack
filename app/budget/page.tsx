"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "../Components/Tasks/Tasks";
import Budgets from "../Components/Budget/Budget";
function page() {
  const { beedget } = useGlobalState();

  

  return <Budgets title="Budget Tracker" tasks={beedget} />;
}

export default page;
