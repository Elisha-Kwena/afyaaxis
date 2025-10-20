"use client"
import { useSidebar } from "@/contexts/SidebarContext"
import Navbar from "@/components/navigation/Navbar"
export default function DashBoard(){
    const {isOpen} = useSidebar()
    return(
        <>
            <Navbar/>
            <section className={`p-4 transition-all duration-300 pt-18 ${isOpen ? 'md:ml-[300px]' : 'md:ml-0'}`}>
                <h1 className="text-black">home page</h1>
            </section>
        </>
    )
}