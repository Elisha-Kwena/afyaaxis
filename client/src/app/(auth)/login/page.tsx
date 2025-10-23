'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error,setError] = useState<string | null>(null)

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError(null);
  };

  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  return (
    <>
      <div className="overflow-hidden w-full h-screen flex items-center justify-between relative">

        <div className="w-1/2 h-full bg-green-500 z-50">
          <div className="w-full p-4 flex items-center justify-start gap-3">
            <div className="w-[100px] h-[100px] bg-white relative rounded-full overflow-hidden">
              <Image
                src="/icons/logo-green.png"
                alt="afyaaxis logo"
                fill
                className="object-center object-contain"
              />
            </div>
            <h1 className="text-[52px] font-serif text-white font-extrabold">AfyaAxis</h1>
          </div>
          <div className="mt-4 w-full p-4">
            <p className="font-serif font-bold text-xl text-white">We at AfyaAxis are concerned about, you and your childrens health</p>
            <h1 className="text-xl text-white font-bold font-serif mt-4">YOUR HEALTH , OUR CONCERN</h1>
          </div>
        </div>
        <div className="w-1/2 h-full z-[100] relativeflex flex-col gap-1 relative bg-white">
          <div className="absolute w-52 rounded-l-[80px] top-0 bottom-0 bg-white -left-32 z-[100]"></div>
          <div className="absolute w-full h-full top-[10px] z-[100] -left-[500px]">
          <div className="w-[700px] h-[700px] relative">
            <Image
            src="/images/stethoscope.png"
            alt="stethoscope"
            fill
            className="object-center object-contain"
          />
          </div>
        </div>
          <div className="w-full flex items-center justify-end p-2">
            <select name="" id="" className="outline:none text-black ">
                <option value="">EN</option>
                <option value="">ESP</option>
            </select>
          </div>
          <div className="w-full flex items-center justify-center h-full">
            <div className="w-[70%]">
              <h1 className="text-left font-serif text-black font-extrabold text-[24px]">Welcome Back</h1>
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
              <form action="" className="w-full flex flex-col gap-4 mt-4">
                <div className="w-full flex items-center justify-between border rounded-md pr-2">
                  <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email" 
                  className="w-[80%] p-3 font-serif focus:outline-none text-black " 
                  placeholder="Email : "/>
                  <EmailRoundedIcon className="!text-[24px]"/>
                </div>
              <div className=" w-full flex items-center justify-between rounded-md pr-2 relative border">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  required
                  placeholder="Password : "
                  type={showPassword.password ? 'text' : 'password'}
                  className="w-[80%] p-3 font-serif focus:outline-none text-black "
                />
                <label htmlFor="password" className="absolute translate-y-3 text-white font-bold font-fira-code left-4">
                  Password
                </label>
                <button
                  type="button"
                  className="visibility-btn absolute translate-y-0 text-white font-bold font-fira-code right-2 z-50"
                  onClick={() => togglePasswordVisibility('password')}
                >
                  {showPassword.password ? <VisibilityOffRoundedIcon className='text-black !text-[20px]' /> : <VisibilityRoundedIcon className='text-black  !text-[20px]'/>}
                </button>
              </div>
                <div className="w-full mt-3">
                  <button type='submit' className="w-full p-3 text-center text-white font-bold font-serif rounded-full bg-green-500 text-xl">Login</button>
                </div>
                <div className="flex w-full items-center justify-start gap-3 mt-3">
                  <p className="font-serif text-lg text-gray-500">Don't have an account ? </p>
                  <Link href="/register" className="text-blue-600 font-bold hover:text-red-600 hover:underline">Register</Link>
                </div>
              </form>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}
