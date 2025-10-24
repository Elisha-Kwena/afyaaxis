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
          className={`h-screen pb-[60px] px-1 overflow-scroll fixed right-0 pb-[70px] transition-all duration-700 ease-in-out ${
            isOpen ? "left-[305px]" : "left-[60px]"
          }`}
        >
          {/* Inbox content */}
          <div className="w-full h-full flex flex-col">
            {/*search bar and notification*/}
            <div className="flex justify-between w-full  items-center ">
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
                <div className="rounded-full p-1 bg-green-400 mb-1 h-8 w-8 text center">
                  <h1 className="text-center">3</h1>
                </div>
              </div>
            </div>
            {/*messages list and video call*/}
            <div className="flex flex-1  items-start justify-between gap-4 w-full">
              {/*messages list*/}
              <div className="w-[35%] flex flex-col gap-1 h-full">
                <div className="p-2">
                  <h1 className="font-blod text-2xl ">Recent chats </h1>
                </div>
                <div className="flex justify-start gap-4 items-center">
                  <div className="w-20 h-20 relative  rounded-full overflow-hidden">
                    <Image
                      src="/images/woman5.jpg"
                      alt="chat image"
                      fill
                      className="object-top object-cover"
                    />
                  </div>
                  <div className="w-20 h-20 relative  rounded-full overflow-hidden">
                    <Image
                      src="/images/man1.jpg"
                      alt="chat image"
                      fill
                      className="object-top object-cover"
                    />
                  </div>
                  <div className="w-20 h-20 border border-green-800 relative rounded-full overflow-hidden">
                    <Image
                      src="/images/woman2.jpg"
                      alt="chat image"
                      fill
                      className="object-top object-cover"
                    />
                  </div>
                </div>
                <div className="w-full flex-1 rounded shadow bg-white mt-3">
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
                  <div className="flex shadow justify-between p-2">
                    <div className="">
                      <div className="flex gap-2">
                        <div className="w-15 h-15 border  relative rounded-full overflow-hidden">
                          <Image
                            src="/images/woman2.jpg"
                            alt="chat image"
                            fill
                            className=" object-top object-cover "
                          />
                        </div>
                        <div>
                          <h2 className="font-bold">Cathie john</h2>
                          <p className="text-gray-400 text-0.5xl">
                            Cardiologist
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="italic">
                          You will have your third injection today
                        </p>
                      </div>
                    </div>
                    <div> 2:55 pm</div>
                  </div>
                  <div className="flex shadow justify-between p-2">
                    <div className="">
                      <div className="flex gap-2">
                        <div className="w-15 h-15 border  relative rounded-full overflow-hidden">
                          <Image
                            src="/images/woman2.jpg"
                            alt="chat image"
                            fill
                            className=" object-top object-cover "
                          />
                        </div>
                        <div>
                          <h2 className="font-bold">Cathie john</h2>
                          <p className="text-gray-400 text-0.5xl">
                            Cardiologist
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="italic">
                          You will have your third injection today
                        </p>
                      </div>
                    </div>
                    <div> 2:55 pm</div>
                  </div>
                  <div className="flex shadow bg-slate-100 justify-between p-2">
                    <div className="">
                      <div className="flex gap-2">
                        <div className="w-15 h-15 border  relative rounded-full overflow-hidden">
                          <Image
                            src="/images/man2.jpg"
                            alt="chat image"
                            fill
                            className=" object-top object-cover "
                          />
                        </div>
                        <div>
                          <h2 className="font-bold">larry john</h2>
                          <p className="text-gray-400 text-0.5xl">
                            radiologist
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="italic">
                          Kindly come to the hospital for further examination
                        </p>
                      </div>
                    </div>
                    <div className="ml-[-10px]"> 1:55 pm</div>
                  </div>
                </div>
              </div>
              {/*video call section*/}
              <div className="w-[65%]  h-full bg-white p-2 rounded shadow-md">
                <div className=" flex flex-col gap-1 p-1 h-full rounded">
                  {/*header*/}
                  <div className="flex justify-between p-2">
                    <div className="">
                      <div className="flex gap-2">
                        <div className="w-15 h-15 border  relative rounded-full overflow-hidden">
                          <Image
                            src="/images/man2.jpg"
                            alt="chat image"
                            fill
                            className=" object-top object-cover "
                          />
                        </div>
                        <div>
                          <h2 className="font-bold">larry john</h2>
                          <p className="text-gray-400 text-0.5xl">
                            radiologist
                          </p>
                        </div>
                      </div>
                    </div>
                    <button>...</button>
                  </div>

                  <div className="overflow-scroll h-full w-full bg-gray-100  rounded py-1">
                    <div className="w-full flex-1">
                      <div className=" h-50 w-full  relative  overflow-hidden">
                        <Image
                          src="/images/video call.jpg"
                          alt="chat image"
                          fill
                          className=" object-top rounded-md object-contain "
                        />
                      </div>
                      <div className="">
                        <div className="flex flex-col">
                          <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            <div className="flex items-start flex-col space-x-2">
                              <div className="bg-white p-3 rounded-lg shadow max-w-xs">
                                <p className="text-sm text-gray-800">
                                  Good morning my headache is getting worse 😖?
                                </p>
                              </div>
                              <h1 className="mt-2 text-gray-400">1:05 pm</h1>
                            </div>

                            <div className="flex items-end flex-col justify-end space-x-2">
                              <div className="bg-blue-500  text-white p-3 rounded-lg shadow max-w-xs">
                                <p className="text-sm ">
                                  Good morning , Kindly come to the hospital for
                                  further Examination .
                                </p>
                              </div>
                              <h1 className="mt-2 text-gray-400">1:07 pm</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-2 bg-white flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
