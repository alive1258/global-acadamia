import React from 'react'
import './Admission.css'
import { AiTwotonePhone } from 'react-icons/ai'

const Admission = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <div className="my-14 ">
        <div className="studentPic bg-fixed  ">
          <div className=" px-6 pt-24  bg-slate-500 bg-opacity-50 h-full">
            <div className="container">
              <h1 className="text-white md:text-2xl text-xl font-bold">
                Admission is Going On {currentYear}
              </h1>
              <div className="mt-4">
                <button className="bg-[#09adfe] text-[#ffffff] text-lg py-2 px-5 rounded-lg">
                  Register for Free consultation
                </button>
              </div>
              {/* -------phone------  */}
              <div className="flex items-center gap-2 mt-4 text-[#ffffff]">
                <div className="bg-[#09adfe] h-10 w-10 rounded-full flex justify-center items-center">
                  <AiTwotonePhone className="" size={25} />
                </div>
                <div className="text-[16px]  font-medium">
                  <p>+88 01611910296</p>
                  <p>+88 01799731158</p>
                </div>
              </div>
              <div>
                <h1 className="text-white md:text-2xl text-xl font-bold pt-4">
                  A World of Education Awaits You
                </h1>
              </div>
              <div>
                <h1 className="text-white md:text-2xl text-xl font-bold pt-4">
                  Study abroad from Bangladesh with 100% scholarship
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admission