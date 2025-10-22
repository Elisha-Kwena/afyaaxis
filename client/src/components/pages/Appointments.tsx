import AppointmentStats from "./AppointmentStats"
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import AssistantDirectionRoundedIcon from '@mui/icons-material/AssistantDirectionRounded';
import VideoCameraFrontRoundedIcon from '@mui/icons-material/VideoCameraFrontRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';

import Image from "next/image";

import doctor1 from "../../../public/images/woman2.jpg"
import doctor2 from "../../../public/images/man4.jpg"
import doctor3 from "../../../public/images/woman4.jpg"
import doctor4 from "../../../public/images/man2.jpg"
import doctor6 from "../../../public/images/man3.jpg"
import doctor7 from "../../../public/images/woman6.jpg"
import doctor8 from "../../../public/images/man1.jpg"





const appointments = [
    {
      "id": 1,
      "doctor": {
        "name": "Dr. Sarah Lee",
        "specialty": "Cardiologist",
        "avatar": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face"
      },
      "date": "2025-10-25",
      "time": "10:30 AM",
      "duration": "45 minutes",
      "type": "Telehealth",
      "location": "Virtual Consultation",
      "reason": "Routine Cardiac Follow-up",
      "status": "Confirmed",
      "notes": "Patient reports improved symptoms since last visit",
      "video_link": "https://zoom.us/j/1234567890",
      "created_at": "2025-10-20T09:15:00Z",
      "updated_at": "2025-10-20T09:15:00Z"
    },
    {
      "id": 2,
      "doctor": {
        "name": "Dr. John Patel",
        "specialty": "General Physician",
        "avatar": "https://images.unsplash.com/photo-1631413257475-07d723a3a8f8?w=100&h=100&fit=crop&crop=face"
      },
      "date": "2025-10-28",
      "time": "2:15 PM",
      "duration": "30 minutes",
      "type": "In-Person",
      "location": "MedCare Clinic, Room 204, 123 Health St, Cityville",
      "reason": "Blood Pressure Medication Review",
      "status": "Confirmed",
      "notes": "Review BP readings from home monitor",
      "video_link": null,
      "created_at": "2025-10-18T14:22:00Z",
      "updated_at": "2025-10-18T14:22:00Z"
    },
    {
      "id": 3,
      "doctor": {
        "name": "Dr. Maria Gomez",
        "specialty": "Pediatrician",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      "date": "2025-10-30",
      "time": "4:45 PM",
      "duration": "60 minutes",
      "type": "In-Person",
      "location": "Pediatric Wing, MedCare Hospital, 456 Wellness Ave",
      "reason": "Annual Well-child Visit (Age 5)",
      "status": "Confirmed",
      "notes": "Vaccination schedule review and growth assessment",
      "video_link": null,
      "created_at": "2025-10-15T11:30:00Z",
      "updated_at": "2025-10-15T11:30:00Z"
    },
    {
      "id": 4,
      "doctor": {
        "name": "Dr. Emily Davis",
        "specialty": "Dermatologist",
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      },
      "date": "2025-11-01",
      "time": "11:00 AM",
      "duration": "25 minutes",
      "type": "Telehealth",
      "location": "Virtual Consultation",
      "reason": "Acne Treatment Follow-up",
      "status": "Confirmed",
      "notes": "Evaluate progress on topical treatment plan",
      "video_link": "https://meet.google.com/abc-defg-hij",
      "created_at": "2025-10-22T08:45:00Z",
      "updated_at": "2025-10-22T08:45:00Z"
    },
    {
      "id": 5,
      "doctor": {
        "name": "Dr. Michael Chen",
        "specialty": "Orthopedic Surgeon",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
      },
      "date": "2025-11-05",
      "time": "9:20 AM",
      "duration": "50 minutes",
      "type": "In-Person",
      "location": "Orthopedics Dept, Level 3, MedCare Hospital",
      "reason": "Knee Pain Assessment",
      "status": "Confirmed",
      "notes": "Patient reports persistent pain after 6 weeks",
      "video_link": null,
      "created_at": "2025-10-21T16:10:00Z",
      "updated_at": "2025-10-21T16:10:00Z"
    }
  ]


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
      "notes": "BP: 118/76. Continue current medication. Next visit in 3 months.",
      "prescription_issued": true,
      "video_link": "https://zoom.us/j/9876543210",
      "created_at": "2025-10-10T14:20:00Z",
      "completed_at": "2025-10-15T11:45:00Z"
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
      "notes": "Prescribed new migraine prophylaxis. MRI scheduled for next week.",
      "prescription_issued": true,
      "video_link": null,
      "created_at": "2025-10-12T09:45:00Z",
      "completed_at": "2025-10-18T15:30:00Z"
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
      "notes": "Viral infection confirmed. Rest and hydration recommended.",
      "prescription_issued": false,
      "video_link": "https://meet.google.com/xyz-abcd-efgh",
      "created_at": "2025-10-19T16:30:00Z",
      "completed_at": "2025-10-20T09:45:00Z"
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
      "notes": "Contact dermatitis diagnosed. Topical steroid prescribed.",
      "prescription_issued": true,
      "video_link": null,
      "created_at": "2025-10-08T11:15:00Z",
      "completed_at": "2025-10-12T16:10:00Z"
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
      "notes": "Lifestyle modifications discussed. PPI therapy continued.",
      "prescription_issued": true,
      "video_link": null,
      "created_at": "2025-10-04T13:40:00Z",
      "completed_at": "2025-10-08T14:10:00Z"
    },
    {
      "id": 106,
      "doctor": {
        "name": "Dr. Michael Chen",
        "specialty": "Orthopedic Surgeon",
        "avatar":doctor8
      },
      "date": "2025-10-05",
      "time": "10:00 AM",
      "duration": "40 minutes",
      "type": "In-Person",
      "location": "Orthopedics Clinic, Room B-15",
      "reason": "Shoulder Pain Evaluation",
      "status": "Completed",
      "notes": "Rotator cuff strain diagnosed. Physical therapy prescribed.",
      "prescription_issued": true,
      "video_link": null,
      "created_at": "2025-10-01T15:25:00Z",
      "completed_at": "2025-10-05T10:40:00Z"
    }
  ]
