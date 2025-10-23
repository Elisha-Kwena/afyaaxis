"use client";

import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
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

import doctor1 from "../../../../../public/images/woman2.jpg"
import doctor2 from "../../../../../public/images/man4.jpg"
import doctor3 from "../../../../../public/images/woman4.jpg"
import doctor4 from "../../../../../public/images/man2.jpg"
import doctor6 from "../../../../../public/images/man3.jpg"
import doctor7 from "../../../../../public/images/woman6.jpg"
import doctor8 from "../../../../../public/images/man1.jpg"

const pastAppointments = [
      {
    "id": 101,
    "doctor": {
      "name": "Dr. Sarah Lee",
      "specialty": "Cardiologist",
      "avatar": doctor1
    },
    "date": "2025-10-15",
    "time": "11:00 AM",
    "duration": "45 minutes",
    "type": "Telehealth",
    "location": "Virtual Consultation",
    "reason": "Routine Cardiac Check-up",
    "status": "Completed",
    "notes": "BP: 118/76. Continue current medication. Next visit in 3 months.\n\n**Chief Complaint:**\n• Chest tightness (occasional during exercise, lasts 2-3 minutes)\n• No radiation to arms, neck, or jaw\n• Fatigue (more tired than usual after exercise)\n• Relieved by rest (resolves within 2-3 minutes)\n\n**Physical Examination:**\n**Cardiovascular:** Regular rhythm, S1/S2 normal, no murmurs/rubs/gallops, PMI not displaced\n**Respiratory:** Clear to auscultation bilaterally, no wheezes/rales/rhonchi, normal effort\n**Extremities:** No edema/cyanosis, peripheral pulses 2+ bilaterally, capillary refill <2s\n**Neurological:** Alert/oriented x3, CN II-XII intact, no focal deficits",
    "prescription_issued": true,
    "video_link": "https://zoom.us/j/9876543210",
    "created_at": "2025-10-10T14:20:00Z",
    "completed_at": "2025-10-15T11:45:00Z",
    "patient_name": "Rose Mwima Ouma",
    "patient_id": "6302",
    "patient_gender": "Female",
    "patient_age": "49 year 1 month 7 days",
    "guardian_name": "Dollyrose Otiato",
    "patient_phone": "0784635278",
    "vital_signs": {
      "blood_pressure": "118/76",
      "heart_rate": "72",
      "temperature": "98.6°F",
      "respiratory_rate": "16"
    },
    "medications": [
      {
        "name": "Aspirin 81mg",
        "dosage": "1 tablet daily with breakfast",
        "supply": "30 day supply",
        "refills": "11"
      },
      {
        "name": "Atorvastatin 20mg",
        "dosage": "1 tablet at bedtime",
        "supply": "90 day supply",
        "refills": "5"
      }
    ],
    "lab_results": [
      {
        "test_name": "COMPLETE BLOOD COUNT(CBC)",
        "lab": "Central Lab",
        "sample_collected": "Sarah Kim(Lab Tech ID:LK001)",
        "expected_date": "Oct 15, 2025",
        "approved_by": "Dr. Sarah Lee"
      },
      {
        "test_name": "LIPID PROFILE(Cholesterol)",
        "lab": "Central Lab",
        "sample_collected": "Sarah Kim(Lab Tech ID:LK001)",
        "expected_date": "Oct 15, 2025",
        "approved_by": "Dr. Sarah Lee"
      }
    ],
    "billing": {
      "total": "KSH 2400.00",
      "items": [
        { "description": "Telehealth consultation(45min)", "amount": "KSH 1200.00" },
        { "description": "Laboratory processing fee", "amount": "KSH 700.00" },
        { "description": "ECG Interpretation", "amount": "KSH 500.00" }
      ],
      "insurance_paid": "KSH 2400.00",
      "patient_owes": "KSH 0.00"
    }
  },
  {
    "id": 102,
    "doctor": {
      "name": "Dr. Maria Gomez",
      "specialty": "Neurologist",
      "avatar": doctor7
    },
    "date": "2025-10-18",
    "time": "2:30 PM",
    "duration": "60 minutes",
    "type": "In-Person",
    "location": "Neurology Clinic, Room 312, MedCare Hospital",
    "reason": "Migraine Consultation",
    "status": "Completed",
    "notes": "Prescribed new migraine prophylaxis. MRI scheduled for next week.\n\n**Chief Complaint:**\n• Severe headaches 3x/week lasting 12+ hours\n• Nausea and photophobia\n• Unrelieved by OTC meds\n\n**Neurological Exam:**\nNormal cranial nerves, no focal deficits, normal gait and coordination",
    "prescription_issued": true,
    "video_link": null,
    "created_at": "2025-10-12T09:45:00Z",
    "completed_at": "2025-10-18T15:30:00Z",
    "patient_name": "James Otieno",
    "patient_id": "7421",
    "patient_gender": "Male",
    "patient_age": "34 years 2 months",
    "guardian_name": "N/A",
    "patient_phone": "0721456789",
    "vital_signs": {
      "blood_pressure": "124/82",
      "heart_rate": "78",
      "temperature": "98.4°F",
      "respiratory_rate": "14"
    },
    "medications": [
      {
        "name": "Topiramate 25mg",
        "dosage": "1 tablet twice daily",
        "supply": "30 day supply",
        "refills": "3"
      }
    ],
    "lab_results": [],
    "billing": {
      "total": "KSH 3200.00",
      "items": [
        { "description": "Neurology consultation(60min)", "amount": "KSH 2500.00" },
        { "description": "MRI scheduling fee", "amount": "KSH 700.00" }
      ],
      "insurance_paid": "KSH 3200.00",
      "patient_owes": "KSH 0.00"
    }
  },
  {
    "id": 103,
    "doctor": {
      "name": "Dr. John Patel",
      "specialty": "General Physician",
      "avatar": doctor6
    },
    "date": "2025-10-20",
    "time": "9:15 AM",
    "duration": "30 minutes",
    "type": "Telehealth",
    "location": "Virtual Consultation",
    "reason": "Flu Symptoms Review",
    "status": "Completed",
    "notes": "Viral infection confirmed. Rest and hydration recommended.\n\n**Symptoms:**\nFever 101°F x 3 days, cough, sore throat, fatigue\n**Exam:** Normal lung sounds, no respiratory distress",
    "prescription_issued": false,
    "video_link": "https://meet.google.com/xyz-abcd-efgh",
    "created_at": "2025-10-19T16:30:00Z",
    "completed_at": "2025-10-20T09:45:00Z",
    "patient_name": "Mary Wanjiku",
    "patient_id": "5839",
    "patient_gender": "Female",
    "patient_age": "28 years 5 months",
    "guardian_name": "N/A",
    "patient_phone": "0712345678",
    "vital_signs": {
      "blood_pressure": "118/74",
      "heart_rate": "88",
      "temperature": "100.8°F",
      "respiratory_rate": "18"
    },
    "medications": [],
    "lab_results": [],
    "billing": {
      "total": "KSH 800.00",
      "items": [
        { "description": "Telehealth consultation(30min)", "amount": "KSH 800.00" }
      ],
      "insurance_paid": "KSH 800.00",
      "patient_owes": "KSH 0.00"
    }
  },
  {
    "id": 104,
    "doctor": {
      "name": "Dr. Emily Davis",
      "specialty": "Dermatologist",
      "avatar": doctor2
    },
    "date": "2025-10-12",
    "time": "3:45 PM",
    "duration": "25 minutes",
    "type": "In-Person",
    "location": "Dermatology Suite, Level 2, MedCare Clinic",
    "reason": "Skin Allergy Assessment",
    "status": "Completed",
    "notes": "Contact dermatitis diagnosed. Topical steroid prescribed.\n\n**Presentation:** Erythematous rash on hands and forearms\n**Plan:** Hydrocortisone 1% cream BID x 10 days",
    "prescription_issued": true,
    "video_link": null,
    "created_at": "2025-10-08T11:15:00Z",
    "completed_at": "2025-10-12T16:10:00Z",
    "patient_name": "Peter Kamau",
    "patient_id": "2914",
    "patient_gender": "Male",
    "patient_age": "41 years 8 months",
    "guardian_name": "N/A",
    "patient_phone": "0709876543",
    "vital_signs": {
      "blood_pressure": "132/86",
      "heart_rate": "76",
      "temperature": "98.2°F",
      "respiratory_rate": "15"
    },
    "medications": [
      {
        "name": "Hydrocortisone 1% cream",
        "dosage": "Apply twice daily x 10 days",
        "supply": "15g tube",
        "refills": "0"
      }
    ],
    "lab_results": [],
    "billing": {
      "total": "KSH 1200.00",
      "items": [
        { "description": "Dermatology consultation(25min)", "amount": "KSH 1200.00" }
      ],
      "insurance_paid": "KSH 1200.00",
      "patient_owes": "KSH 0.00"
    }
  },
  {
    "id": 105,
    "doctor": {
      "name": "Dr. David Wilson",
      "specialty": "Gastroenterologist",
      "avatar": doctor4
    },
    "date": "2025-10-08",
    "time": "1:20 PM",
    "duration": "50 minutes",
    "type": "In-Person",
    "location": "Gastroenterology Dept, MedCare Hospital",
    "reason": "Acid Reflux Management",
    "status": "Completed",
    "notes": "Lifestyle modifications discussed. PPI therapy continued.\n\n**Symptoms:** Burning epigastric pain 4x/week, worse after meals\n**Plan:** Continue Omeprazole 40mg daily, elevate HOB, avoid trigger foods",
    "prescription_issued": true,
    "video_link": null,
    "created_at": "2025-10-04T13:40:00Z",
    "completed_at": "2025-10-08T14:10:00Z",
    "patient_name": "Esther Njeri",
    "patient_id": "6732",
    "patient_gender": "Female",
    "patient_age": "52 years 3 months",
    "guardian_name": "N/A",
    "patient_phone": "0723456789",
    "vital_signs": {
      "blood_pressure": "128/80",
      "heart_rate": "74",
      "temperature": "98.5°F",
      "respiratory_rate": "16"
    },
    "medications": [
      {
        "name": "Omeprazole 40mg",
        "dosage": "1 tablet daily before breakfast",
        "supply": "30 day supply",
        "refills": "6"
      }
    ],
    "lab_results": [],
    "billing": {
      "total": "KSH 2200.00",
      "items": [
        { "description": "Gastroenterology consultation(50min)", "amount": "KSH 2200.00" }
      ],
      "insurance_paid": "KSH 2200.00",
      "patient_owes": "KSH 0.00"
    }
  },
  {
    "id": 106,
    "doctor": {
      "name": "Dr. Michael Chen",
      "specialty": "Orthopedic Surgeon",
      "avatar": doctor8
    },
    "date": "2025-10-05",
    "time": "10:00 AM",
    "duration": "40 minutes",
    "type": "In-Person",
    "location": "Orthopedics Clinic, Room B-15",
    "reason": "Shoulder Pain Evaluation",
    "status": "Completed",
    "notes": "Rotator cuff strain diagnosed. Physical therapy prescribed.\n\n**Presentation:** Pain with overhead activities, night pain\n**Plan:** PT 3x/week x 6 weeks, NSAID PRN",
    "prescription_issued": true,
    "video_link": null,
    "created_at": "2025-10-01T15:25:00Z",
    "completed_at": "2025-10-05T10:40:00Z",
    "patient_name": "Grace Achieng",
    "patient_id": "4187",
    "patient_gender": "Female",
    "patient_age": "38 years 11 months",
    "guardian_name": "N/A",
    "patient_phone": "0734567890",
    "vital_signs": {
      "blood_pressure": "126/78",
      "heart_rate": "70",
      "temperature": "98.3°F",
      "respiratory_rate": "14"
    },
    "medications": [
      {
        "name": "Ibuprofen 400mg",
        "dosage": "1 tablet every 8 hours as needed",
        "supply": "30 tablets",
        "refills": "1"
      }
    ],
    "lab_results": [],
    "billing": {
      "total": "KSH 1800.00",
      "items": [
        { "description": "Orthopedic consultation(40min)", "amount": "KSH 1800.00" }
      ],
      "insurance_paid": "KSH 1800.00",
      "patient_owes": "KSH 0.00"
    }
  }
];

