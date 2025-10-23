"use client";
import { useState } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import Navbar from "@/components/navigation/Navbar";
import Image from "next/image";
import Link from "next/link";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function Appointment() {
  const title="Appointment";
  const { isOpen } = useSidebar();

  return (
    <>
      <Navbar title={title}/>
      <main className={`p-1 transition-all min-h-screen  bg-gray-100 duration-300 mt-[59px] overflow-hidden relative ${isOpen ? "md:ml-[300px]" : "md:ml-[55px]"}`}>
        <div className={`h-screen pb-[70px] overflow-scroll fixed right-0 transition-all duration-700 ease-in-out px-1 ${isOpen?"left-[305px]":"left-[60px]"}`}>
            <div className="w-full flex items-center justify-between shadow p-2 rounded-md bg-white">
                <div className="flex items-center justify-start gap-4">
                    <div className="w-20 min-h-28 bg-green-500 rounded-md flex items-center justify-center">
                        <CheckCircleOutlineIcon className="text-white text-[40px]!"/>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-0">
                        <h1 className="font-bold text-[24px] capitalize">cardiology consultation</h1>
                        <div className="flex item-start justify-start gap-2">
                            <p className="text-md text-green-500 font-bold uppercase">completed</p>
                            <p className="text-md text-green-500 font-bold uppercase">.</p>
                            <p className="text-md text-green-500 font-bold capitalize">October 15, 2025</p>
                            <p className="text-md text-green-500 font-bold uppercase">.</p>
                            <p className="text-md text-green-500 font-bold uppercase">11:00 am</p>
                            <p className="text-md text-green-500 font-bold uppercase">-</p>
                            <p className="text-md text-green-500 font-bold uppercase">11:45 amm</p>
                        </div>
                        <div className="flex mt-2 items-center justify-start gap-3">
                            <span className="bg-blue-200 text-blue-500 p-2 rounded-md">TeleHealth</span>
                            <span className="bg-green-200 text-green-500 p-2 rounded-md">Dr. Sarah Lee</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
      
    </>
  );
}
