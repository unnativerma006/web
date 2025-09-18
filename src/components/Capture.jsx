'use client'
import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import Image from "next/image";

function Capture({setopenCam}) {
  const webcamRef = React.useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [isretake, setIsretake] = useState(false);
  
  const videoConstraints = {
    width: 4000,
    height: 4000,
    facingMode: "environment",
    
  };

  const takeSs = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // console.log(imageSrc);
    console.log(imageSrc);
    setIsretake(!isretake)
    setImageSrc(imageSrc);
    // return imageSrc;
  };


  return (
    <div className="fixed flex justify-center items-center w-screen h-screen top-0 left-0 bg-[#0002] z-10">
      <div className="w-full md:w-1/3 h-full md:h-2/3 rounded-xl p-4 bg-[#036d6c]">
        <h1 className="text-2xl font-semibold w-full text-center text-white">
          Capture Document/Image
        </h1>
        <p className="w-full text-center text-base text-white">Description</p>
        {/* <Webcam/> */}
        <div className="w-full md:w-4/5 border h-[70%]  m-auto rounded-md border-black mt-4 ">
          
          {!isretake?(
          <Webcam
            className="w-auto h-full object-cover m-auto rounded-md drop-shadow-2xl decoration-blue-500"
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            screenshotQuality={1}
            playsInline={false}
            controls={false}
          ></Webcam>):(
          <img src={imageSrc}  className="w-auto object-cover h-full m-auto rounded-md drop-shadow-2xl decoration-blue-500"/>
          )
}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={isretake?()=>{setIsretake(!isretake)}:takeSs}
            className=" cursor-pointer p-2 bg-blue-500 text-white rounded-md"
          >
            {isretake?"Retake":"Capture"}
          </button>
          <button className=" cursor-pointer p-2 bg-red-500 text-white rounded-md" onClick={()=>{setopenCam(false)}}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Capture;
