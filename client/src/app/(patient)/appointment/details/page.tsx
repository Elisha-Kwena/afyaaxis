"use client";
import { useState } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import Navbar from "@/components/navigation/Navbar";
import Image from "next/image";
import Link from "next/link";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import MedicationLiquidRoundedIcon from '@mui/icons-material/MedicationLiquidRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
export default function Appointment() {
  const title="Appointment";
  const { isOpen } = useSidebar();

  return (
    <>
      <Navbar title={title}/>
      <main className={`p-1 transition-all min-h-screen  bg-gray-100 duration-300 pt-[60px] overflow-hidden relative ${isOpen ? "md:ml-[300px]" : "md:ml-[55px]"}`}>
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
                <div className="flex flex-col items-end justify-end">
                    <h1 className="text-xl font-bold text-black">KSH 1245.00</h1>
                    <p className="items-center justify-end gap-1 text-green-500">
                        <CheckRoundedIcon/>
                        <span>Insurance Paid in Full</span>
                    </p>
                </div>
            </div>

            <div className="w-full bg-white shadow rounded-sm p-2 grid md:grid-cols-2 grid-cols-1 gap-4 mt-2">
                <div className="flex flex-col gap-2">
                    <div className="w-full flex flex-col gap-2 border border-gray-700 p-1">
                        <div className="w-full p-1 flex items-center justify-between border-b">
                            <h3 className="text-black text-lg uppercase">rose mwima ouma (6302)</h3>
                            <div className="flex items-center justify-end gap-3">
                                <button className="flex items-center justify-center group cursor-pointer relative">
                                    <EditRoundedIcon className="hover:text-green-500 transition-all duration-300 ease-in-out"/>
                                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                        edit
                                    </span>
                                </button>
                                <button className="flex items-center justify-center group cursor-pointer relative">
                                    <DeleteRoundedIcon className="hover:text-red-500 transition-all duration-300 ease-in-out"/>
                                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                        delete appointment
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="w-full p-1 flex items-center justify-between border-b">
                            <div className="w-28 h-28 relative overflow-hidden rounded-md border border-gray-200">
                                <Image
                                    src="/images/placeholder.jpg"
                                    alt="patient image"
                                    fill
                                    className="object-center object-cover"
                                />
                            </div>
                            <div className="w-3/4">
                                <div className="w-full flex items-center justify-start">
                                    <div className="w-1/2 text-black capitalize font-bold">Gender</div>
                                    <div className="w-1/2 text-gray-500 capitalize ">Female</div>
                                </div>
                                <div className="w-full flex items-center justify-start">
                                    <div className="w-1/2 text-black capitalize font-bold">age</div>
                                    <div className="w-1/2 text-gray-500 capitalize ">49 year 1 month 7 days</div>
                                </div>
                                <div className="w-full flex items-center justify-start">
                                    <div className="w-1/2 text-black capitalize font-bold">guardian name</div>
                                    <div className="w-1/2 text-gray-500 uppercase">dollyrose otiato</div>
                                </div>
                                <div className="w-full flex items-center justify-start">
                                    <div className="w-1/2 text-black capitalize font-bold">phone</div>
                                    <div className="w-1/2 text-gray-500 capitalize ">0784635278</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-1">
                            <div className="w-full flex items-center justify-start gap-3">
                                <MonitorHeartRoundedIcon className="text-red-600 text-[24px]!"/>
                                <div className=" flex items-center justify-start gap-3">
                                    <h3 className="text-black text-xl font-bold capitalize">vital signs</h3>
                                    <h3 className="text-black text-xl font-bold uppercase">(11:15 am)</h3>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-4 gap-4 mt-1">
                                <div className="shadow p-2 rounded-md flex flex-col items-center justify-center bg-red-200 h-24">
                                    <h1 className="text-xl font-extrabold text-red-600 text-center">118/76</h1>
                                    <p className="text-center text-gray-500 text-sm">Blood pressure</p>
                                </div>
                                <div className="shadow p-2 rounded-md flex flex-col items-center justify-center bg-blue-200 h-24">
                                    <h1 className="text-xl font-extrabold text-blue-600 text-center">72</h1>
                                    <p className="text-center text-gray-500 text-sm">Heart Rate</p>
                                </div>
                                <div className="shadow p-2 rounded-md flex flex-col items-center justify-center bg-green-200 h-24">
                                    <h1 className="text-xl font-extrabold text-green-600 text-center">98.6°F</h1>
                                    <p className="text-center text-gray-500 text-sm">Temperature</p>
                                </div>
                                <div className="shadow p-2 rounded-md flex flex-col items-center justify-center bg-purple-200 h-24">
                                    <h1 className="text-xl font-extrabold text-purple-600 text-center">16</h1>
                                    <p className="text-center text-gray-500 text-sm">Respiratory Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border p-2">
                        <div className="w-full flex items-center justify-start gap-3 ">
                            <LocalHospitalRoundedIcon className="text-green-600 text-[28px]!"/>
                            <h3 className="text-black text-xl font-bold capitalize">Consulting doctor</h3>
                        </div>
                        <div className="w-full flex items-center justify-start gap-4 mt-1">
                            <div className="w-28 h-28 relative rounded-md overflow-hidden border border-gray-200">
                                <Image 
                                    src="/images/woman1.jpg"
                                    alt="doctor sarah lee"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className="text-xl font-extrabold text-black">Dr. Sarah Lee (342)</h1>
                                <h1 className="text-md font-extrabold text-gray-600 capitalize">Cardiologist</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border p-2">
                        <h1 className="text-black font-bold capitalize">Chief Complaint & assessment</h1>
                        <div className="w-full mt-2">
                           <h1 className="text-gray-500 text-sm font-bold capitalize">symptoms reported</h1> 
                           <div className="w-full pl-4 flex flex-col gap-1">
                            <div className="w-full flex items-start justify-start gap-0 flex-col bg-gray-100">
                                <div className="w-full border border-gray-300 p-1">
                                    <h2 className="text-blue-500">Chest tightness</h2>
                                </div>
                                <div className="w-full border border-gray-300 p-1">
                                    <p className="text-gray-500 text-sm">Occasional during exercose ,last 2-3 minutes</p>
                                </div>
                            </div>
                            <div className="w-full flex items-start justify-start gap-0 flex-col bg-gray-100">
                                <div className="w-full border border-gray-300 p-1">
                                    <h2 className="text-blue-500">No radiation</h2>
                                </div>
                                <div className="w-full border border-gray-300 p-1">
                                    <p className="text-gray-500 text-sm">Does not spread to arms, neck or jaw</p>
                                </div>
                            </div>
                            <div className="w-full flex items-start justify-start gap-0 flex-col bg-gray-100">
                                <div className="w-full border border-gray-300 p-1">
                                    <h2 className="text-blue-500">Fatigue</h2>
                                </div>
                                <div className="w-full border border-gray-300 p-1">
                                    <p className="text-gray-500 text-sm">More tired than usual, especially after exercise</p>
                                </div>
                            </div>
                            <div className="w-full flex items-start justify-start gap-0 flex-col bg-gray-100">
                                <div className="w-full border border-gray-300 p-1">
                                    <h2 className="text-blue-500">Relieved by rest</h2>
                                </div>
                                <div className="w-full border border-gray-300 p-1">
                                    <p className="text-gray-500 text-sm">Sysmptoms resolve completely within 2-3 min rest</p>
                                </div>
                            </div>
                           </div>
                        </div>
                        <div className="w-full mt-3">
                           <h1 className="text-gray-500 text-sm font-bold capitalize">Physical Examination</h1> 
                           <div className="w-full pl-4 flex flex-col gap-1">
                            <div className="w-full flex items-start justify-start gap-0 flex-col bg-gray-100">
                                <div className="w-full border border-gray-300 p-1">
                                    <h2 className="text-blue-500">Cardiovascular</h2>
                                </div>
                                <div className="w-full border border-gray-300 p-1">
                                    <ul className="w-full flex list-disc flex-col gap-1 pl-6">
                                        <li className="text-gray-500 text-sm">Regular rhythm, S1/S2 normal</li>
                                        <li className="text-gray-500 text-sm">No murmurs, rubs, or gallops</li>
                                        <li className="text-gray-500 text-sm">PMI not displaced</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full flex items-start justify-start gap-0 flex-col bg-gray-100">
                                <div className="w-full border border-gray-300 p-1">
                                    <h2 className="text-blue-500">Respiratory</h2>
                                </div>
                                <div className="w-full border border-gray-300 p-1">
                                    <ul className="w-full flex list-disc flex-col gap-1 pl-6">
                                        <li className="text-gray-500 text-sm">Clear to auscultation bilaterally</li>
                                        <li className="text-gray-500 text-sm">No wheezes, rales or rhonchi</li>
                                        <li className="text-gray-500 text-sm">Normal respiratory effort</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full flex items-start justify-start gap-0 flex-col bg-gray-100">
                                <div className="w-full border border-gray-300 p-1">
                                    <h2 className="text-blue-500">Extremeties</h2>
                                </div>
                                <div className="w-full border border-gray-300 p-1">
                                    <ul className="w-full flex list-disc flex-col gap-1 pl-6">
                                        <li className="text-gray-500 text-sm">No edema or cyanosis</li>
                                        <li className="text-gray-500 text-sm">Peripheral pulses 2+ bilaterally</li>
                                        <li className="text-gray-500 text-sm">Capillary refill in less than 2 seconds</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full flex items-start justify-start gap-0 flex-col bg-gray-100">
                                <div className="w-full border border-gray-300 p-1">
                                    <h2 className="text-blue-500">Neurological</h2>
                                </div>
                                <div className="w-full border border-gray-300 p-1">
                                    <ul className="w-full flex list-disc flex-col gap-1 pl-6">
                                        <li className="text-gray-500 text-sm">Alert and oriiented x3</li>
                                        <li className="text-gray-500 text-sm">CN II-XII intact</li>
                                        <li className="text-gray-500 text-sm">No focal motor deficits</li>
                                    </ul>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 ">
                    <div className="w-full border p-2">
                        <div className="w-full flex item-center justify-start gap-2">
                            <MedicationLiquidRoundedIcon className="text-purple-600 text-[30px]!"/>
                            <h1 className="text-black text-[18px] font-bold capitalize">medication</h1>
                        </div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="rounded shadow bg-gray-100 p-2">
                                <h1 className="text-black font-bold">Asprin 81mg</h1>
                                <p className="text-gray-400 text-sm">1 tablet daily with breakfast</p>
                                <div className="flex items-center justify-start gap-2">
                                    <p className="text-gray-400 text-[12px]">30 day supply</p>
                                    <span className="text-gray-400 font-extrabold text-[12px] flex items-center justify-center">.</span>
                                    <p className="text-gray-400 text-[12px]">Refills: 11</p>
                                </div>
                            </div>
                            <div className="rounded shadow bg-gray-100 p-2">
                                <h1 className="text-black font-bold">Atorvastatin 20mg</h1>
                                <p className="text-gray-400 text-sm">1 tablet at bedtime</p>
                                <div className="flex items-center justify-start gap-2">
                                    <p className="text-gray-400 text-[12px]">90 day supply</p>
                                    <span className="text-gray-400 font-extrabold text-[12px] flex items-center justify-center">.</span>
                                    <p className="text-gray-400 text-[12px]">Refills: 5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border p-2">
                        <div className="w-full flex item-center justify-start gap-2">
                            <ScienceRoundedIcon className="text-green-600 text-[30px]!"/>
                            <h1 className="text-black text-[18px] font-bold capitalize">Laboratory Results</h1>
                        </div>
                        <div className="w-full ">
                            <table className="w-full rounded-md ">
                                <thead className="bg-gray-300 p-2 border-b">
                                    <tr className="w-full">
                                        <td className="text-black font-bold capitalize text-left text-sm p-2">test name</td>
                                        <td className="text-black font-bold capitalize text-left text-sm p-2">lab</td>
                                        <td className="text-black font-bold capitalize text-left text-sm p-2">smaple collected</td>
                                        <td className="text-black font-bold capitalize text-left text-sm p-2">expected date</td>
                                        <td className="text-black font-bold capitalize text-left text-sm p-2">approved by</td>
                                    </tr>
                                </thead>
                                <tbody className="w-full">
                                    <tr className="w-full border-b">
                                        <td className="text-gray-500 text-sm text-left ">COMPLETE BLOOD COUNT(CBC)</td>
                                        <td className="text-gray-500 text-sm text-left">Central Lab</td>
                                        <td className="text-gray-500 text-sm text-left">Sarah Kim(Lab Tech ID:LK001)</td>
                                        <td className="text-gray-500 text-sm text-left">Oct 15, 2025</td>
                                        <td className="text-gray-500 text-sm text-left">Dr. Sarah Lee</td>
                                    </tr>
                                    <tr className="w-full">
                                        <td className="text-gray-500 text-sm text-left">LIPID PROFILE(Cholestrol)</td>
                                        <td className="text-gray-500 text-sm text-left">Central Lab</td>
                                        <td className="text-gray-500 text-sm text-left">Sarah Kim(Lab Tech ID:LK001)</td>
                                        <td className="text-gray-500 text-sm text-left">Oct 15, 2025</td>
                                        <td className="text-gray-500 text-sm text-left">Dr. Sarah Lee</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-full border p-2">
                        <div className="w-full flex item-center justify-start gap-2">
                            <ReceiptLongRoundedIcon className="text-amber-600 text-[30px]!"/>
                            <h1 className="text-black text-[18px] font-bold capitalize">Billing Summary</h1>
                        </div>
                        <div className="w-full mt-2">
                            <div className="w-full flex items-center justify-between border-b py-4 pb-1">
                                <p className="text-black text-sm">Telehealth consultation(45min)</p>
                                <p className="text-black font-bold font-mono">KSH 1200.00</p>
                            </div>
                            <div className="w-full flex items-center justify-between border-b  py-4 pb-1">
                                <p className="text-black text-sm">Laboratory processing fee</p>
                                <p className="text-black font-bold font-mono">KSH 700.00</p>
                            </div>
                            <div className="w-full flex items-center justify-between border-b  py-4 pb-1">
                                <p className="text-black text-sm">ECG Interpretation</p>
                                <p className="text-black font-bold font-mono">KSH 500.00</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full flex items-center justify-between ">
                                <p className="text-black text-xl font-extrabold">Total</p>
                                <p className="text-green-500 font-bold font-mono">KSH 2400.00</p>
                            </div>
                            <div className="w-full flex items-center justify-between mt-2 ">
                                <p className="text-green-500 text-sm font-extrabold">Insurance Paid</p>
                                <p className="text-green-500 font-bold font-mono">KSH 2400.00</p>
                            </div>
                            <div className="w-full flex items-center justify-between ">
                                <p className="text-gray-400 text-sm font-extrabold">Total</p>
                                <p className="text-gray-400 font-bold font-mono">KSH 0.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
      
    </>
  );
}
