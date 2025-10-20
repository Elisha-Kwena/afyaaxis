import Image from "next/image"
import { useSidebar } from "@/contexts/SidebarContext"
export default function ToggleButton(){
    const {toggleSidebar} = useSidebar()
    return(
        <>
        <button
        onClick={toggleSidebar}
        className="flex items-center justify-center cursor-pointer">
            <div className="w-10 h-10 relative">
                <Image
                    src="/icons/dashboard.png"
                    alt="dashboard-icon"
                    fill
                    className="object-center object-contain"
                />
            </div>
        </button>
        </>
    )
}