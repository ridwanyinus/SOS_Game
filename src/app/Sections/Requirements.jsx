import React from "react";

const Requirements = () => {
  return (
    <section id="requirments" className="relative py-20  w-full h-[960px] bg-[url('/assets/requirements-bg.png')] sm:bg-[url('/assets/requirements.png')] _requirements space-y-20 max-lg:h-full">
      <div className="relative text-center pt-16  mx-auto">
        <p className="text-white  font-bebas text-base xs:text-lg sm:text-2xl tracking-[2px] leading-normal font-normal">Can My Computer Run this game?</p>
        <h1 className="uppercase font-bebas  text-4xl sm:text-5xl md:text-7xl lg:text-[80px] tracking-[3px] text-white">system requirements</h1>
      </div>

      <main className="relative grid max-xs:*:col-span-2 grid-cols-2 xs:w-[90%] sm:w-[70%] md:w-[572px] place-content-start border-grey border-[1px] rounded-sm lg:rounded z-10 mx-8 sm:ml-12 lg:ml-24 outline-none">
        <div className="border-b border-grey py-6 xs:py-4 lg:py-6 px-3 xs:border-r">
          <h3 className="text-yellow font-bebas text-lg md:text-xl lg:text-2xl leading-normal tracking-[2px] uppercase">OS:</h3>
          <p className="text-[14px] md:text-base lg:text-lg font-open font-normal text-white leading-[122.222%]">
            Windows 7 64-bit only <br /> (No OSX support at this time)
          </p>
        </div>

        <div className="border-b border-grey py-8 xs:py-4  lg:py-6 px-3">
          <h3 className="text-yellow font-bebas text-lg md:text-xl lg:text-2xl leading-normal tracking-[2px] uppercase">pROCESSOR:</h3>
          <p className="text-[14px] md:text-base lg:text-lg font-open font-normal text-white leading-[122.222%]">
            Intel Core 2 Duo @ 2.4 GHZ <br className="max-xs:hidden" /> or AMD Athlon X2 @ 2.8 GHZ
          </p>
        </div>

        <div className="border-b border-grey py-4 lg:py-6 pb-8 px-3 xs:border-r">
          <h3 className="text-yellow font-bebas text-lg md:text-xl lg:text-2xl leading-normal tracking-[2px] uppercase">mEMORY:</h3>
          <p className="text-[14px] md:text-base lg:text-lg font-open font-normal text-white leading-[122.222%]">8GB RAM</p>
        </div>

        <div className="border-b border-grey py-4 lg:py-6 pb-8 px-3 ">
          <h3 className="text-yellow font-bebas text-lg md:text-xl lg:text-2xl leading-normal tracking-[2px] uppercase">storage:</h3>
          <p className="text-[14px] md:text-base lg:text-lg font-open font-normal text-white leading-[122.222%]">8GB available space</p>
        </div>

        <div className="col-span-2 py-6 lg:pt-6 lg:pb-12 px-3">
          <h3 className="text-yellow font-bebas text-lg md:text-xl lg:text-2xl leading-normal tracking-[2px] uppercase">GRAPHICS:</h3>
          <p className="text-[14px] md:text-base lg:text-lg font-open font-normal text-white leading-[122.222%]">
            NVIDIA GeForce GTX 660 2GB or <br /> AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)
          </p>
        </div>
      </main>
    </section>
  );
};

export default Requirements;
