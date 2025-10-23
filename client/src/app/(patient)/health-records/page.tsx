"use client";

import Navbar from "@/components/navigation/Navbar";
import { useSidebar } from "@/contexts/SidebarContext";
import Image from "next/image";

export default function Records() {
  const title = "Health-Records";
  const { isOpen } = useSidebar();
  return (
    <>
      <Navbar title={title} />
      <section
        className={`p-1 transition-all min-h-screen  bg-gray-100 duration-300 pt-[59px] ${
          isOpen ? "md:ml-[300px]" : "md:ml-[55px]"
        }`}
      >
        <div
          className={`h-screen pb-[60px] overflow-scroll px-1 fixed right-0 transition-all duration-700 ease-in-out ${
            isOpen ? "left-[305px]" : "left-[60px]"
          }`}
        >
          <div className="w-full px-1 h-full flex flex-row ">
            <div className="w-2/3 h-full pr-1">
              <div className="flex items-center justify-between p-2">
                <div className="">
                  <h1 className="font-semibold text-green-600 text-2xl ">
                    Overview of your Health
                  </h1>
                  <h4 className="italic mt-2 text-gray-600">
                    Your health data is summarized here.
                  </h4>
                </div>
                <div></div>
              </div>

              {/*cards*/}
              <div className="w-full grid grid-cols-3 gap-2 ml-2">
                <div className="bg-white  rounded ">
                  <div>
                    <div className="flex justify-center  p-2 items-center ">
                      <div className="w-10 h-10 relative ">
                        <Image
                          src="/images/oxygenrate.png"
                          alt="profile image"
                          fill
                          className=" contain "
                        />
                      </div>
                      <p className="font-semibold "> Oxygen Rate</p>
                    </div>
                    <div>
                      <h1 className="text-black font-bold text-2xl text-center">
                        98%
                      </h1>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="bg-white rounded ">
                  <div>
                    <div className="flex justify-center  p-2 items-center ">
                      <div className="w-10 h-10 relative ">
                        <Image
                          src="/images/bloodsugar.png"
                          alt="blood sugar image"
                          fill
                          className=" contain "
                        />
                      </div>
                      <p className="font-semibold"> Blood Sugar</p>
                    </div>
                    <div>
                      <h1 className="text-black font-bold text-2xl text-center">
                        80–130 mg/dl
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded ">
                  <div>
                    <div className="flex justify-center  p-2 items-center ">
                      <div className="w-10 h-10 relative ">
                        <Image
                          src="/images/bloodpressure.png"
                          alt="blood pressure image"
                          fill
                          className=" contain "
                        />
                      </div>
                      <p className="font-semibold"> Blood Pressure</p>
                    </div>
                    <div>
                      <h1 className="text-black font-bold text-2xl text-center">
                        120/80 mmHg
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              {/*calendar*/}
              <div className=" m-2 bg-white w-full h-125 rounded shadow ">
                <div className="flex justify-between p-4">
                  <div>
                    <h2 className="text-slate-500">Checkup schedule</h2>
                  </div>
                  <div>
                    <p className="underline text-blue-500">Show more</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-around p-2">
                    <div className="p-1 w-10 rounded text-center border border-black ">
                      <h4>Tue</h4>
                      <h2>13</h2>
                    </div>
                    <div className="p-1 w-10 rounded text-center border border-black ">
                      <h4>Wed</h4>
                      <h2>14</h2>
                    </div>
                    <div className="p-1 w-10 rounded text-center border border-black ">
                      <h4>Thur</h4>
                      <h2>15</h2>
                    </div>
                    <div className="p-1 w-10 rounded text-center border border-black ">
                      <h4>Fri</h4>
                      <h2>16</h2>
                    </div>
                    <div className="p-1 w-10 rounded text-center border border-black ">
                      <h4>Sat</h4>
                      <h2>17</h2>
                    </div>
                    <div className="p-1 w-10 rounded text-center border border-black bg-blue-400">
                      <h4>Sun</h4>
                      <h2>18</h2>
                    </div>
                    <div className="p-1 w-10 rounded text-center border border-black ">
                      <h4>Mon</h4>
                      <h2>19</h2>
                    </div>
                    <div className="p-1 w-10 rounded text-center border border-black ">
                      <h4>Tue</h4>
                      <h2>20</h2>
                    </div>
                    <div className="p-1 w-10 rounded text-center border border-black ">
                      <h4>Wed</h4>
                      <h2>21</h2>
                    </div>
                    <div className="p-1 w-10 rounded text-center border border-black ">
                      <h4>Thur</h4>
                      <h2>22</h2>
                    </div>
                    <div className="p-1 w-10 rounded text-center border border-black ">
                      <h4>Fri</h4>
                      <h2>23</h2>
                    </div>
                    <div className="p-1 w-10 rounded text-center border border-black ">
                      <h4>Sun</h4>
                      <h2>24</h2>
                    </div>
                  </div>
                  <div className="flex  w-full justify-start p-2">
                    <div className="rounded w-1/2 flex justify-start items-center h-30 border border-green-500 rounded mt-2 mr-2 ">
                      <div className="relative h-25 w-25 rounded-md ml-2 mr-2 overflow-hidden">
                        <Image
                          src="/images/doc2.jpg"
                          alt="blood sugar image"
                          fill
                          className=" contain "
                        />
                      </div>
                      <div>
                        <h1 className="font-bold text-black">Dental Checkup</h1>
                        <p className="text-1xl semi-bold text-gray-700 mb-4">
                          Dr. Harry Carter
                        </p>
                        <p className="text-gray-600">10:00 AM - 11:00 AM</p>
                      </div>
                    </div>

                    <div className="rounded w-1/2 flex justify-start items-center h-30 border border-blue-500 rounded mt-2 mr-2">
                      <div className="relative h-25 w-25 ml-2 mr-2 rounded-md overflow-hidden">
                        <Image
                          src="/images/doc1.jpg"
                          alt="blood sugar image"
                          fill
                          className=" contain "
                        />
                      </div>
                      <div>
                        <h1 className="font-bold text-black">
                          Cardiac Checkup
                        </h1>
                        <p className="text-1xl semi-bold text-gray-700 mb-4">
                          Dr. Elisha Karter
                        </p>
                        <p className="text-gray-600">12:00 PM - 1:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="font-bold text-lg ml-2 mb-2">
                    Checkup History
                  </h2>
                  <table className="w-39/40 mx-auto  table-auto border-collapse border border-slate-400 ">
                    <thead className="bg-gray-200">
                      <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Doctor</th>
                        <th>Specialization</th>
                      </tr>
                    </thead>
                    <tbody className=" table-auto p-3">
                      <tr className="border-b pl-3 border-slate-400">
                        <td className="text-center">2023-10-16</td>
                        <td className="text-center">10:00 AM - 11:00 AM</td>
                        <td className="text-center">Dr. Harry Carter</td>
                        <td className="text-center">Dentist</td>
                      </tr>
                      <tr className="border-b border-slate-400">
                        <td className="text-center">2023-10-17</td>
                        <td className="text-center">12:00 PM - 1:00 PM</td>
                        <td className="text-center">Dr. Elisha Karter</td>
                        <td className="text-center">Cardiologist</td>
                      </tr>
                      <tr className="border-b border-slate-400">
                        <td className="text-center">2023-10-17</td>
                        <td className="text-center">12:00 PM - 1:00 PM</td>
                        <td className="text-center">Dr. Elisha Karter</td>
                        <td className="text-center">Cardiologist</td>
                      </tr>
                      <tr className="border-b text-center border-slate-400">
                        <td>2023-10-17</td>
                        <td>12:00 PM - 1:00 PM</td>
                        <td>Dr. Elisha Karter</td>
                        <td>Cardiologist</td>
                      </tr>
                      <tr className="border-b text-center border-slate-400">
                        <td>2023-10-17</td>
                        <td>12:00 PM - 1:00 PM</td>
                        <td>Dr. Elisha Karter</td>
                        <td>Cardiologist</td>
                      </tr>
                      <tr className="border-b text-center border-slate-400">
                        <td>2023-10-17</td>
                        <td>12:00 PM - 1:00 PM</td>
                        <td>Dr. Elisha Karter</td>
                        <td>Cardiologist</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* checkup history */}
            </div>
            <div className="w-1/3 h-70 pl-1 m-4 bg-white ml-4 h-170 rounded shadow">
              <div>
                <div className="flex justify-between mt-3 items-center">
                  <h1 className="font-bold text-green-600 text-lg p-1 ">
                    Your Heart statistic
                  </h1>
                  <p className="underline p-1 text-blue-500">
                    View Detailed Report
                  </p>
                </div>
                <div className="flex items-center justify-center mt-4">
                  <div className="relative h-90 w-90 overflow-hidden">
                    <Image
                      src="/images/heart1.png"
                      alt="heart image"
                      fill
                      className=" contain "
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-center mt-4 p-2">
                  <div className="shadow ">
                    <h1 className="font-bold">Average</h1>
                    <p>75 bpm</p>
                  </div>
                  <div className="shadow">
                    <h1 className="font-bold">Max</h1>
                    <p className="text-red-600">120 bpm</p>
                  </div>
                  <div className="shadow">
                    <h1 className="font-bold">Min</h1>
                    <p className="text-red-600">60 bpm</p>
                  </div>
                </div>
                <div>
                  <div className="relative mx-auto h-40 w-90 overflow-hidden">
                    <Image
                      src="/images/stats.jpg"
                      alt="stats image"
                      fill
                      className=" contain "
                    />
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
