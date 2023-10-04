import React from 'react'
import { AiTwotonePhone } from 'react-icons/ai'
import bannerCourse from '../../../assets/image/courseBanner.jpg'

const Banner = () => {
  return (
    <>
      <div className="pt-[70px]">
        <div className="">
          <img className="w-full md:h-[300px]" src={bannerCourse} alt="" />
          <div className="relative bottom-40  text-[#ffffff] md:pl-[370px] pl-[50px]">
            <div className="flex gap-4 items-center">
              <h1 className="uppercase md:text-3xl text-2xl font-bold">
                Study in China from Bangladesh
              </h1>
            </div>
            <div className="flex items-center gap-2 pt-2 md:pl-40">
              <div className="bg-[#09adfe] h-10 w-10 rounded-full flex justify-center items-center">
                <AiTwotonePhone className="" size={25} />
              </div>
              <div className="text-[16px]  font-medium">
                <p>+88 01611910296</p>
                <p>+88 01799731158</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner