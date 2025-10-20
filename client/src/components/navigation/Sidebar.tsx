"use client"
import { useSidebar } from "@/contexts/SidebarContext"
export default function Sidebar(){
    const {isOpen} = useSidebar()
    return(
        <>
    <aside
      className={`fixed top-1 rounded-md p-2 bg-red-500 left-1 bottom-1 w-[300px] text-white transform  ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:w-[300px] md:translate-x-0 z-20`}>
      
    </aside>
        </>
    )
}