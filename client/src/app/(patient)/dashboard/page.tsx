"use client";
import { useSidebar } from "@/contexts/SidebarContext";
import Navbar from "@/components/navigation/Navbar";
import Image from "next/image";
import Link from "next/link";
import { shortcuts } from "@/constants/Dashboard";
import { healthSummaryCards } from "@/constants/Dashboard";
export default function DashBoard() {
  const title = "Dashboard";
  const { isOpen } = useSidebar();
  return (
    <>
      <Navbar title={title} />
      <section
        className={`p-1 transition-all min-h-screen  bg-gray-100 duration-300 mt-[59px] overflow-hidden relative ${
          isOpen ? "md:ml-[300px]" : "md:ml-[55px]"
        }`}
      >
<<<<<<< HEAD
        <div className={`h-screen pb-[60px] overflow-scroll fixed right-0 transition-all duration-700 ease-in-out ${isOpen?"left-[305px]":"left-[60px]"}`}>
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
=======
>>>>>>> 9d82bdd7f0a77bdb5da8a9923735fcc72b52a1a5
        <div
          className={`h-screen pb-[60px] overflow-scroll fixed right-0 transition-all duration-700 ease-in-out ${
            isOpen ? "left-[305px]" : "left-[60px]"
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
            className={`grid grid-cols-1 gap-2 mt-4 px-1 ${
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
          <div className="w-full px-1">
            {/* Upcoming Appointments Section */}
            <div className="mt-5 ">
              <h1 className="text-black text-2xl font-semibold">
                Upcoming Appointments
              </h1>
            </div>
            <div className="bg-white shadow rounded flex  justify-between pb-1 flex-col">
              {/* Appointment List Placeholder */}
              <div className="w-full flex items-center justify-between  ">
                <div>
                  <h1 className="text-black text-lg p-1 font-medium ">
                    Dr. sarah lee , cardiologist - oct 20,2025 3:00 PM (virtual){" "}
                  </h1>
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
              <div className="w-full mt-2 p-2">
                <button className="bg-black text-white py-2 px-4 rounded-full  shadow-md hover:bg-blue-600 mt-3">
                  View all Appointments
                </button>
              </div>
            </div>
          </div>

          {/* health SUMMARY*/}
          <div className=" flex w-full items-start justify-between mt-3 px-1">
            <div className=" w-2/3 shadow rounded-md bg-white ">
              <div className="flex flex-col  w-full p-2  mt-2 ">
                <h1 className="text-black font-bold  text-2xl capitalize">
                  health summary
                </h1>
                <div
                  className={`grid w-full grid-cols-1 gap-2 mt-4 mb-4 ${
                    isOpen
                      ? "md:grid-cols-2 lg:grid-cols-2"
                      : "md:grid-cols-2 lg:grid-cols-2"
                  }`}
                >
                  {healthSummaryCards.map((link, index) => (
                    <div
                      key={index}
                      className=" border border-black p-3  rounded  mb-2"
                    >
                      <div className="flex flex-center flex-col  items-center">
                        <div className="w-30 h-30 relative">
                          <Image
                            src={link.image.src}
                            alt={link.label}
                            fill
                            className="object-contain object-center"
                          />
                        </div>
                        <div className="ml-4">
                          <h2 className="text-black text-lg font-semibold">
                            {link.label}
                          </h2>
                          <p className="text-gray-600">{link.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="underline text-blue-500 ">view full records</p>
                </div>
              </div>
            </div>

            {/* recent activities */}
            <div className=" w-1/2 ml-2">
              <div className="bg-white shadow rounded p-4 ">
                <div>
                  <h1 className="text-black font-bold text-2xl mb-3 ">
                    Recent Activities
                  </h1>
                </div>
                <ul className="list-disc pl-5">
                  <div className="border border-black p-2 flex justify-between items-center">
                    <h3 className=" text-black  font-semibold ">
                      Consulted with Dr. Smith on Oct 1, 2025
                    </h3>
                    <p className="underline text-blue-500">view</p>
                  </div>
                  <div className="border border-black p-2 flex justify-between items-center">
                    <h3 className="text-black  font-semibold ">
                      Completed blood test on Sep 28, 2025
                    </h3>
                    <p className="underline text-blue-500">view</p>
                  </div>
                  <div className="border border-black p-2 flex justify-between items-cente">
                    <h3 className=" text-black  font-semibold ">
                      Scheduled follow-up appointment with Dr. Lee
                    </h3>
                    <p className="underline text-blue-500">view</p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div>
            {/* health tips */}
            <div className="w-full px-1 mt-3">
              <h2 className="text-black font-bold text-2xl">Health Tips</h2>
              <div className="bg-white shadow rounded p-4 mb-4">
                <h3 className="text-black mb-2  ">
                  Stay hydrated by drinking at least 8 glasses of water daily.
                </h3>
                <p className="underline text-blue-500">read more</p>
              </div>
            </div>
            {/*EMERGENCY BUTTON*/}
            <div className="flex justify-center mb-4">
              <button className="bg-red-500 w-full text-white py-6 px-4 rounded mx-1 my-2 shadow-md hover:bg-red-600">
                Emergency
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
