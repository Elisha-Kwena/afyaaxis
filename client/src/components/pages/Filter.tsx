export default function Filters(){
    return(
        <>
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="w-full grid grid-cols-1 md:grid-cols-4 p-2 gap-4">
                    {/* date range */}
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-black">Date Range</h1>
                        <select name="" id="" className="border border-gray-700 p-2 capitalize w-full">
                            <option value="" className="text-black capitalize">all time</option>
                            <option value="" className="text-black capitalize">today</option>
                            <option value="" className="text-black capitalize">this week</option>
                            <option value="" className="text-black capitalize">this month</option>
                        </select>
                    </div>
                    {/* doctors */}
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-black">Date Range</h1>
                        <select name="" id="" className="border border-gray-700 p-2 capitalize w-full">
                            <option value="" className="text-black capitalize">all doctors</option>
                            <option value="" className="text-black capitalize">dr. sarah lee</option>
                            <option value="" className="text-black capitalize">dr. john patel</option>
                            <option value="" className="text-black capitalize">dr. maria gomez</option>
                        </select>
                    </div>
                    {/* type */}
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-black">Date Range</h1>
                        <select name="" id="" className="border border-gray-700 p-2 capitalize w-full">
                            <option value="" className="text-black capitalize">all types</option>
                            <option value="" className="text-black capitalize">in person</option>
                            <option value="" className="text-black capitalize">telehealth</option>
                        </select>
                    </div>
                    <button className="text-white font-bold text-center p-2 rounded-md cursor-pointer bg-green-500">Filter</button>
                </div>
            </div>
        </>
    )
}