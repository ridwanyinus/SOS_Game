"use client";
import { useIsVisible } from "@app/Components/useIsVisible";
import { useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import scrolldown from "public/assets/scrolldown.svg";
import Image from "next/image";

const Head = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <section className="w-full h-screen sm:h-[110vh]   max-lg:object-contain max-widescreen:bg-left-bottom  xl:h-[960px] bg-[url('/assets/hero.png')] relative max-lg:pb-12 overflow-hidden">
      <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <div className="overlay"></div>
        <Navbar />
        <Hero />

        <div className="absolute bottom-5 xl:bottom-10 max-xl:right-[45%]  xl:right-[50%] block w-fit mx-auto place-content-center">
          <a href="#about" className="text-white font-open text-[10px] xs:text-xs leading-[22px] uppercase font-bold text-center flex flex-col justify-center items-center xs:space-y-1 ">
            <button type="button" className="uppercase">
              the story
            </button>
            <Image src={scrolldown} alt="scrolldown" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Head;
