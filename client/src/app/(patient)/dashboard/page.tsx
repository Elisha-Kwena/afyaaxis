
import { useSidebar } from "@/contexts/SidebarContext"
import Navbar from "@/components/navigation/Navbar"
export default function DashBoard(){
    const {isOpen} = useSidebar()
    return(
        <main className={`p-4 transition-all duration-300 ${isOpen ? 'md:ml-[300px]' : 'md:ml-0'}`}>
            <Navbar/>
        </main>
    )
}