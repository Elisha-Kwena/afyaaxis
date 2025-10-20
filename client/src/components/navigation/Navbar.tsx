"use client"
import ToggleButton from "../ui/ToggleSidebar"
export default function Navbar(){
    return(
        <>
        <header className="flex rounded-md h-[50px] p-2 fixed top-2 left-[306px] right-1 shadow bg-white">
            <nav className="w-full flex items-center justify-between">
                <div className="flex item-center justify-start gap-2">
                    <ToggleButton/>
                </div>
            </nav>
        </header>
        </>
    )
}