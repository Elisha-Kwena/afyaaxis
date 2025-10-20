"use client";
import { useSidebar } from "@/contexts/SidebarContext";
import Navbar from "@/components/navigation/Navbar";
import Image from "next/image";
import Link from "next/link";
import { shortcuts } from "@/constants/Dashboard";
export default function DashBoard() {
  const { isOpen } = useSidebar();
  return (
    <>
      <Navbar />
      <section
        className={`p-1 transition-all h-screen bg-white-200 duration-300 pt-[59px] ${
          isOpen ? "md:ml-[300px]" : "md:ml-[55px]"
        }`}
      >
        <div className="flex flex-col  md:flex-row  p-1 w-full ">
          <div className=" flex items-center justify-between bg-green-500 h-full shadow-lg mx-auto w-2/3 rounded px-4">
            <div className="p-2 w-1/2  ">
              <h1 className="text-black font-bold text-4xl mb-2  ">
                WELCOME BACK !
              </h1>
              <h2 className="py-2 px-2 text-3xl">Harrison Opondo</h2>
              <button className="bg-black text-white py-2 px-4  rounded-full shadow-md hover:bg-blue-600 mt-4">
                view your profile
              </button>
            </div>

            {/* Image Section */}
            <div className="p-2 ">
              <div className="w-[250px] h-[250px] rounded-full overflow-hidden relative">
                <Image
                  src="/images/user.jpg"
                  alt="profile image"
                  fill
                  className="object-top object-cover"
                />
              </div>
            </div>
          </div>
          {/*calender*/}
          <div className="bg-gray-200 shadow-lg w-1/3  rounded ml-1  ">
            <div className="w-full [h-250px] relative"></div>
          </div>
        </div>

        {/*cards*/}
        <div
          className={`grid grid-cols-1 gap-2 mt-4 ${
            isOpen
              ? "md:grid-cols-4 lg:grid-cols-4"
              : "md:grid-cols-5 lg:grid-cols-5"
          }`}
        >
          {shortcuts.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="bg-white shadow-md rounded flex justify-start p-4"
            >
              {/* Card Content */}
              <div className="w-8 h-8 relative">
                <Image
                  src={link.icon.src}
                  alt={link.label}
                  fill
                  className="object-contain object-center"
                />
              </div>
              <div>
                <h2 className=" text-black text-xl p-2 font-semibold mb-2">
                  {link.label}
                </h2>
              </div>
            </Link>
          ))}
        </div>
        <div>
          {/* Upcoming Appointments Section */}
          <div className="mt-5 border">
            <h1 className="text-black text-2xl p-2 font-semibold mb-2">
              Upcoming Appointments
            </h1>
          </div>
          <div className="bg-white shadow-md rounded flex flex-col-2 ">
            {/* Appointment List Placeholder */}
            <div className="w-full p-2 ">
              <h1 className="text-black text-lg p-1 font-medium ">
                Dr. sarah lee , cardiologist - oct 20,2025 3:00 PM (virtual){" "}
              </h1>
              <button className="bg-black text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 mt-3">
                View all Appointments
              </button>
            </div>
            <div className="flex  p-4 items-center font-bold ">
              <Link href="#">
                <p className="text-blue-700 mr-4">JoinCall</p>
              </Link>
              <Link href="#">
                <p className="text-blue-700 mr-4">Reschedule</p>
              </Link>
              <div>
                <button className="text-red-500">cancel</button>
              </div>
            </div>
          </div>
        </div>

        {/* health SUMMARY*/}
        <div>
          <div>
            <div>
              <h1 className="text-black text-2xl p-2 font-semibold mb-2">
                {" "}
                Health Summary{" "}
              </h1>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
