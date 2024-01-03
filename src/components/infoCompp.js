import React from "react";
import { FaTwitter } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

export default function InfoCompp() {
  
  return (
    <div className=" w-full h-[500px] bg-[#111B21] flex items-end justify-center">
      <div className="w-[1100px] h-[85%]">
        <div className="w-[100%] h-[75%] grid grid-cols-5">
          <div>
            <div className="flex justify-center mt-3">
              <img
                class="_aeok"
                alt="WhatsApp Main Logo"
                src="https://static.whatsapp.net/rsrc.php/v3/yJ/r/Qhrnh5evyPV.png"
              />
            </div>
            <div className="flex justify-center items-end h-[55%]">
              {" "}
              <div className=" w-[150px] flex mt-7 px-7 py-3 rounded-full bg-[#25D366] hover:bg-white items-center hover:cursor-pointer">
                <p className="mr-1">Download</p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="_wauiIcon__download-alternative _agnt _adid _afbl"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.75 13.75C13.75 14.1642 13.4142 14.5 13 14.5L3 14.5C2.58579 14.5 2.25 14.1642 2.25 13.75C2.25 13.3358 2.58579 13 3 13L13 13C13.4142 13 13.75 13.3358 13.75 13.75Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.7487 2C8.7487 1.58579 8.41291 1.25 7.9987 1.25C7.58448 1.25 7.2487 1.58579 7.2487 2L7.2487 9.53955L3.19233 5.51449C2.89831 5.22274 2.42344 5.22458 2.13168 5.5186C1.83993 5.81263 1.84177 6.2875 2.13579 6.57925L7.46912 11.8714C7.76154 12.1616 8.23325 12.1616 8.52567 11.8714L13.859 6.57926C14.153 6.2875 14.1549 5.81263 13.8631 5.5186C13.5714 5.22458 13.0965 5.22274 12.8025 5.51449L8.7487 9.53697L8.7487 2Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold text-sm ml-[55px]">
              What we do
            </p>
            <div className="flex justify-center ml-3">
              <ul className=" text-left py-3 text-xl font-semibold text-white ">
                <li className="w-[80px] my-5 border border-transparent hover:border-b-white hover:cursor-pointer">
                  Features
                </li>
                <li className="w-[45px] my-5  border border-transparent hover:border-b-white hover:cursor-pointer">
                  Blog
                </li>
                <li className="w-[70px] my-5  border border-transparent hover:border-b-white hover:cursor-pointer">
                  Security
                </li>
                <li className="w-[120px] my-5  border border-transparent hover:border-b-white hover:cursor-pointer">
                  For Business
                </li>
              </ul>
            </div>
          </div>
          <div className=" ">
            <p className="text-white font-semibold text-sm ml-[55px]">
              Who we are
            </p>
            <div className="flex justify-center ml-3">
              <ul className=" text-left py-3 text-xl font-semibold text-white ">
                <li className="w-[88px] my-5 border border-transparent hover:border-b-white hover:cursor-pointer">
                  About us
                </li>
                <li className="w-[70px] my-5  border border-transparent hover:border-b-white hover:cursor-pointer">
                  Careers
                </li>
                <li className="w-[121px] my-5  border border-transparent hover:border-b-white hover:cursor-pointer">
                  Brand Center
                </li>
                <li className="w-[65px] my-5  border border-transparent hover:border-b-white hover:cursor-pointer">
                  Privacy
                </li>
              </ul>
            </div>
          </div>
          <div className=" ">
            <p className="text-white font-semibold text-sm ml-[40px]">
              Use WhatsApp
            </p>
            <div className="flex justify-center ml-3">
              <ul className=" text-left py-3 text-xl font-semibold text-white ">
                <li className="w-[75px] my-5 border border-transparent hover:border-b-white hover:cursor-pointer">
                  Android
                </li>
                <li className="w-[65px] my-5  border border-transparent hover:border-b-white hover:cursor-pointer">
                  iPhone
                </li>
                <li className="w-[70px] my-5  border border-transparent hover:border-b-white hover:cursor-pointer">
                  Mac/PC
                </li>
                <li className="w-[150px] my-5  border border-transparent hover:border-b-white hover:cursor-pointer">
                  WhatsApp Web
                </li>
              </ul>
            </div>
          </div>
          <div className=" ml-3">
            <p className="text-white font-semibold text-sm ml-[20px]">
              Need help?
            </p>
            <div className="flex justify-center ml-3">
              <ul className=" text-left py-3 text-xl font-semibold text-white ">
                <li className="w-[105px] my-5 border border-transparent hover:border-b-white hover:cursor-pointer">
                  Contact Us
                </li>
                <li className="w-[110px] my-5  border border-transparent hover:border-b-white hover:cursor-pointer">
                  Help Center
                </li>
                <li className="w-[90px] my-5  border border-transparent hover:border-b-white hover:cursor-pointer">
                  Download
                </li>
                <li className="w-[185px] my-5  border border-transparent hover:border-b-white hover:cursor-pointer">
                  Security Advisories
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[25%] border border-transparent border-t-white flex  items-center ml-[40px]">
          <p className="w-[140px] text-white font-semibold text-sm">
            2024 © WhatsApp LLC
          </p>
          <p className="w-[140px] text-white font-semibold text-sm ml-3 hover:cursor-pointer">
            Terms & Privacy Policy
          </p>
          <div className="w-[30%] h-[100%] flex items-center justify-evenly ml-[40px]">
            <FaTwitter className="w-[50px] h-[50px] border p-3 rounded-full overflow-visible text-white hover:bg-[#52D366] hover:border-transparent hover:text-black hover:cursor-pointer" />
            <SiYoutube className="w-[50px] h-[50px] border p-3 rounded-full overflow-visible text-white hover:bg-[#52D366] hover:border-transparent hover:text-black hover:cursor-pointer" />
            <PiInstagramLogoFill className="w-[50px] h-[50px] border p-3 rounded-full overflow-visible text-white hover:bg-[#52D366] hover:border-transparent hover:text-black hover:cursor-pointer" />
            <FaFacebookF className="w-[50px] h-[50px] border p-3 rounded-full overflow-visible text-white hover:bg-[#52D366] hover:border-transparent hover:text-black hover:cursor-pointer" />
          </div>
          <div className="w-[200px] flex border-2 border-white px-7 py-3 rounded-full text-white items-center justify-between ml-[240px]">
            <p className="mr-1">English</p>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}