const getAppointmentById = (id: string) => {
  return pastAppointments.find(apt => apt.id.toString() === id) || null;
};

export default function AppointmentDetails() {
  const params = useParams();
  const { isOpen } = useSidebar();
  const [appointment, setAppointment] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const id = params?.id as string;

  useEffect(() => {
    if (id) {
      const found = getAppointmentById(id);
      setAppointment(found);
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!appointment) return <div className="p-8">Appointment not found</div>;

  const isTelehealth = appointment.type === 'Telehealth';

  return (
    <>
      <Navbar title="Appointment"/>
      <main className={`p-1 transition-all min-h-screen bg-gray-100 duration-300 pt-[60px] overflow-hidden relative ${isOpen ? "md:ml-[300px]" : "md:ml-[55px]"}`}>
        <div className={`h-screen pb-[70px] overflow-scroll fixed right-0 transition-all duration-700 ease-in-out px-1 ${isOpen?"left-[305px]":"left-[60px]"}`}>
            <div className="w-full flex items-center justify-between shadow p-2 rounded-md bg-white">
                <div className="flex items-center justify-start gap-4">
                    <div className="w-20 min-h-28 bg-green-500 rounded-md flex items-center justify-center">
                        <CheckCircleOutlineIcon className="text-white text-[40px]!"/>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-0">
                        <h1 className="font-bold text-[24px] capitalize">{appointment.reason}</h1>
                        <div className="flex item-start justify-start gap-2">
                            <p className="text-md text-green-500 font-bold uppercase">{appointment.status}</p>
                            <p className="text-md text-green-500 font-bold uppercase">.</p>
                            <p className="text-md text-green-500 font-bold capitalize">
                              {new Date(appointment.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                            <p className="text-md text-green-500 font-bold uppercase">.</p>
                            <p className="text-md text-green-500 font-bold uppercase">{appointment.time}</p>
                            <p className="text-md text-green-500 font-bold uppercase">-</p>
                            <p className="text-md text-green-500 font-bold uppercase">
                              {(() => {
                                const [time, period] = appointment.time.split(' ');
                                const [h, m] = time.split(':');
                                let hours = parseInt(h);
                                const mins = parseInt(m);
                                hours += parseInt(appointment.duration);
                                const endPeriod = hours >= 12 ? 'PM' : 'AM';
                                hours = hours > 12 ? hours - 12 : hours;
                                return `${hours}:${mins.toString().padStart(2,'0')} ${endPeriod}`;
                              })()}
                            </p>
                        </div>
                        <div className="flex mt-2 items-center justify-start gap-3">
                            <span className={`bg-${isTelehealth ? 'blue' : 'green'}-200 text-${isTelehealth ? 'blue' : 'green'}-500 p-2 rounded-md`}>
                              {appointment.type}
                            </span>
                            <span className="bg-green-200 text-green-500 p-2 rounded-md">{appointment.doctor.name}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-end">
                    <h1 className="text-xl font-bold text-black">{appointment.billing.total}</h1>
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
                            <h3 className="text-black text-lg uppercase">{appointment.patient_name} ({appointment.patient_id})</h3>
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
                                    <div className="w-1/2 text-gray-500 capitalize ">{appointment.patient_gender}</div>
                                </div>
                                <div className="w-full flex items-center justify-start">
                                    <div className="w-1/2 text-black capitalize font-bold">age</div>
                                    <div className="w-1/2 text-gray-500 capitalize ">{appointment.patient_age}</div>
                                </div>
                                <div className="w-full flex items-center justify-start">
                                    <div className="w-1/2 text-black capitalize font-bold">guardian name</div>
                                    <div className="w-1/2 text-gray-500 uppercase">{appointment.guardian_name}</div>
                                </div>
                                <div className="w-full flex items-center justify-start">
                                    <div className="w-1/2 text-black capitalize font-bold">phone</div>
                                    <div className="w-1/2 text-gray-500 capitalize ">{appointment.patient_phone}</div>
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
                                    <h1 className="text-xl font-extrabold text-red-600 text-center">{appointment.vital_signs.blood_pressure}</h1>
                                    <p className="text-center text-gray-500 text-sm">Blood pressure</p>
                                </div>
                                <div className="shadow p-2 rounded-md flex flex-col items-center justify-center bg-blue-200 h-24">
                                    <h1 className="text-xl font-extrabold text-blue-600 text-center">{appointment.vital_signs.heart_rate}</h1>
                                    <p className="text-center text-gray-500 text-sm">Heart Rate</p>
                                </div>
                                <div className="shadow p-2 rounded-md flex flex-col items-center justify-center bg-green-200 h-24">
                                    <h1 className="text-xl font-extrabold text-green-600 text-center">{appointment.vital_signs.temperature}</h1>
                                    <p className="text-center text-gray-500 text-sm">Temperature</p>
                                </div>
                                <div className="shadow p-2 rounded-md flex flex-col items-center justify-center bg-purple-200 h-24">
                                    <h1 className="text-xl font-extrabold text-purple-600 text-center">{appointment.vital_signs.respiratory_rate}</h1>
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
                                    src={appointment.doctor.avatar}
                                    alt={appointment.doctor.name}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className="text-xl font-extrabold text-black">{appointment.doctor.name} (342)</h1>
                                <h1 className="text-md font-extrabold text-gray-600 capitalize">{appointment.doctor.specialty}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border p-2">
                        <h1 className="text-black font-bold capitalize">Chief Complaint & assessment</h1>
                        <div className="w-full mt-2">
                           <h1 className="text-gray-500 text-sm font-bold capitalize">symptoms reported</h1> 
                           <div className="w-full pl-4 flex flex-col gap-1" dangerouslySetInnerHTML={{ __html: appointment.notes.split('\n\n')[1]?.replace(/\n/g, '<br>') || '' }} />
                        </div>
                        <div className="w-full mt-3">
                           <h1 className="text-gray-500 text-sm font-bold capitalize">Physical Examination</h1> 
                           <div className="w-full pl-4 flex flex-col gap-1" dangerouslySetInnerHTML={{ __html: appointment.notes.split('\n\n')[2]?.replace(/\n/g, '<br>') || '' }} />
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
                            {appointment.medications.map((med: any, i: number) => (
                              <div key={i} className="rounded shadow bg-gray-100 p-2">
                                <h1 className="text-black font-bold">{med.name}</h1>
                                <p className="text-gray-400 text-sm">{med.dosage}</p>
                                <div className="flex items-center justify-start gap-2">
                                    <p className="text-gray-400 text-[12px]">{med.supply}</p>
                                    <span className="text-gray-400 font-extrabold text-[12px] flex items-center justify-center">.</span>
                                    <p className="text-gray-400 text-[12px]">Refills: {med.refills}</p>
                                </div>
                              </div>
                            ))}
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
                                    {appointment.lab_results.map((lab: any, i: number) => (
                                      <tr key={i} className="w-full border-b">
                                        <td className="text-gray-500 text-sm text-left ">{lab.test_name}</td>
                                        <td className="text-gray-500 text-sm text-left">{lab.lab}</td>
                                        <td className="text-gray-500 text-sm text-left">{lab.sample_collected}</td>
                                        <td className="text-gray-500 text-sm text-left">{lab.expected_date}</td>
                                        <td className="text-gray-500 text-sm text-left">{lab.approved_by}</td>
                                      </tr>
                                    ))}
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
                            {appointment.billing.items.map((item: any, i: number) => (
                              <div key={i} className="w-full flex items-center justify-between border-b py-4 pb-1">
                                <p className="text-black text-sm">{item.description}</p>
                                <p className="text-black font-bold font-mono">{item.amount}</p>
                              </div>
                            ))}
                        </div>
                        <div className="w-full">
                            <div className="w-full flex items-center justify-between ">
                                <p className="text-black text-xl font-extrabold">Total</p>
                                <p className="text-green-500 font-bold font-mono">{appointment.billing.total}</p>
                            </div>
                            <div className="w-full flex items-center justify-between mt-2 ">
                                <p className="text-green-500 text-sm font-extrabold">Insurance Paid</p>
                                <p className="text-green-500 font-bold font-mono">{appointment.billing.insurance_paid}</p>
                            </div>
                            <div className="w-full flex items-center justify-between ">
                                <p className="text-gray-400 text-sm font-extrabold">Total</p>
                                <p className="text-gray-400 font-bold font-mono">{appointment.billing.patient_owes}</p>
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