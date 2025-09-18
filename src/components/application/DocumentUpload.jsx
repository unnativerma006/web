"use client";
import React,{useState} from "react";
import Capture from "../Capture";

function DocumentUpload() {
    const [opencam,setopenCam]=useState(false)
    const openCamera = () => {
    setopenCam(true);
    };

  return (
    <div className="bg-gray-100 p-4">
      <div className=" bg-[#f8f8f8]  p-4 relative border-solid border-2 w-4/5 mx-auto  text-white rounded-lg shadow-lg">
        <div
          className="bg-[#036d6bd5] absolute top-0 left-0 w-full rounded-t-md text-center py-2 "
          id="special"
        >
          <h2 className="text-lg font-semibold ">DOCUMENT UPLOAD</h2>
        </div>

        <div className="mt-10 rounded-lg ">
          <div className="w-full flex flex-col rounded-lg">
            <div className=" rounded-t-lg flex flex-row w-full justify-evenly h-full uppercase items-center text-center font-bold text-lg p-2  border-[#036d6bb5] bg-transparent text-[#036d6bb5]">
              <h2 className="w-1/5">S.no.</h2>
              <h2 className="w-3/5">Document Name</h2>
              <h2 className="w-2/5">Action</h2>
            </div>
            <div className="flex flex-row w-full justify-evenly items-center text-center text-lg py-3 border-t-2 mb-2  bg-transparent text-[#036d6bb5]">
              <h2 className="w-1/5 font-semibold ">1</h2>
              <p className="w-3/5 ">Candidate Photo</p>
              <div className="w-2/5">
                <button
                  type="button"
                  className="text-base text-white font-bold p-2 bg-blue-500 rounded-full px-5 mx-5"
                  onClick={openCamera}
                >
                  Capture
                </button>
                <button
                  type="button"
                  className="text-base text-white font-bold p-2 bg-red-700 rounded-full px-5 mx-5"
                >
                  Preview
                </button>
              </div>
            </div>
            <div className="flex flex-row w-full justify-evenly items-center text-center text-lg py-3 border-t-2 mb-2  bg-transparent text-[#036d6bb5]">
              <h2 className="w-1/5 font-semibold ">2</h2>
              <p className="w-3/5 ">
                X<sup>th</sup> Marksheet
              </p>
              <div className="w-2/5">
                <button
                  type="button"
                  className="text-base text-white font-bold p-2 bg-blue-500 rounded-full px-5 mx-5"
                  onClick={openCamera}
                >
                  Capture
                </button>
                <button
                  type="button"
                  className="text-base text-white font-bold p-2 bg-red-700 rounded-full px-5 mx-5"
                >
                  Preview
                </button>
              </div>
            </div>
            <div className="flex flex-row w-full justify-evenly items-center text-center text-lg py-3 border-t-2 mb-2  bg-transparent text-[#036d6bb5]">
              <h2 className="w-1/5 font-semibold ">3</h2>
              <p className="w-3/5 ">
                XII<sup>th</sup> Marksheet
              </p>
              <div className="w-2/5">
                <button
                  type="button"
                  className="text-base text-white font-bold p-2 bg-blue-500 rounded-full px-5 mx-5"
                  onClick={openCamera}
                >
                  Capture
                </button>
                <button
                  type="button"
                  className="text-base text-white font-bold p-2 bg-red-700 rounded-full px-5 mx-5"
                >
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between mt-4 ">
          <button
            type="submit"
            className="font-semibold rounded text-base text-[#036d6bd5] border-2 border-[#036d6bd5] py-3 px-6"
          >
            Previous
          </button>
          <button
            type="submit"
            className="font-semibold rounded text-base text-white bg-[#036d6bd5] py-3 px-6"
          >
            Save & Next
          </button>
        </div>
      </div>
      {opencam && <Capture setopenCam={setopenCam}/>}
    </div>
  );
}

export default DocumentUpload;
