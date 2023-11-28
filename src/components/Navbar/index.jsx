"use client";

import Link from "next/link";
import { useState } from "react";
import ChevronDown from "@/assets/icons/ChevronDown";
import Button from "../Button";
import Image from "next/image";
import Logo from "@/assets/logo/logo_smartpath.png";

const Navbars = () => {
  const flexBetween = "lg:flex items-center justify-between";
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="sticky top-0 z-30 w-full px-12 shadow-xl bg-white">
      <div>
        <div className={`${flexBetween} mx-auto w-full`}>
          <div className={`flex ${flexBetween} w-full gap-20 font-poppins`}>
            {/* BAGIAN KIRI */}
            <Link href={`${process.env.NEXT_PUBLIC_URL_USER}`}>
              <Image
                src={Logo.src}
                alt="Logo"
                width={150}
                height={150}
                className="w-40 h-15 md:w-40 md:h-[68px] aspect-auto"
                style={{ objectFit: "contain" }}
                priority
              />
            </Link>
            {/* <p>LOGO</p> */}

            {/* Bagian KANAN */}
            <div className="flex items-center justify-end w-full gap-6 2xl:text-xl">
              <div className={`${flexBetween} gap-2`}>
                <div className={`${flexBetween}`}>
                  <ul className="flex w-full gap-8">
                    <li className={`${flexBetween}`}>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_URL_USER}`}
                        className="hover:text-gray"
                      >
                        Home
                      </Link>
                    </li>
                    <li
                      className={`${flexBetween} relative group gap-2`}
                      // onMouseEnter={toggleDropdown}
                      // onMouseLeave={toggleDropdown}
                    >
                      <Link
                        href={`${process.env.NEXT_PUBLIC_URL_USER}/video-course`}
                        className="flex-auto justify-between"
                      >
                        Video Course
                        {isDropdownOpen && (
                          <div className="absolute w-72 bg-white border-gray-200 rounded-lg shadow-lg hidden group-hover:flex">
                            <ul>
                              <li>
                                <Link
                                  href="/video-course/Career-Planning-Sesuai-Jurusan"
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Career Planning Sesuai Jurusan
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Career Preparation
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Career Planning Jadi Freelancer
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Career Planning Jadi Enterpreuner
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </Link>
                      {/* <Link href="#" className="justify-center items-center">
                      <HiChevronDown />
                    </Link> */}
                    </li>
                    <li
                      className={`${flexBetween} relative group gap-2`}
                      // onMouseEnter={toggleDropdown}
                      // onMouseLeave={toggleDropdown}
                    >
                      <Link
                        href={`${process.env.NEXT_PUBLIC_URL_USER}/live-course`}
                        className="flex-auto"
                      >
                        Live Course
                        {isDropdownOpen && (
                          <div className="absolute w-72 bg-white border-gray-200 rounded-lg shadow-lg hidden group-hover:flex">
                            <ul>
                              <li>
                                <Link
                                  href="#"
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Career Planning Sesuai Jurusan
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Career Preparation
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Career Planning Jadi Freelancer
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Career Planning Jadi Enterpreuner
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </Link>
                      {/* <Link href="#" className="justify-center items-center">
                      <HiChevronDown />
                    </Link> */}
                    </li>
                    <li
                      className={`${flexBetween} relative group gap-2`}
                      // onMouseEnter={toggleDropdown}
                      // onMouseLeave={toggleDropdown}
                    >
                      <Link
                        href={process.env.NEXT_PUBLIC_URL_EVENT}
                        className="flex-auto"
                      >
                        Event
                        {isDropdownOpen && (
                          <div className="absolute w-56 bg-white border-gray-200 rounded-lg shadow-lg hidden group-hover:flex">
                            <ul>
                              <li>
                                <Link
                                  href="#"
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Beasiswa
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Business Case Competition
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Essay & Olimpiade
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Webinar
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </Link>
                      {/* <Link href="#" className="justify-center items-center">
                      <HiChevronDown />
                    </Link> */}
                    </li>
                    {/* <li className={`${flexBetween}`}>
                    <Link href="#" className="hover:text-gray">
                      About
                    </Link>
                  </li> */}
                  </ul>
                </div>
              </div>
              <div className={`${flexBetween} gap-6 px-2`}>
                <Button name="Login" toPage="login" width="full" />
                {/* {
                username != "" ? <Button name={username} toPage="dashboard" width="full" />
                :
              } */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
