import quote from "public/assets/quote.png";
import quote1 from "public/assets/quote1.svg";
import quote2 from "public/assets/quote2.svg";
import quote3 from "public/assets/quote3.svg";

import Image from "next/image";

const Quote = () => {
  return (
    <section
      id="quote"
      className="max-small:px-6 px-4 sm:px-8 md:px-12 xl:px-16  relative py-24  lg:py-32 xl:py-40 h-full  w-full bg-darkbrown flex  max-small:flex-col justify-between max-small:space-y-12">
      <div className="z-10  relative flex flex-col justify-center max-lg:flex-1 ">
        <h2 className="text-white text-xl xs:text-2xl font-bebas tracking-[2px] leading-normal pb-3 w-fit">What people think?</h2>
        <h1 className="text-white text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bebas font-normal uppercase leading-[100%] tracking-[3px] pb-10 w-fit">Press quotes</h1>
        <p className="font-open text-[14px] sm:text-base md:text-lg leading-[122.222%] font-normal text-white w-[90%] md:w-[85%] lg:w-[350px] xl:w-[434px] ">
          Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really
          listen to what our users has to say.
        </p>

        <a
          href="/"
          className="group relative inline-flex  bg-yellow rounded focus:outline-none focus:ring px-4 md:px-6 py-4 hover:scale-105 transition-all hover:bg-accentRed  mt-12 w-fit max-small:hidden">
          <button className=" text-darkbrown font-bold font-open text-[14px] md:text-base leading-normal  transition-all  group-hover:text-white">Read more testimonials</button>
        </a>
      </div>

      <div className="space-y-6 sm:space-y-4 lg:space-y-12 xl:space-y-16 relative z-10 *:cursor-pointer flex flex-col justify-center lg:justify-center xs:items-end  max-lg:flex-1">
        <div className=" lg:h-[150px] w-[70%] xs:w-[90%] md:w-[70%] lg:w-[80%] xl:w-[90%] sm:w-[80%] ">
          <Image src={quote1} alt="testimonials" className=" hover:contrast-150 shadow-md shadow-grey hover:shadow-yellow hover:scale-105 transition-all ease-linear " />
        </div>

        <div className=" w-[70%] xs:w-[90%] translate-x-12 xs:-translate-x-6 sm:-translate-x-12 md:-translate-x-16 xl:-translate-x-36 sm:w-[80%] md:w-[70%] lg:h-[150px] lg:w-[80%] xl:w-[90%]">
          <Image src={quote2} alt="testimonials" className=" hover:contrast-150 shadow-md hover:shadow-md hover:shadow-yellow shadow-yellow hover:scale-105 transition-all ease-linear " />
        </div>

        <div className=" w-[70%] xs:w-[90%] lg:h-[150px]  md:w-[70%] lg:w-[80%] xl:w-[90%] sm:w-[80%]">
          <Image src={quote3} alt="testimonials" className=" hover:contrast-150 shadow-md shadow-grey hover:shadow-yellow hover:scale-105 transition-all ease-linear" />
        </div>
      </div>
      <a
        href="/"
        className="group z-10 mx-auto relative inline-flex  bg-yellow rounded focus:outline-none focus:ring px-4 md:px-6 py-3 hover:scale-105 transition-all hover:bg-accentRed mt-12 w-fit small:hidden hover:text-white">
        <button className=" text-darkbrown font-bold font-open text-[14px] md:text-base leading-normal  transition-all   group-hover:text-white">Read more testimonials</button>
      </a>
    </section>
  );
};

export default Quote;
