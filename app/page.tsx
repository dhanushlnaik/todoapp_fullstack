"use client";
import LandingText from "./Components/Landing/Landing";
import Tasks from "./Components/Tasks/Tasks";
import { useGlobalState } from "./context/globalProvider";

export default function Home() {
  const { tasks } = useGlobalState();

  return <LandingText/>;
}
