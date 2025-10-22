import { doctors } from "@/data/doctors"
import DoctorCard from "../ui/cards/DoctorCard"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface doctorProps{
    toggleDoctors:()=> void
}
export default function Doctors({toggleDoctors}:doctorProps){
    return(
        <>
        <div className="w-full flex flex-col">
            <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mt-2 gap-3">
                {doctors.map((doc,index)=>(
                    <DoctorCard key={index} 
                        profile_image={doc.profile_image}
                        profile_url={doc.profile_url}
                        name={doc.name}
                        rates={doc.rates}
                        reviews={doc.reviews}
                        specialization={doc.specialization}
                        experience={doc.experience}
                    />
                ))}
            </div>
            <div className="w-full flex items-center justify-center py-3">
                <button
                onClick={toggleDoctors}
                className="flex cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-600 items-center justify-center gap-3 rounded-md p-3 bg-gray-600 pr-6">
                    <CloseRoundedIcon className="text-white text-[25px]!"/>
                    <p className="text-white font-bold text-md capitalize">Hide doctors</p>
                </button>
            </div>
        </div>
        </>
    )
}