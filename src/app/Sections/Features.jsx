import point from "/public/assets/point.svg";
import pointicon from "/public/assets/point-icon.svg";
import Image from "next/image";
const Features = () => {
  return (
    <section id="feature" className="lg:px-12  bg-dark w-full  h-full lg:h-[880px] relative flex">
      <div className="absolute w-screen top-0 left-0  h-full bg-dark bg-opacity-75 xl:hidden"></div>

      <main className="relative flex-1 xl:w-[35vw] z-10 md:pt-36 flex flex-col items-end xs:items-start  md:items-end px-4 xs:px-12 lg:px-0 max-lg:py-12">
        <div>
          <p className="text-white text-lg xs:text-xl sm:text-2xl font-bebas leading-normal font-normal tracking-[2px] ml-8">What’s so special?</p>
          <h1 className="text-white text-4xl xs:text-6xl sm:text-7xl max-lg:py-2 lg:text-[80px] font-bebas uppercase tracking-[3px] leading-normal font-normal ml-8">features</h1>
          <h2 className="flex text-yellow text-center font-bebas font-normal text-xl xs:text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[3px] gap-3 items-center mb-2">
            <span>
              <Image src={point} alt="point" className="block mr-2 w-2 md:w-[10px] lg:w-[14px]" />{" "}
            </span>{" "}
            SURVIVE AT ALL COSTS
          </h2>
          <p className="text-white font-open text-[14px] sm:text-base lg:text-lg leading-[122.222%] font-normal text-justify ml-9 w-[40vw]  xs:w-[30vw]  xl:w-[362px]">
            You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.
          </p>
          <h2 className="flex text-yellow text-center font-bebas font-normal text-xl xs:text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[3px] gap-3 items-center  mt-6">
            <span>
              <Image src={pointicon} alt="point" className="block mr-2  w-2 md:w-[10px] lg:w-[14px]" />{" "}
            </span>{" "}
            CREATE ALLIES & ENEMIES
          </h2>{" "}
          <h2 className="flex text-yellow text-center font-bebas font-normal text-xl xs:text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[3px] gap-3 items-center  my-6">
            <span>
              <Image src={pointicon} alt="point" className="block mr-2  w-2 md:w-[10px] lg:w-[14px]" />{" "}
            </span>{" "}
            IMPRESS THE AUDIENCE
          </h2>
        </div>
      </main>
    </section>
  );
};

export default Features;
