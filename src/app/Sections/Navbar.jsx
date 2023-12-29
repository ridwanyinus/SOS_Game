"use client";
import logo from "public/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@app/Constants/data";
import divider from "public/assets/divider.svg";
import { FiAlignLeft } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import { SiXbox } from "react-icons/si";
import { SiSteam } from "react-icons/si";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="z-50 mt-0 lg:px-20 lg:py-4 px-4 py-4">
      <div className="flex relative lg:items-center justify-between">
        <div className="block">
          <Image src={logo} alt="logo" className="w-auto h-auto max-lg:w-[55px]" priority />
        </div>

        <ul className="flex  lg:space-x-10 xl:space-x-16 place-content-center max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.id} className="text-white text-right font-open text-xs font-bold leading-none tracking-[1.2px] uppercase   ">
              <Link href={item.link} className="hover:border-b hover:border-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center space-x-4 relative max-lg:hidden">
          <details className="group  absolute block top-2 -left-12 overflow-hidden  [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer  gap-1 transition text-white  font-open text-xs font-bold leading-none tracking-[1.2px] uppercase justify-center items-center">
              <span> ENG </span>

              <span className="transition group-open:-rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </summary>

            <div className="bg-dark  mt-1 px-[6px] py-2 space-y-2 ">
              <p className=" text-white  font-open text-xs font-bold leading-none tracking-[1.2px] uppercase cursor-pointer hover:text-yellow">RUS</p>
              <p className=" text-white  font-open text-xs font-bold leading-none tracking-[1.2px] uppercase cursor-pointer hover:text-yellow">FRA</p>
              <p className=" text-white  font-open text-xs font-bold leading-none tracking-[1.2px] uppercase cursor-pointer hover:text-yellow">DEU</p>
            </div>
          </details>

          <Image src={divider} alt="divider" />
          <div className="flex w-full h-full justify-start items-start space-x-4">
            <a href="https://www.xbox.com/en-NZ/" className="text-yellow hover:text-[#107c10]">
              <SiXbox size={30} />
            </a>
            <a href="https://store.steampowered.com/" className="text-yellow hover:text-[#c6d4df]">
              <SiSteam size={30} />
            </a>
          </div>
        </div>

        {/* NavBar Mobile */}

        <div className="lg:hidden flex flex-col justify-start items-start z-50">
          {toggleMenu ? (
            <IoClose size={28} color="#fff" onClick={() => setToggleMenu(false)} />
          ) : (
            <FiAlignLeft size={28} color="#fff" onClick={() => setToggleMenu(true)} className="active:text-dark hover:text-accentRed" />
          )}

          {toggleMenu && (
            <div className="bg-dark fixed top-0 right-0 w-[250px] sm:w-[300px] h-auto transition-all scale-up-hor-right duration-[0.3s] py-6 px-4">
              <IoClose color="#fff" size={28} onClick={() => setToggleMenu(false)} className="active:text-accentRed active:scale-105" />
              <ul className="py-8 space-y-4">
                {navLinks.map((item) => (
                  <li key={item.id} className="text-yellow  font-open text-xs font-bold leading-none tracking-[1.2px] uppercase">
                    <Link href={item.link} className="hover:border-b hover:border-white">
                      {item.label}
                    </Link>
                  </li>
                ))}

                <div className="">
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="cursor-pointer  justify-start items-center flex gap-1 transition text-white  font-open text-xs font-bold leading-none tracking-[1.2px] uppercase">
                      <span> ENG </span>

                      <span className="transition group-open:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </summary>

                    <div className="bg-dark  mt-1 px-[6px] py-2 space-y-2 ">
                      <p className=" text-yellow  font-open text-xs font-bold leading-none tracking-[1.2px] uppercase cursor-pointer ">RUS</p>
                      <p className=" text-yellow  font-open text-xs font-bold leading-none tracking-[1.2px] uppercase cursor-pointer ">FRA</p>
                      <p className=" text-yellow  font-open text-xs font-bold leading-none tracking-[1.2px] uppercase cursor-pointer ">DEU</p>
                    </div>
                  </details>
                </div>
                <div className="flex justify-start items-start space-x-4 ">
                  <a href="https://www.xbox.com/en-NZ/" className="text-[#107c10]">
                    <SiXbox size={30} />
                  </a>
                  <a href="https://store.steampowered.com/" className="text-[#c6d4df]">
                    <SiSteam size={30} />
                  </a>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
