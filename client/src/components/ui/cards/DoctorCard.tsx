import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';



interface doctorProps{
    profile_image:string | StaticImageData;
    profile_url:string;
    name:string;
    rates?:number;
    reviews?:number;
    specialization:string;
    experience:string;
}
export default function DoctorCard({profile_image,profile_url,name,rates,reviews,specialization,experience}:doctorProps){
    let background = ""
    let lightback = ""
    let text = ""
    let border = ""

    if (specialization.toLocaleLowerCase().includes("cardio")){
        background = "bg-blue-500";
        lightback= "bg-blue-200";
        text = "text-blue-500";
        border = "border-blue-500";
    }
    else if (specialization.toLocaleLowerCase().includes("neuro")){
        background = "bg-green-500";
        lightback= "bg-green-200";
        text = "text-green-500";
        border = "border-green-500";
    }
    else if (specialization.toLocaleLowerCase().includes("pedia")){
        background = "bg-purple-500";
        lightback= "bg-purple-200";
        text = "text-purple-500";
        border = "border-purple-500";
    }
    else if (specialization.toLocaleLowerCase().includes("surgeon")){
        background = "bg-red-500";
        lightback= "bg-red-200";
        text = "text-red-500";
        border = "border-red-500";
    }
    else if (specialization.toLocaleLowerCase().includes("derma")){
        background = "bg-yellow-500";
        lightback= "bg-yellow-200";
        text = "text-yellow-500";
        border = "border-yellow-500";
    }
    else if (specialization.toLocaleLowerCase().includes("gastro")){
        background = "bg-orange-500";
        lightback= "bg-orange-200";
        text = "text-orange-500";
        border = "border-orange-500";
    }
    else{
        background = "bg-green-500";
        lightback= "bg-green-200";
        text = "text-green-500";
        border = "border-green-500";
    }


    return(
        <>
            <div className={`bg-white p-4 rounded-lg shadow border-l-4 ${border} hover:shadow-lg transition-all duration-300 flex flex-col`}>
                <div className="w-full flex items-center justify-start gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden relative">
                        <Image
                            src={profile_image}
                            alt={name}
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                    <div className="flex items-start justify-center gap-1 flex-col">
                        <h1 className="text-black font-bold font-mono">{name}</h1>
                        <div className={`flex items-center justify-center px-4 py-1 rounded-full ${lightback}`}>
                            <p className={`${text} text-sm`}>{specialization}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full pt-3">
                    <p className="text-black text-md">{experience}</p>
                </div>
                <div className="mt-1 flex-1 w-full flex items-center justify-start gap-3">
                    <div className="flex items-center justify-start">
                        {Array.from({length:5}).map((_,index)=>(
                            <span key={index} className="flex items-center justify-center">
                                <StarIcon className="text-yellow-300"/>
                            </span>
                        ))}
                    </div>
                    <div className="text-black">{rates}</div>
                    <div className="text-black">{`(${reviews})`}</div>
                </div>
                <div className="mt-2 flex items-center justify-between gap-3">
                    <button className={`w-1/2 text-white capitalize font-bold text-center p-2 rounded-md ${background}`}>Book now</button>
                    <Link href={profile_url} className="w-1/2 text-black capitalize font-bold text-center p-2 rounded-md bg-gray-200">View Profile</Link>
                </div>
            </div>
        </>
    )
}