export default function AppointmentGrid(){
    return(
        <>
        <div className="w-full flex flex-col gap-4">
            <AppointmentStats/>
            <div className="w-full">
                <div className="w-full flex items-start gap-2 justify-start mt-3">
                    <AccessTimeRoundedIcon className="text-blue-500 tex-[30px]!"/>
                    <h1 className="text-xl text-black capitalize font-bold">Upcoming appointments</h1>
                </div>
                <div className="mt-2 w-full grid md:grid-cols-3 grid-cols-1 gap-4">
                    {appointments.slice(0,2).map((appointment,index)=>{
                        let border = ""
                        let background = ""
                        let backgroundFull = ""
                        let text = ""
                        if (appointment.type.toLocaleLowerCase() === "telehealth"){
                            border = "border-blue-500";
                            background = "bg-blue-200";
                            backgroundFull = "bg-blue-500";
                            text = "text-blue-500";
                        }else{
                            border = "border-green-500";
                            background = "bg-green-200";
                            backgroundFull = "bg-green-500";
                            text = "text-green-500";
                        }
                        return(
                            <div key={index} className={`w-full border-l-4 p-4 flex flex-col gap-2 bg-white rounded-md ${border}`}>
                                <div className="w-full flex items-start md:items-center flex-col md:flex-row md:justify-between justify-start ">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="font-bold text-xl text-black">{appointment.doctor.name}</h1>
                                        <div className="w-full flex items-center justify-start gap-2">
                                            <p className="text-md text-bold text-blue-500">{appointment.date}</p>
                                            <p className="text-md text-bold text-blue-500">.</p>
                                            <p className="text-md text-bold text-blue-500">{appointment.time}</p>
                                        </div>
                                        <span className={`text-sm rounded-full text-center p-3 py-2 ${background} ${text}`}>{appointment.type}</span>
                                    </div>
                                    <div className="text-sm text-gray-500">{appointment.reason}</div>
                                </div>
                                <div className="w-full flex items-center justify-start gap-3 mt-4">
                                    {appointment.type.toLocaleLowerCase() === "telehealth" ? (
                                        <button className={`rounded-md text-center text-white p-2 text-sm flex items-center justify-center gap-2 ${backgroundFull} px-4`}>
                                            <VideoCameraFrontRoundedIcon className="text-white"/>
                                            Join Call </button>
                                    ):(
                                        <button className={`rounded-md text-center text-white p-2 flex text-sm items-center justify-center gap-2 ${backgroundFull} px-4`}>
                                            <AssistantDirectionRoundedIcon className="text-white"/>
                                            Directions </button>
                                    )}
                                    <button className="rounded-md text-center text-white p-2 flex items-center justify-center gap-2 bg-yellow-400 px-4">Reschedule </button>
                                    <button className="rounded-md text-center text-white p-2 flex items-center justify-center gap-2 bg-gray-600 px-4">Cancel</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full flex items-start gap-2 justify-start mt-6">
                    <HistoryRoundedIcon className="text-gray-500 tex-[30px]!"/>
                    <h1 className="text-xl text-black capitalize font-bold">Past appointments</h1>
                </div>
                <div className="w-full bg-white rounded-md p-2 shadow mt-2">
                    <table className="w-full rounded-t-md overflow-hidden shadow-lg">
                        <thead className="w-full border-b border-gray-500 p-2 bg-gray-300">
                        <tr className="p-2">
                            <th className="uppercase p-3 text-sm text-left text-gray-500 font-semibold tracking-wider">DOCTOR</th>
                            <th className="uppercase p-3 text-sm text-left text-gray-500 font-semibold tracking-wider">DATE & TIME</th>
                            <th className="uppercase p-3 text-sm text-left text-gray-500 font-semibold tracking-wider">TYPE</th>
                            <th className="uppercase p-3 text-sm text-left text-gray-500 font-semibold tracking-wider">REASON</th>
                            <th className="uppercase p-3 text-sm text-left text-gray-500 font-semibold tracking-wider">STATUS</th>
                            <th className="uppercase p-3 text-sm text-left text-gray-500 font-semibold tracking-wider">ACTION</th>
                        </tr>
                        </thead>
                        <tbody className="w-full bg-white divide-y divide-gray-200">
                            {pastAppointments.map((appointment, index) => (
                                <tr key={appointment.id} className="w-full transition-colors hover:bg-green-500 hover:z-10 hover:translate-y-1 hover:shadow-2xl hover:border-transparent duration-300 ease-in-out">
                                    {/* DOCTOR COLUMN */}
                                    <td className="px-4 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 relative rounded-full overflow-hidden shadow-md">
                                            <Image
                                                src={appointment.doctor.avatar}
                                                alt={appointment.doctor.name}
                                                fill
                                                className="object-cover"
                                                sizes="48px"
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-sm font-semibold text-gray-900 truncate">
                                                {appointment.doctor.name}
                                            </h3>
                                            <p className="text-xs text-gray-500 truncate">
                                                {appointment.doctor.specialty}
                                            </p>
                                        </div>
                                    </div>
                                    </td>
                            
                                    {/* DATE & TIME COLUMN */}
                                    <td className="px-4 py-4">
                                    <div className="flex flex-col">
                                        <p className="text-sm font-medium text-gray-900">
                                            {new Date(appointment.date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </p>
                                        <p className="text-sm text-gray-500">{appointment.time}</p>
                                    </div>
                                    </td>
                                            
                                    {/* TYPE COLUMN */}
                                    <td className="px-4 py-4">
                                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                                        appointment.type === 'Telehealth' 
                                            ? 'bg-blue-100 text-blue-800' 
                                            : 'bg-green-100 text-green-800'
                                    }`}>
                                        {appointment.type}
                                    </span>
                                    </td>
                                    
                                    {/* REASON COLUMN */}
                                    <td className="px-4 py-4">
                                    <p className="text-sm text-gray-900 font-medium truncate max-w-[150px]">
                                        {appointment.reason}
                                    </p>
                                    </td>
                                    
                                    {/* STATUS COLUMN */}
                                    <td className="px-4 py-4">
                                    <span className="inline-flex px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                        {appointment.status}
                                    </span>
                                    </td>
                                    
                                    {/* ACTION COLUMN */}
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                                                View Notes
                                            </button>
                                            {appointment.prescription_issued && (
                                                <button className="text-green-600 hover:text-green-800 text-xs font-medium bg-green-50 px-2 py-1 rounded-md transition-all">
                                                    Rx Issued
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}