import btndivider from "public/assets/btndivider.svg";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { MdOutlineGetApp } from "react-icons/md";
const Hero = () => {
  return (
    <main className="z-10 relative flex flex-col justify-center items-center place-content-center mt-24 xl:mt-48 ">
      <h1 className="font-bebas text-white font-normal text-4xl xs:text-[52px] sm:text-[70px] md:text-[80px] tracking-[3px] leading-[0x] ">SURVIVE AT ALL COSTS</h1>
      <p className="text-white font-normal tracking-[2px] text-lg xs:text-xl  md:text-2xl font-bebas xs:my-2 sm:my-6 text-center ">Experience new social battle royale game</p>

      <a
        href="https://store.steampowered.com/"
        className="group relative inline-flex items-center overflow-hidden button-bg rounded focus:outline-none focus:ring  px-5 py-2 xs:py-3 hover:scale-105 transition-all max-sm:mt-2 group-hover:bg-dark ">
        <span className="absolute -start-full transition-all group-hover:start-4 ">
          <MdOutlineGetApp size={20} className="-rotate-90 group-hover:text-white" />
        </span>

        <button className="inline-flex text-darkbrown font-bold font-open text-[14px] xs:text-base leading-normal gap-2 transition-all group-hover:ms-6 group-hover:text-white outline-none border-none">
          Buy on steam
          <span className="inline-block group-hover:text-white">
            <Image src={btndivider} alt="divider" className="group-hover:text-white" />
          </span>
          $14.99
        </button>
      </a>
    </main>
  );
};

export default Hero;
