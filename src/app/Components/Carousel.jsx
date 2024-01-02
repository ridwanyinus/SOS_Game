"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import screenshot1 from "public/assets/about1.png";
import screenshot2 from "public/assets/about2.png";
import screenshot3 from "public/assets/about3.png";
import screenshot4 from "public/assets/about4.png";
import screenshot5 from "public/assets/about5.png";
import screenshot6 from "public/assets/about6.png";
import screenshot7 from "public/assets/about7.png";
import next from "public/assets/switch.svg";
import Image from "next/image";

const CarouselPage = () => {
  const indicatorStyles = {
    background: "#fff",
    width: 8,
    height: 8,
    display: "inline-block",
    margin: "0 8px",
  };
  return (
    <div className="place-items-center w-auto  h-[60%] relative overflow-hidden">
      <Carousel
        className={`transition-all  ease-in-out w-full lg:w-[95%] xl:w-full`}
        autoPlay
        infiniteLoop
        emulateTouch
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={2000}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div className={`${hasPrev ? "absolute" : "hidden"} top-0 bottom-0 left-0 flex justify-center items-center p-3  cursor-pointer z-20 group w-11 max-lg:hidden`} onClick={clickHandler}>
              <Image src={next} alt="switch" className="text-white rotate-180  group-hover:scale-150 transition-all ease-in-out duration-75 " />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div className={`${hasNext ? "absolute" : "hidden"} top-0 bottom-0 right-0 flex justify-center items-center p-3 cursor-pointer z-20  group  w-11 max-lg:hidden`} onClick={clickHandler}>
              <Image src={next} alt="switch" className="text-white group-hover:scale-150 transition-all ease-in-out duration-75 " />
            </div>
          );
        }}>
        <div className="w-[40vw] h-[40vh] xs:h-[60vh] lg:w-[502px]   lg:h-[85vh] ">
          <Image
            src={screenshot1}
            quality={100}
            placeholder="blur"
            alt="gaming-map"
            className="w-auto h-full rounded-[6px] outline-none border-none max-lg:object-cover xl:translate-x-9 widescreen:translate-x-14"
          />
        </div>

        <div className="w-[40vw] h-[40vh] xs:h-[60vh] lg:w-[502px]   lg:h-[85vh]  ">
          <Image
            src={screenshot2}
            quality={100}
            placeholder="blur"
            alt="gaming-map"
            className=" w-auto h-full rounded-[6px] outline-none border-none max-lg:object-cover  xl:translate-x-9 widescreen:translate-x-14"
          />
        </div>
        <div className="w-[40vw] h-[40vh] xs:h-[60vh] lg:w-[502px]   lg:h-[85vh]  ">
          <Image
            src={screenshot3}
            quality={100}
            placeholder="blur"
            alt="gaming-map"
            className=" w-auto h-full rounded-[6px] outline-none border-none max-lg:object-cover  xl:translate-x-9 widescreen:translate-x-14"
          />
        </div>
        <div className="w-[40vw] h-[40vh] xs:h-[60vh] lg:w-[502px]   lg:h-[85vh]  ">
          <Image
            src={screenshot4}
            quality={100}
            placeholder="blur"
            alt="gaming-map"
            className=" w-auto h-full rounded-[6px] outline-none border-none max-lg:object-cover  xl:translate-x-9 widescreen:translate-x-14"
          />
        </div>
        <div className="w-[40vw] h-[40vh] xs:h-[60vh] lg:w-[502px]   lg:h-[85vh]  ">
          <Image
            src={screenshot5}
            quality={100}
            placeholder="blur"
            alt="gaming-map"
            className=" w-auto h-full rounded-[6px] outline-none border-none max-lg:object-cover  xl:translate-x-9 widescreen:translate-x-14"
          />
        </div>
        <div className="w-[40vw] h-[40vh] xs:h-[60vh] lg:w-[502px]   lg:h-[85vh]  ">
          <Image
            src={screenshot6}
            quality={100}
            placeholder="blur"
            alt="gaming-map"
            className=" w-auto h-full rounded-[6px] outline-none border-none max-lg:object-cover  xl:translate-x-9 widescreen:translate-x-14"
          />
        </div>
        <div className="w-[40vw] h-[40vh] xs:h-[60vh] lg:w-[502px]   lg:h-[85vh]  ">
          <Image
            src={screenshot7}
            quality={100}
            placeholder="blur"
            alt="gaming-map"
            className=" w-auto h-full rounded-[6px] outline-none border-none max-lg:object-cover  xl:translate-x-9 widescreen:translate-x-14"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
