"use client";
import { useRef } from "react";
import { useIsVisible } from "@app/Components/useIsVisible";
import CarouselPage from "@app/Components/Carousel";

const About = () => {
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  return (
    <section
      id="about"
      ref={ref2}
      className={`relative bg-[url('/assets/about.png')] h-full lg:h-[960px] w-full lg:px-16 flex justify-center  place-items-center *:text-white overflow-hidden max-lg:py-16 max-lg:mx-auto space-x-4 xs:space-x-8 md:space-x-10 lg:space-x-0 transition-opacity ease-in duration-700 ${
        isVisible2 ? "opacity-100" : "opacity-0"
        } `}>
      
      <div className="about_gradient"></div>

      <div className="flex flex-col relative space-y-4 flex-1 z-50">
        <h3 className="text-base xs:text-lg md:text-[20px] lg:text-2xl font-bebas font-normal leading-normal tracking-[2px]">What is SOS?</h3>
        <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold leading-[97.5%] tracking-[3px] uppercase  font-bebas lg:pb-4">
          social battle <br /> royale game
        </h1>
        <div className="bg-white w-[50vw] xl:w-[711px] h-[2px] block rounded absolute top-[48%] lg:top-[48%] inset-0 z-10 max-lg:hidden"></div>

        <article className="text-xs xs:text-[13px] sm:text-[14px] md:text-base lg:text-lg font-open font-normal md:leading-[22px] md:place-items-end flex justify-center">
          <div className="md:w-[364px] z-10">
            Each round, <span className="font-bold">you</span> and <span className="font-bold">15</span> other contestants compete to escape a deadly island filled with monsters. The trick is:{" "}
            <span className="font-bold">three</span> people can survive. Will you run solo or form friendships with others to escape? Making the right decisions could be the difference between life
            and death.
          </div>
        </article>
      </div>

      <div className="flex-1 relative  flex justify-center items-center place-items-center h-full w-full overflow-hidden max-xs:pt-12 lg:pt-28 xl:mt-0">
        <CarouselPage className="relative  xs:pb-20 lg:pb-0" />
      </div>
    </section>
  );
};

export default About;
