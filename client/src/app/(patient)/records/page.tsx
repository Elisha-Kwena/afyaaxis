"use client";

import Navbar from "@/components/navigation/Navbar";
import { useSidebar } from "@/contexts/SidebarContext";

export default function Records() {
  const { isOpen } = useSidebar();
  return (
    <>
      <Navbar />
      <section
        className={`p-1 transition-all min-h-screen  bg-white-200 duration-300 pt-[59px] ${
          isOpen ? "md:ml-[300px]" : "md:ml-[55px]"
        }`}
      >
        {" "}
        <div>Records Page</div>
        <div>Records Page</div>
      </section>
    </>
  );
}
