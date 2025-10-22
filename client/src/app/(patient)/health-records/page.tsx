"use client";

import Navbar from "@/components/navigation/Navbar";
import { useSidebar } from "@/contexts/SidebarContext";

export default function Records() {
  const title = "Health-Records";
  const { isOpen } = useSidebar();
  return (
    <>
      <Navbar title={title} />
      <section
        className={`p-1 transition-all min-h-screen  bg-white-200 duration-300 pt-[59px] ${
          isOpen ? "md:ml-[300px]" : "md:ml-[55px]"
        }`}
      >
        <div
          className={`h-screen pb-[60px] overflow-scroll px-1 fixed right-0 transition-all duration-700 ease-in-out ${
            isOpen ? "left-[305px]" : "left-[60px]"
          }`}
        ></div>
      </section>
    </>
  );
}
