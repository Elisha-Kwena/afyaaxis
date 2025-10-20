"use client"
import Link from "next/link"
import Image from "next/image"
import ToggleButton from "../ui/ToggleSidebar"
import { useSidebar } from "@/contexts/SidebarContext"
export default function Navbar(){
    const {isOpen} = useSidebar()
    return(
        <>
        <header className={`flex rounded-md h-[50px] p-2 fixed top-2  right-1 shadow bg-white transition-all duration-300 ease-in-out ${isOpen?"left-[306px]":"left-[61px]"}`}>
            <nav className="w-full flex items-center justify-between">
                <div className="flex items-center justify-start gap-8">
                    <div className="flex items-center justify-start gap-2">
                        <ToggleButton/>
                        <h1 className="font-bold text-[24px] text-black">Dashboard</h1>
                    </div>
                    <Link href="" className="text-white rounded-md p-3 bg-red-600 font-bold px-8">Emergency</Link>
                </div>
                <div className="flex items-center justify-end gap-2">
                    <h1 className="text-black font-sans">Elisha Kwena</h1>
                    <div className="h-10 w-[2px] bg-black"></div>
                    <select name="" id="" className="outline:none ">
                        <option value="">EN</option>
                        <option value="">ESP</option>
                    </select>
                    <div className="h-10 w-[2px] bg-black"></div>
                    <button className="flex items-center justify-center relative w-10 h-10">
                        <Image
                            src="/icons/notifications.png"
                            alt="notifications"
                            fill
                            className="object-center object-contain"
                        />
                    </button>
                    <div className="w-10 h-10 relative rounded-full overflow-hidden ml-4">
                        <Image
                            src="/images/user.jpg"
                            alt="notifications"
                            fill
                            className="object-top object-cover"
                        />
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}