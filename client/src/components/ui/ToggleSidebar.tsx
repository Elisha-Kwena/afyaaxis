import Image from "next/image"
import { useSidebar } from "@/contexts/SidebarContext"
export default function ToggleButton(){
    const {isOpen,toggleSidebar} = useSidebar()
    return(
        <>
        <button className="flex items-center justify-center cursor-pointer">
            <div className="w-12 h-12 relative">
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