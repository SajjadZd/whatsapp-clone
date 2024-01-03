import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
  const [Features, setFeatures] = useState(true);
  return (
    <>
      <div className="relative z-10">
        <div className="fixed w-screen">
          <div
            className={`flex ${
              !Features ? "bg-white" : "bg-[#FCF5EB] "
            } justify-between`}
          >
            <div className="w-[22%] p-6">
              <a href="https://www.whatsapp.com/">
                <img
                  className="w-[150px] ml-5 hover:cursor-pointer"
                  src="	https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png"
                  alt="Watsapp main page"
                />
              </a>
            </div>
            <div className="w-[58%] flex justify-center items-center ">
              <div className="w-[800px]">
                <ul className="flex justify-between  text-lg">
                  <li
                    className="flex hover:cursor-pointer border border-transparent border-b-2 hover:border-b-[#25D366]"
                    onClick={() => {
                      setFeatures(!Features);
                    }}
                  >
                    Features
                    <IoIosArrowDown
                      className={`mt-2  ${Features ? "rotate-180" : null}`}
                    />
                  </li>
                  <li className="hover:cursor-pointer border border-transparent border-b-2 hover:border-b-[#25D366]">
                    Privacy
                  </li>
                  <li className="hover:cursor-pointer border border-transparent border-b-2 hover:border-b-[#25D366]">
                    Help Center
                  </li>
                  <li className="hover:cursor-pointer border border-transparent border-b-2 hover:border-b-[#25D366]">
                    Blog
                  </li>
                  <li className="hover:cursor-pointer border border-transparent border-b-2 hover:border-b-[#25D366]">
                    For Business
                  </li>
                  <li className="hover:cursor-pointer border border-transparent border-b-2 hover:border-b-[#25D366]">
                    WhatsApp Web
                  </li>
                  <li className="hover:cursor-pointer border border-transparent border-b-2 hover:border-b-[#25D366]">
                    Download
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[20%] flex items-center justify-center">
              <a href="https://www.whatsapp.com/download" target="_blank">
                <div className="flex border border-black px-7 py-3 rounded-full bg-[#25D366] hover:bg-black hover:text-white items-center">
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
              </a>
            </div>
          </div>
          {!Features ? (
            <div className="w-screen h-[280px] bg-white flex flex-wrap justify-center items-center">
              <div className="w-[230px] h-[225px] border border-gray-300 rounded-[20px] hover:bg-[#25D366] hover:cursor-pointer group hover:border-black mr-5">
                <div className=" flex  ml-4 mt-5 rounded-full p-2 w-[35px] justify-center bg-[#25D366]  group-hover:bg-black">
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="_wauiIcon__privacy _afoj"
                  >
                    <path
                      className=" group-hover:fill-[#25D366]"
                      d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM5 7V5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7H5Z"
                      fill="white "
                    ></path>
                  </svg>
                </div>
                <div className="text-2xl ml-4 mt-3">
                  <p>Message Privately</p>
                </div>
                <div className="ml-4 mt-3">
                  <p>End-to-end encyption and privacy controls.</p>
                </div>
                <div className="ml-4 mt-3">
                  <FaArrowRight />
                </div>
              </div>{" "}
              <div className="w-[230px] h-[225px] border border-gray-300 rounded-[20px] hover:bg-[#25D366]  hover:cursor-pointer group hover:border-black mr-5">
                <div className=" flex  ml-4 mt-5 rounded-full p-2 w-[35px] justify-center bg-[#25D366]  group-hover:bg-black">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="_wauiIcon__globe-alt _afoj"
                  >
                    <path
                      className=" group-hover:fill-[#25D366]"
                      d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0ZM9 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L7 13v1c0 1.1.9 2 2 2v1.93Zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H6V8h2c.55 0 1-.45 1-1V5h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <div className="text-2xl ml-4 mt-3">
                  <p>Stay connected</p>
                </div>
                <div className="ml-4 mt-3">
                  <p>Messages and calls for free* around the workd.</p>
                </div>
                <div className="ml-4 mt-3">
                  <FaArrowRight />
                </div>
              </div>{" "}
              <div className="w-[230px] h-[225px] border border-gray-300 rounded-[20px] hover:bg-[#25D366]  hover:cursor-pointer group hover:border-black mr-5">
                <div className=" flex  ml-4 mt-5 rounded-full p-2 w-[35px] justify-center bg-[#25D366]  group-hover:bg-black">
                  <svg
                    width="24"
                    height="13"
                    viewBox="0 0 24 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="_wauiIcon__communities _afoj"
                  >
                    <path
                      className=" group-hover:fill-[#25D366]"
                      d="M7.00049 5H5.00049V3C5.00049 2.45 4.55049 2 4.00049 2C3.45049 2 3.00049 2.45 3.00049 3V5H1.00049C0.450488 5 0.000488281 5.45 0.000488281 6C0.000488281 6.55 0.450488 7 1.00049 7H3.00049V9C3.00049 9.55 3.45049 10 4.00049 10C4.55049 10 5.00049 9.55 5.00049 9V7H7.00049C7.55049 7 8.00049 6.55 8.00049 6C8.00049 5.45 7.55049 5 7.00049 5ZM18.0005 6C19.6605 6 20.9905 4.66 20.9905 3C20.9905 1.34 19.6605 0 18.0005 0C17.6805 0 17.3705 0.0499999 17.0905 0.14C17.6605 0.95 17.9905 1.93 17.9905 3C17.9905 4.07 17.6505 5.04 17.0905 5.86C17.3705 5.95 17.6805 6 18.0005 6ZM13.0005 6C14.6605 6 15.9905 4.66 15.9905 3C15.9905 1.34 14.6605 0 13.0005 0C11.3405 0 10.0005 1.34 10.0005 3C10.0005 4.66 11.3405 6 13.0005 6ZM13.0005 8C11.0005 8 7.00049 9 7.00049 11V12C7.00049 12.55 7.45049 13 8.00049 13H18.0005C18.5505 13 19.0005 12.55 19.0005 12V11C19.0005 9 15.0005 8 13.0005 8ZM19.6205 8.16C20.4505 8.89 21.0005 9.82 21.0005 11V12.5C21.0005 12.67 20.9805 12.84 20.9505 13H23.5005C23.7805 13 24.0005 12.78 24.0005 12.5V11C24.0005 9.46 21.6305 8.51 19.6205 8.16Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <div className="text-2xl ml-4 mt-3">
                  <p>Build community</p>
                </div>
                <div className="ml-4 mt-3">
                  <p>Group conversations made simple.</p>
                </div>
                <div className="ml-4 mt-3">
                  <FaArrowRight />
                </div>
              </div>{" "}
              <div className="w-[230px] h-[225px] border border-gray-300 rounded-[20px] p-1 hover:bg-[#25D366]  hover:cursor-pointer group hover:border-black mr-5">
                <div className=" flex  ml-4 mt-5 rounded-full p-2 w-[35px] justify-center bg-[#25D366]  group-hover:bg-black">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="_wauiIcon__smileFace _afoj"
                  >
                    <path
                      className=" group-hover:fill-[#25D366]"
                      d="M8.99149 0C4.02349 0 0.000488281 4.032 0.000488281 9C0.000488281 13.968 4.02349 18 8.99149 18C13.9685 18 18.0005 13.968 18.0005 9C18.0005 4.032 13.9685 0 8.99149 0ZM5.85049 5.4C6.59749 5.4 7.20049 6.003 7.20049 6.75C7.20049 7.497 6.59749 8.1 5.85049 8.1C5.10349 8.1 4.50049 7.497 4.50049 6.75C4.50049 6.003 5.10349 5.4 5.85049 5.4ZM13.2395 11.448C12.4205 13.203 10.8365 14.4 9.00049 14.4C7.16449 14.4 5.58049 13.203 4.76149 11.448C4.61749 11.151 4.83349 10.8 5.16649 10.8H12.8345C13.1675 10.8 13.3835 11.151 13.2395 11.448ZM12.1505 8.1C11.4035 8.1 10.8005 7.497 10.8005 6.75C10.8005 6.003 11.4035 5.4 12.1505 5.4C12.8975 5.4 13.5005 6.003 13.5005 6.75C13.5005 7.497 12.8975 8.1 12.1505 8.1Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <div className="text-2xl ml-4 mt-3">
                  <p>Express yourself</p>
                </div>
                <div className="ml-4 mt-3">
                  <p>Say it with stickers,voice, GIFs and more.</p>
                </div>
                <div className="ml-4 mt-3">
                  <FaArrowRight />
                </div>
              </div>{" "}
              <div className="w-[240px] h-[225px] border border-gray-300 rounded-[20px] hover:bg-[#25D366] hover:cursor-pointer group hover:border-black mr-5">
                <div className=" flex  ml-4 mt-5 rounded-full p-2 w-[35px] justify-center bg-[#25D366] group-hover:bg-black ">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="_wauiIcon__store _afoj"
                  >
                    <path
                      className=" group-hover:fill-[#25D366]"
                      d="M19.8951 5.89L18.8451 1.52C18.6251 0.62 17.8451 0 16.9351 0H14.7251H12.7151H10.9951H8.99512H7.27512H5.25512H3.04512C2.14512 0 1.35512 0.63 1.14512 1.52L0.0951238 5.89C-0.144876 6.91 0.0751239 7.95 0.715124 8.77C0.795124 8.88 0.905124 8.96 0.995124 9.06V16C0.995124 17.1 1.89512 18 2.99512 18H16.9951C18.0951 18 18.9951 17.1 18.9951 16V9.06C19.0851 8.97 19.1951 8.88 19.2751 8.78C19.9151 7.96 20.1451 6.91 19.8951 5.89ZM5.01512 2L4.43512 6.86C4.35512 7.51 3.83512 8 3.22512 8C2.73512 8 2.42512 7.71 2.29512 7.53C2.03512 7.2 1.94512 6.77 2.04512 6.36L3.04512 2H5.01512ZM16.9051 1.99L17.9551 6.36C18.0551 6.78 17.9651 7.2 17.7051 7.53C17.5651 7.71 17.2651 8 16.7651 8C16.1551 8 15.6251 7.51 15.5551 6.86L14.9751 2L16.9051 1.99ZM13.5051 6.52C13.5551 6.91 13.4351 7.3 13.1751 7.59C12.9451 7.85 12.6251 8 12.2151 8C11.5451 8 10.9951 7.41 10.9951 6.69V2H12.9551L13.5051 6.52ZM8.99512 6.69C8.99512 7.41 8.44512 8 7.70512 8C7.36512 8 7.05512 7.85 6.81512 7.59C6.56512 7.3 6.44512 6.91 6.48512 6.52L7.03512 2H8.99512V6.69ZM15.9951 16H3.99512C3.44512 16 2.99512 15.55 2.99512 15V9.97C3.07512 9.98 3.14512 10 3.22512 10C4.09512 10 4.88512 9.64 5.46512 9.05C6.06512 9.65 6.86512 10 7.77512 10C8.64512 10 9.42512 9.64 10.0051 9.07C10.5951 9.64 11.3951 10 12.2951 10C13.1351 10 13.9351 9.65 14.5351 9.05C15.1151 9.64 15.9051 10 16.7751 10C16.8551 10 16.9251 9.98 17.0051 9.97V15C16.9951 15.55 16.5451 16 15.9951 16Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <div className="text-2xl ml-4 mt-3 ">
                  <p>WhatsApp business</p>
                </div>
                <div className="ml-4 mt-3">
                  <p>Reach your customers from anywhere.</p>
                </div>
                <div className="ml-4 mt-3">
                  <FaArrowRight className=" rotate-[300deg]" />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
