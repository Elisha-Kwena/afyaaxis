"use client";
import { useState } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import Navbar from "@/components/navigation/Navbar";
import Image from "next/image";
import Link from "next/link";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

import Doctors from "@/components/pages/Doctors";
import Filters from "@/components/pages/Filter";
import AppointmentGrid from "@/components/pages/Appointments";
export default function Appointment() {
  const title="Appointment";
  const { isOpen } = useSidebar();
  const [showDoctors, setShowDoctors] = useState<boolean>(false)

  const toggleDoctors =()=>{
    setShowDoctors((prev)=>!prev)
  }
  return (
    <>
      <Navbar title={title}/>
      <main className={`p-1 transition-all min-h-screen  bg-gray-100 duration-300 mt-[59px] overflow-hidden relative ${isOpen ? "md:ml-[300px]" : "md:ml-[55px]"}`}>
        <div className={`h-screen pb-[70px] overflow-scroll fixed right-0 transition-all duration-700 ease-in-out px-1 ${isOpen?"left-[305px]":"left-[60px]"}`}>
            <div className="w-full">
                <h1 className="text-black font-serif">Manage your appointments and book new ones</h1>
            </div>
            <section className="w-full flex flex-col gap-2">
                <div className="w-full flex items-center justify-start gap-6 mt-2">
                    <button className="w-1/4 bg-green-500 p-2 flex items-center justify-center gap-3 rounded-md px-6 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl">
                        <AddIcon className="text-white text-[30px]!"/>
                        <span className="text-white font-serif font-bold capitalize">Book new appointment</span>
                    </button>
                    <button
                    onClick={toggleDoctors}
                    className={`w-1/4 bg-blue-500 p-2 flex items-center justify-center gap-3 rounded-md px-6 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl ${showDoctors ? "hidden":"visible"}`}>
                        <SearchIcon className="text-white text-[30px]!"/>
                        <span className="text-white font-serif font-bold capitalize">Find doctors</span>
                    </button>
                </div>
                <div className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${showDoctors ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="w-full flex items-center justify-start gap-3">
                        <MedicalServicesIcon className="text-green-500 text-[40px]!"/>
                        <h1 className="text-black font-bold capitalize">Available doctors</h1>
                    </div>
                    <Doctors toggleDoctors={toggleDoctors}/>
                </div>
            </section>
            <section className="w-full">
                <Filters/>
            </section>
            <section className="w-full mt-3">
                <AppointmentGrid/>
            </section>
        </div>
      </main>
      
    </>
  );
}
