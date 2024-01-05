import logo from "public/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@app/Constants/data";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black px-2 xs:px-4  md:px-12 lg:px-16 xl:px-24 pb-16  ">
      <section className=" flex max-sm:space-y-4 justify-between items-center ft-divider relative pb-4 md:pb-8 flex-wrap">
        <div className="block max-sm:mr-12">
          <Image src={logo} alt="logo" className="w-auto h-auto max-lg:w-[55px]" priority />
        </div>

        <ul className="flex max-sm:hidden flex-wrap max-sm:text-center max-sm:justify-center max-xs:gap-y-3 max-sm:mx-auto space-x-3 md:space-x-4 lg:space-x-8  xl:space-x-10  place-items-center">
          {navLinks.map((item) => (
            <li key={item.id} className="text-white text-right font-open text-[10px] lg:text-xs font-bold leading-none tracking-[1.2px] uppercase   ">
              <Link href={item.link} className="hover:text-yellow">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex w-fit h-[20px] space-x-4 sm:space-x-2  md:space-x-3 lg:space-x-4 xl:gap-x-5  max-xs:px-8 max-xs:justify-end max-sm:justify-center max-sm:items-center ">
          <a href="/" className="text-white hover:text-accentRed ">
            <FaFacebookF size={20} className="max-lg:w-[10px] max-lg:h-[15px]" />
          </a>
          <a href="/" className="text-white hover:text-accentRed">
            <BsTwitterX size={20} className="max-lg:w-[15px] max-lg:h-[15px]" />
          </a>
          <a href="/" className="text-white hover:text-accentRed">
            <FaYoutube size={20} className="max-lg:w-[15px] max-lg:h-[15px]" />
          </a>
          <a href="/" className="text-white hover:text-accentRed">
            <FaTwitch size={20} className="max-lg:w-[15px] max-lg:h-[15px]" />
          </a>
        </div>
      </section>

      <div className="*:text-white flex justify-between items-center pt-6 max-lg:flex-col max-lg:gap-y-4">
        <div>
          <p className="text-white opacity-[0.5] text-[14px] "> © 2023 Outpost Games, Inc. All Rights Reserved</p>
        </div>

        <div className="font-open text-[10px] xs:text-xs font-bold   uppercase *:tracking-[1.2px] flex gap-x-2">
          <p className="flex items-center gap-x-1">
            privacy policy{" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="13" viewBox="0 0 2 13" fill="none">
                <path d="M1 0.5L1 12.5" stroke="white" />
              </svg>
            </span>
          </p>
          <p className="flex items-center gap-1">
            terms of service
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="13" viewBox="0 0 2 13" fill="none">
                <path d="M1 0.5L1 12.5" stroke="white" />
              </svg>
            </span>
          </p>

          <p>code of conduct</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
