import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import DoDisturbAltRoundedIcon from '@mui/icons-material/DoDisturbAltRounded';
import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
const stats=[
    {label:"upcoming",icon:AccessTimeRoundedIcon,value:3},
    {label:"completed",icon:CheckCircleOutlineRoundedIcon,value:23},
    {label:"cancelled",icon:DoDisturbAltRoundedIcon,value:1},
    {label:"pending",icon:PendingActionsRoundedIcon,value:2},
    {label:"total",icon:TrendingUpRoundedIcon,value:29}
]
export default function AppointmentStats(){

    return(
        <>
        <div className="w-full grid md:grid-cols-5 grid-cols-2 gap-3">
            {stats.map((stat,index)=>{
                let background = ""
                if (stat.label.toLocaleLowerCase().includes("upcoming")){
                    background = "bg-blue-500"
                }else if (stat.label.toLocaleLowerCase().includes("completed")){
                    background = "bg-green-500"
                }else if (stat.label.toLocaleLowerCase().includes("cancelled")){
                    background = "bg-red-600"
                }else if (stat.label.toLocaleLowerCase().includes("pending")){
                    background = "bg-orange-600"
                }else {
                    background = "bg-purple-600"
                }

                const StatIcon = stat.icon
                return(
                    <div className="bg-white rounded-md shadow p-2 flex items-center justify-start gap-2">
                        <div className={`w-1/4 h-full flex items-center justify-center rounded-md ${background} p-2`}>
                            <StatIcon className='text-white text-[34px]!'/>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-center gap-3">
                            <h2 className="text-black font-bold text-xl capitalize text-md">{stat.value}</h2>
                            <h2 className="text-black capitalize text-md">{stat.label}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}