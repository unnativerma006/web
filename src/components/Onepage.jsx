'use client';
import React, { useState,Suspense, lazy } from 'react'
import Instruction from './Instruction';
import OtpVerify from './OtpVerify';
const Login = lazy(() => import("./Login"))
const Registration = lazy(() => import("./Registration"))

export default function Onepage() {
  const [isLogin,setisLogin] = useState(true)
  
  return (
    <div className="bg-white">
      {/* Header */}


      {/* Main Content */}
      <main className="flex w-full p-5">
        {/* Heading and Guidelines */}
        <Instruction />

        {/* Login Form */}
        <Suspense fallback={<div>loading</div>}>
          {isLogin?<Login setisLogin={setisLogin}/>:<Registration setisLogin={setisLogin}/>}
        </Suspense>

        {/* <Registration/> */}


      </main>
    </div>
  );
}
