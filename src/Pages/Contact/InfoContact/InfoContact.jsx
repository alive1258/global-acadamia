import React from 'react'
import sholarship3 from '../../../assets/image/scholarship3.avif'
import { AiFillYoutube, AiTwotonePhone } from 'react-icons/ai'
import { RiHomeOfficeFill } from 'react-icons/ri'
import { FaCentos, FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { GrContact } from 'react-icons/gr'
import { BiLogoLinkedin } from 'react-icons/bi'

const InfoContact = () => {
  return (
    <div className="container px-6">
      <div>
        <h1 className="md:text-3xl text-xl text-center font-bold tet text-[#000]">
          Connect with Global Academia
        </h1>
        <div className="flex pt-2 items-center justify-center gap-2">
          <AiTwotonePhone size={25} className="text-[#09adfe]" />
          <h1 className="md:text-xl text-lg font-bold text-[#09adfe]">
            Connect
          </h1>
        </div>
      </div>
      {/*       Funding Your Diploma Journey  */}
      <div className="md:py-16 pt-8 grid md:grid-cols-2 grid-cols-1 gap-8 ">
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-5">
            <div>
              <h1 className="text-2xl font-bold ">Visit Us</h1>
              <div className="pt-3">
                <p className="text-lg font-bold text-[#09adfe] flex items-center gap-2">
                  <span>
                    <RiHomeOfficeFill />
                  </span>{' '}
                  Bangladesh Office
                </p>
                <div className="pl-6 space-y-1">
                  <p>Ma Sufiya Mohol, 1st Floor</p>
                  <p>Plastic Factory Road,</p>
                  <p>Notun Vangabrai,</p>
                  <p>Sirajgnaj ,Bangladesh</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Contact Us</h1>
              <div className="pt-3">
                <div className="text-lg font-bold text-[#09adfe] flex items-center gap-2">
                  <span>
                    <RiHomeOfficeFill />
                  </span>{' '}
                  Bangladesh Office
                </div>
                <div className="pl-6 space-y-1">
                  <div className="flex items-center gap-2">
                    <AiTwotonePhone size={20} className="text-[#09adfe]" />
                    +88 01611910296
                  </div>
                  <div className="flex items-center gap-2">
                    <AiTwotonePhone size={20} className="text-[#09adfe]" />
                    +88 01799731158
                  </div>

                  <p>info@gmail.con</p>
                </div>

                <div className="flex pt-3 gap-4">
                  {/* <p className="text-white">Follow us on:</p> */}

                  <div className="bg-gray-400 hover:bg-[#28589c] text-white h-8 w-8 rounded-full flex items-center justify-center">
                    <FaFacebookF />
                  </div>
                  <div className="bg-gray-400 hover:bg-[#E1306c] text-white h-8 w-8 rounded-full flex items-center justify-center">
                    <BsInstagram />
                  </div>
                  <div className="bg-gray-400 hover:bg-[#ff0000] text-white h-8 w-8 rounded-full flex items-center justify-center">
                    <AiFillYoutube />
                  </div>
                  <div className="bg-gray-400 hover:bg-blue-700 text-white h-8 w-8 rounded-full flex items-center justify-center">
                    <BiLogoLinkedin />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-2xl text-[#09adfe] font-semibold">
            Get in Touch with Us:
          </h1>
          <div className="space-y-2 pt-3">
            <div className="flex gap-3">
              <span className="pt-1">
                <GrContact className="text-[#09adfe]" size={20} />
              </span>
              <p>
                Our commitment to providing quality education knows no borders,
                and we're here to assist students and educators from around the
                world. Don't hesitate to contact us if you have questions about
                enrollment, Study abroad, or academic support services.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="pt-1">
                <GrContact className="text-[#09adfe]" size={20} />
              </span>
              <p>
                We appreciate your interest in Global Academia's research
                initiatives. To connect with our experts or inquire about
                ongoing projects, please use the provided contact information.
                We welcome collaborations to academic advancements
              </p>
            </div>
            <div className="flex gap-3">
              <span className="pt-1">
                <GrContact className="text-[#09adfe]" size={20} />
              </span>
              <p>
                We value your feedback and inquiries at Global Academia. Feel
                free to reach out to our dedicated support team for any academic
                assistance
              </p>
            </div>
          </div>
        </div>
        {/* image traverl  */}
        <div className="">
          <img
            src={sholarship3}
            className="md:h-[490px] w-full rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default InfoContact