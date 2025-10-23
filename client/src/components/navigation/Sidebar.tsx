"use client"
import { useSidebar } from "@/contexts/SidebarContext"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navbarlinks } from "@/constants/Navconstants"
export default function Sidebar(){
    const {isOpen} = useSidebar()
    const pathname = usePathname()
    return(
        <>
            <aside className={`fixed flex flex-col gap-1 top-1 rounded-md p-2 bg-green-500 left-1 bottom-1 text-white transform transition-all duration-700 ease-in-out ${isOpen ? 'translate-x-0 w-[300px]' : '-translate-x-full w-[55px]'} md:translate-x-0 z-20`}>
              <div className="top w-full flex items-start justify-start gap-1">
                  <div className="w-16 h-16 relative flex items-cente">
                      <Image
                          src="/icons/logo-white.png"
                          alt="afyaaxis logo"
                          fill
                          className="object-contain object-center"
                      />
                  </div>
                  <h1 className={`text-blue-500 text-[38px] font-serif transition-all duration-300 ease-in-out ${isOpen?"visible":"hidden"}`}>fyaAxis</h1>
              </div>
                <div className="w-full h-full flex flex-col items-center justify-between">
                  <div className="w-full flex flex-col gap-1">
                    {navbarlinks.slice(0, 10).map((link, index) => {
                      // Special case for index 9 (user profile)
                      const isUserProfile = index === 9;
                      const username = "elisha kwena";
                      const profile = "/images/user.jpg";
                      
                      return (
                        <Link 
                          key={index} 
                          href={isUserProfile ? username : link.href} 
                          className={`whitespace-nowrap overflow-hidden relative group w-full flex items-center gap-2 p-2 rounded-md hover:bg-white transition-all duration-300 ease-in-out ${isOpen?"justify-start":"justify-center"} ${
                            pathname === (isUserProfile ? "/" : link.href) 
                              ? "bg-white text-green-400" 
                              : "bg-transparent text-white"
                          }`}
                        >
                          <div className={`w-8 h-8 relative ${isUserProfile ?"rounded-full overflow-hidden":""}`}>
                            <Image
                              src={isUserProfile ? profile : link.icon.src}
                              alt={isUserProfile ? "User profile" : "link icon"}
                              fill
                              className={`object-center ${isUserProfile ? "object-cover":"object-contain"}`} 
                            />
                          </div>
                          <span className={`font-bold capitalize group-hover:text-green-400 transition-all duration-300 ease-in-out ${isOpen ? "visible":"hidden"} ${
                            pathname === (isUserProfile ? "/" : link.href) 
                              ? "text-green-400" 
                              : "text-white"
                          }`}>
                            {isUserProfile ? username : link.label}
                          </span>

                          <div className={`absolute transition-all duration-300 ease-in-out flex items-center justify-start left-[130%] w-[150px] h-full p-2 rounded-md group-hover:shadow ${pathname === (isUserProfile ? "/" : link.href)?"shadow":""} ${isOpen ?"hidden ":"visible opacity-0 group-hover:opacity-100 group-hover:bg-white"}`}>
                              <span className={`font-bold capitalize group-hover:text-green-400 transition-all duration-300 ease-in-out  ${pathname === (isUserProfile ? "/" : link.href) ? "text-green-400" : "text-white"}`}>{isUserProfile ? username : link.label}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="w-full flex flex-col gap-1">
                      {navbarlinks.slice(10).map((link,index)=>(
                          <Link key={index} href={link.href} className={`relative group w-full flex items-center gap-2 p-2 rounded-md hover:bg-white transition-all duration-300 ease-in-out ${isOpen?"justify-start":"justify-center"} ${pathname === link.href ? "bg-white text-green-400":"bg-transparent text-white"}`}>
                              <div className="w-6 h-6 relative">
                                  <Image
                                      src={link.icon.src}
                                      alt="link icon"
                                      fill
                                      className="object-contain object-center"
                                  />
                              </div>
                              <span className={`font-bold capitalize group-hover:text-green-400 transition-all duration-300 ease-in-out ${isOpen ? "visible":"hidden"} ${pathname === link.href ? " text-green-400":"text-white"}`}>{link.label}</span>
                               <div className={`absolute transition-all duration-300 ease-in-out flex items-center justify-start left-[130%] w-[150px] h-full p-2 rounded-md group-hover:shadow ${pathname ===  link.href?"shadow":""} ${isOpen ?"hidden ":"visible opacity-0 group-hover:opacity-100 group-hover:bg-white"}`}>
                                <span className={`font-bold capitalize group-hover:text-green-400 transition-all duration-300 ease-in-out  ${pathname === link.href ? "text-green-400" : "text-white"}`}>{link.label}</span>
                            </div>
                          </Link>
                      ))}
                  </div>
                </div>
            </aside>
        </>
    )
}