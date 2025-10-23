"use client";

import Navbar from "@/components/navigation/Navbar";
import { useSidebar } from "@/contexts/SidebarContext";
import Image from "next/image";

export default function InboxPage() {
  const title = "Inbox";
  const { isOpen } = useSidebar();
  return (
    <>
      <Navbar title={title} />
      <section
        className={`p-1 transition-all min-h-screen  bg-gray-100 duration-300 mt-[59px] overflow-hidden relative ${
          isOpen ? "md:ml-[300px]" : "md:ml-[55px]"
        }`}
      >
        <div
          className={`h-screen pb-[60px] px-1 overflow-scroll fixed right-0 transition-all duration-700 ease-in-out ${
            isOpen ? "left-[305px]" : "left-[60px]"
          }`}
        >
          {/* Inbox content */}
          <div className="w-full">
            {/*search bar and notification*/}
            <div className="flex justify-between w-full  items-center mb-4 ">
              <div>
                <form action="">
                  <input
                    type="text"
                    placeholder="Search messages..."
                    className=" p-2 w-80 rounded border border-gray-300"
                  />
                </form>
              </div>

              <div>
                {/*notifications*/}
                <div>
                  <h1>Notifications</h1>
                </div>
              </div>
            </div>
            {/*messages list and video call*/}
            <div className="flex  items-center justify-between gap-4 w-full">
              {/*messages list*/}
              <div className="w-[35%]  p-2  ">
                <div className="p-2">
                  <h1 className="font-blod text-2xl ">Recent chats </h1>
                </div>
                <div className="flex justify-start gap-4 items-center">
                  <div className="w-20 h-20 relative border border-green-500 rounded-full overflow-hidden">
                    <Image
                      src="/images/woman5.jpg"
                      alt="chat image"
                      fill
                      className=" contain "
                    />
                  </div>
                  <div className="w-20 h-20 relative border border-green-500 rounded-full overflow-hidden">
                    <Image
                      src="/images/man1.jpg"
                      alt="chat image"
                      fill
                      className=" contain "
                    />
                  </div>
                  <div className="w-20 h-20 border  relative rounded-full overflow-hidden">
                    <Image
                      src="/images/woman2.jpg"
                      alt="chat image"
                      fill
                      className=" contain "
                    />
                  </div>
                </div>
                <div className="w-full rounded shadow h-115  mb-4 bg-white mt-3">
                  <div className="flex justify-between p-2">
                    <div className="flex justify-start gap-4">
                      <h1 className="text-bold underline">chats</h1>
                      <h1 className="text-gray-400">video calls</h1>
                    </div>
                    <div>
                      <p className="text-gray-400">
                        Add new{" "}
                        <button className="rounded-full w-8 h-8  bg-blue-300 font-bold text-1xl hover:bg-blue-400">
                          +
                        </button>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <div className="flex">
                        <div className="w-10 h-10 border  relative rounded-full overflow-hidden">
                          <Image
                            src="/images/woman2.jpg"
                            alt="chat image"
                            fill
                            className=" contain "
                          />
                        </div>
                        <div>
                          <h2>cathie john</h2>
                          <p>Cardiologist</p>
                        </div>
                      </div>
                      <div> 2:55 pm</div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              {/*video call section*/}
              <div className="w-[65%] bg-white p-2 rounded h-145 shadow-md"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
