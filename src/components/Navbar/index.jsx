"use client";

import Link from "next/link";
import logo_smartpath from "@/assets/logo/logo_smartpath.png";
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
    <nav className="sticky top-0 z-30 w-full py-2.5 sm:py-2 px-4 shadow-xl bg-white">
      <div>
        <div className={`${flexBetween} mx-auto w-full flex`}>
          <div className={`${flexBetween} w-full font-poppins flex`}>
            {/* BAGIAN KIRI */}
            <Link href={"/"}>
              <Image
                src={Logo.src}
                alt="Logo"
                width={150}
                height={150}
                className="w-40 h-15 md:w-56 md:h-20 aspect-auto"
                style={{ objectFit: "cover" }}
              />
            </Link>
            {/* <p>LOGO</p> */}

            {/* Bagian KANAN */}
            <div className="flex items-center justify-end w-full lg:gap-x-6 2xl:text-xl">
              <div className={`${flexBetween} gap-2`}>
                <div className={`${flexBetween} hidden`}>
                  <ul className="flex w-full gap-8">
                    <li className={`${flexBetween}`}>
                      <Link href={"/"} className="hover:text-gray">
                        Home
                      </Link>
                    </li>
                    <li
                      className={`${flexBetween} relative group gap-2`}
                      onMouseEnter={toggleDropdown}
                      onMouseLeave={toggleDropdown}
                    >
                      <div
                        href={"/video-course"}
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
                                  href={"/"}
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Career Preparation
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Career Planning Jadi Freelancer
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Career Planning Jadi Enterpreuner
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <Link
                        href={"/"}
                        className="justify-center items-center w-5 h-5"
                      >
                        <ChevronDown />
                      </Link>
                    </li>
                    <li
                      className={`${flexBetween} relative group gap-2`}
                      onMouseEnter={toggleDropdown}
                      onMouseLeave={toggleDropdown}
                    >
                      <div href={"/"} className="flex-auto">
                        Live Course
                        {isDropdownOpen && (
                          <div className="absolute w-72 bg-white border-gray-200 rounded-lg shadow-lg hidden group-hover:flex">
                            <ul>
                              <li>
                                <Link
                                  href={"/"}
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Career Planning Sesuai Jurusan
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Career Preparation
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Career Planning Jadi Freelancer
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Career Planning Jadi Enterpreuner
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <Link href={"/"} className="justify-center items-center">
                        <ChevronDown />
                      </Link>
                    </li>
                    <li
                      className={`${flexBetween} relative group gap-2`}
                      onMouseEnter={toggleDropdown}
                      onMouseLeave={toggleDropdown}
                    >
                      <div href={"/"} className="flex-auto">
                        Event
                        {isDropdownOpen && (
                          <div className="absolute w-56 bg-white border-gray-200 rounded-lg shadow-lg hidden group-hover:flex">
                            <ul>
                              <li>
                                <Link
                                  href={"/"}
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Beasiswa
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Business Case Competition
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Essay & Olimpiade
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className="block px-3 py-1 text-black-800 hover:text-blue"
                                >
                                  Webinar
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <Link href={"/"} className="justify-center items-center">
                        <ChevronDown />
                      </Link>
                    </li>
                    <li className={`${flexBetween}`}>
                      <Link href={"/"} className="hover:text-gray">
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${flexBetween} gap-6`}>
                <Button
                  name="Masuk/Daftar"
                  toPage="login"
                  width="full"
                  className="font-normal text-2xl text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
