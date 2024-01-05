import Image from "next/image";
import footer from "public/assets/footer.png";
const Newsletter = () => {
  return (
    <section className="bg-dark relative  h-full flex items-center max-sm:gap-y-12 sm:space-x-6 md:space-x-12 lg:space-x-28 xl:space-x-0 justify-between px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20 lg:py-28 max-sm:flex-col">
      <div className="newsletter max-md:w-[300px] relative ">
        <Image src={footer} alt="newsletter-bg" className="w-[412px] max-small:h-[80vh]" />
      </div>

      <div className="z-10  w-fit overflow-hidden">
        <h3 className="text-white text-2xl font-bebas leading-normal tracking-[2px] w-fit">Want to stay in touch?</h3>
        <h1 className="text-3xl xs:text-4xl sm:text-[40px] lg:text-6xl xl:text-[80px] font-bebas tracking-[3px] uppercase leading-[100%] text-white mb-10 mt-2 w-fit">newsletter SUBSCRIBE </h1>
        <p className="text-white font-open text-base md:text-lg leading-[122.222%] max-xs:w-[80%] md:w-[90%] lg:w-[80%] xl:w-[645px]">
          In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game.
          We don’t spam.
        </p>

        <div className="flex justify-start items-center  space-x-3 mt-12 w-full max-small:flex-col max-small:gap-y-6">
          <form className="flex flex-col input-bg md:w-[55%] xl:w-[60%] px-4 justify-center pt-2 lg:py-3 active:ring-slate-100 active:ring-1 shadow-darkbrown shadow max-small:w-[70vw]">
            <label htmlFor="mail" className="text-white font-open text-[13px] md:text-[14px]">
              Your email address
            </label>
            <input type="email" id="mail" name="email" className="text-white outline-none border-none bg-transparent " />
          </form>

          <a
            href="/"
            className="group relative inline-flex  bg-yellow rounded focus:outline-none px-3 md:px-4 lg:px-12 py-3 lg:py-5 hover:scale-105 transition-all hover:bg-accentRed max-small:w-[50vw] ">
            <button className=" text-darkbrown font-bold font-open max-small:text-[14px] text-[12px] md:text-base leading-normal  transition-all  group-hover:text-white max-small:mx-auto">
              Subscribe now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
