import Image from "next/image";
import Link from "next/link";
export default function LoginPage() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-between">
        <div className="w-1/2 h-full bg-green-500 z-50"></div>
        <div className="w-1/2 h-full z-[100] relativeflex flex-col gap-1">
          <div className="w-full flex items-center justify-end p-2">
            <select name="" id="" className="outline:none text-black ">
                <option value="">EN</option>
                <option value="">ESP</option>
            </select>
          </div>
          <div className="w-full flex items-center justify-center h-full">
            <div className="w-[80%]">
              <h1 className="text-left font-serif text-black font-extrabold text-[24px]">Create account</h1>
              <div className="mt-2 w-full">
                <button className="w-full flex cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out shadow-inner border border-gray-200 p-2 rounded-full items-center justify-center gap-2">
                  <div className="w-8 h-8 relative">
                    <Image
                    src="/icons/google.png"
                    alt="google oauth"
                    fill
                    className="object-contain object-center"
                  />
                  </div>
                  <span className="text-black font-serif font-bold">Continue with Google</span>
                </button>
              </div>
              <div className="w-full flex items-center justify-center gap-1 mt-6">
                <div className="w-4 h-1 bg-gray-700"></div>
                <h1 className="text-[18px] font-serif">OR</h1>
                <div className="w-4 h-1 bg-gray-700"></div>
              </div>
              <form action="" className="w-full flex flex-col gap-1">
                <div className="w-full flex items-center justify-between">
                  <input type="text" />
                </div>
              </form>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}
