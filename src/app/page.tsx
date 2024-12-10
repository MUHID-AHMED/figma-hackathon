"use client"
import Image from "next/image";
import Headingbar from "./components/Headingbar";
import Promotion from "./components/promotion";

 
export default function Home() {
  return (
    <div>
    <Headingbar/>
    <Promotion/>
    </div>
  );
}
