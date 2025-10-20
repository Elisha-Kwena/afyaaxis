"use client";
import { useSidebar } from "@/contexts/SidebarContext";
import Navbar from "@/components/navigation/Navbar";
import Image from "next/image";
export default function DashBoard() {
  const { isOpen } = useSidebar();
  return (
    <>
      <Navbar />
      <section
        className={`p-2 transition-all h-screen bg-white-200 duration-300 lg:pt-18 md:pt-16 ${
          isOpen ? "md:ml-[300px]" : "md:ml-0"
        }`}
      >
        <div className="flex flex-col  md:flex-row  h-70 p-1 w-full ">
          <div className=" flex bg-green-500 shadow-lg mx-auto w-2/3 justify-around rounded">
            <div className="p-4 w-1/2  ">
              <h1 className="text-black font-bold text-4xl mb-2  ">
                WELCOME BACK !
              </h1>
              <h2 className="py-2 px-2 text-3xl">Harrison Opondo</h2>
              <button className="bg-black text-white py-2 px-4  rounded-full shadow-md hover:bg-blue-600 mt-4">
                view your profile
              </button>
            </div>

            {/* Image Section */}
            <div className="relative ">
              <img
                src="/images/user.jpg"
                alt="profile image"
                className=" border-black rounded-full w-60 h-60 mx-auto mt-3"
              />
            </div>
          </div>

          {/*calender*/}

          <div className="bg-gray-200 shadow-lg w-1/3 h-70 rounded ml-1 ">
            <img
              src="/images/calendar.jpg"
              alt="calendar"
              className="w-full h-70"
            />
          </div>
        </div>

        {/*cards*/}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 mt-4">
          <div className="bg-white shadow-md rounded flex justify-start p-4">
            {/* Card Content */}
            <div>
              <img
                src="/icons/appointment.png"
                alt="Appointments Icon"
                className="w-8 h-8 mb-2 "
              />
            </div>
            <div>
              <h2 className=" text-black text-xl p-2 font-semibold mb-2">
                Book and appointment
              </h2>
            </div>
          </div>
          <div className="bg-white shadow-md flex justify-start rounded p-4">
            {/* Card Content */}
            <div>
              <img
                src="/icons/symptoms checker.png"
                alt="Appointments Icon"
                className="w-8 h-8 mb-2"
              />
            </div>
            <div>
              <h2 className=" text-black p-2 text-xl font-semibold mb-2">
                symptoms checker
              </h2>
            </div>
          </div>
          <div className="bg-white flex justify-start shadow-md rounded p-4">
            <div>
              <img
                src="/icons/healthrecords.png"
                alt="Appointments Icon"
                className="w-8 h-8 mb-2"
              />
            </div>
            <div>
              <h2 className=" text-black p-2 text-xl font-semibold mb-2">
                Health Records
              </h2>
            </div>
          </div>
          <div className="bg-white flex justify-start shadow-md rounded p-4">
            <div>
              <img
                src="/icons/chats.png"
                alt="Appointments Icon"
                className="w-8 h-8 mb-2"
              />
            </div>
            <div>
              <h2 className=" text-black p-2 text-xl font-semibold mb-2">
                Message Doctor
              </h2>
            </div>
          </div>
          <div className="bg-white flex justify-start shadow-md rounded p-4">
            <div>
              <img
                src="/icons/billing.png"
                alt="Appointments Icon"
                className="w-8 h-8 mb-2"
              />
            </div>
            <div>
              <h2 className=" text-black p-2 text-xl font-semibold mb-2">
                Paybill
              </h2>
            </div>
          </div>
          <div className="bg-white flex justify-start shadow-md rounded p-4">
            <div>
              <img
                src="/icons/medications.png"
                alt="Appointments Icon"
                className="w-8 h-8 mb-2"
              />
            </div>
            <div>
              <h2 className=" text-black p-2 text-xl font-semibold mb-2">
                Medications
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
