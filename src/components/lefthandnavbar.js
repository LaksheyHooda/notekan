"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    // <div className="absolute z-10">
    //   <Button
    //     className="bg-transparent text-black hover:text-white rounded-md transition-colors"
    //     onClick={toggleSidebar}
    //   >
    //     {isOpen ? (
    //       " "
    //     ) : (
    //       <FontAwesomeIcon
    //         className="text-xl"
    //         aria-hidden="true"
    //         icon={faAnglesRight}
    //       />
    //     )}
    //   </Button>
    //   <div
    //     className={`fixed inset-0 z-40 flex transition-transform duration-300 ease-in-out transform ${
    //       isOpen ? "translate-x-0" : "-translate-x-full"
    //     }`}
    //   >
    //     <div className="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700">
    //       <img
    //         src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1714089600&semt=sph"
    //         alt="Logo"
    //         className="h-8 w-auto"
    //       />
    //       {/* temperary logo until we have one*/}
    //       <ul className="mt-4">
    //         <li>
    //           <Link href="/about" className="block p-4 hover:bg-gray-700">
    //             About
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/dashboard/archive" className="block p-4 hover:bg-gray-700">
    //             Archive
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/createTemplate" className="block p-4 hover:bg-gray-700">
    //             Make a Template
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/contact" className="block p-4 hover:bg-gray-700">
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>

    //       <div className="absolute bottom-0 w-full">
    //         <Button
    //           className="bg-transparent text-black hover:text-white rounded-md transition-colors"
    //           onClick={toggleSidebar}
    //         >
    //           <FontAwesomeIcon
    //             className="text-xl"
    //             aria-hidden="true"
    //             icon={faAnglesLeft}
    //           />
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="flex h-screen absolute z-10">
      <Button
        className="bg-transparent text-black hover:text-blue-800 rounded-md transition-colors"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          " "
        ) : (
          <FontAwesomeIcon
            className="text-xl"
            aria-hidden="true"
            icon={faAnglesRight}
          />
        )}
      </Button>
      <div
        className={`fixed inset-0 z-40 flex transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div class="bg-white shadow-lg rounded-r-3xl p-6 flex flex-col justify-between">
          <div>
            <Link href="/" class="flex items-center space-x-4">
              <img
                src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1714089600&semt=sph"
                alt="Logo"
                class="rounded-full"
              />
            </Link>
            <nav class="mt-8">
              <Link
                href="/dashboard"
                class="flex items-center space-x-4 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <svg
                  class="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                <span class="font-medium text-gray-800">Dashboard</span>
              </Link>
              <Link
                href="/dashboard/processed"
                class="flex items-center space-x-4 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 7V21H18V7H6Z"
                    fill="#F3F4F6"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 7V3H14L18 7V21H6V7Z"
                    fill="#FFFFFF"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 3V7H18"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 11H14"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10 15H14"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                  />

                  <path
                    d="M5 6V20H17V6H5Z"
                    fill="#F3F4F6"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 6V2H13L17 6V20H5V6Z"
                    fill="#FFFFFF"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 2V6H17"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 10H13"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M9 14H13"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                  />

                  <path
                    d="M4 5V19H16V5H4Z"
                    fill="#F3F4F6"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 5V1H12L16 5V19H4V5Z"
                    fill="#FFFFFF"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 1V5H16"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 9H12"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M8 13H12"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <span class="font-medium text-gray-800">Documents</span>
              </Link>
              <Link
                href="/dashboard/archive"
                class="flex items-center space-x-4 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V8H4V6Z"
                    fill="#ccc"
                  />
                  <path
                    d="M20 10V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V10H20Z"
                    fill="#999"
                  />
                  <path d="M8 14H16V16H8V14Z" fill="#333" />
                  <path d="M8 10H16V12H8V10Z" fill="#333" />
                </svg>
                <span class="font-medium text-gray-800">Archive</span>
              </Link>
              <Link
                href="/dashboard/customTemplates"
                class="flex items-center space-x-4 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <svg
                  class="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                <span class="font-medium text-gray-800">Custom Templates</span>
              </Link>
              <Link
                href="/about"
                class="flex items-center space-x-4 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="#6B7280"
                    stroke-width="2"
                  />
                  <path
                    d="M23 21v-2a4 4 0 0 0-3-3.87"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 3.13a4 4 0 0 1 0 7.75"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <span class="font-medium text-gray-800">About</span>
              </Link>
            </nav>
          </div>
          <div>
            <Link
              href="/login"
              class="flex items-center space-x-4 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
              <span class="font-medium text-gray-800">Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
