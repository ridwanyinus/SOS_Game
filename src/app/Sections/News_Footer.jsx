"use client";
import { useRef } from "react";
import { useIsVisible } from "@app/Components/useIsVisible";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
const News_Footer = () => {
  const ref6 = useRef();
  const isVisible6 = useIsVisible(ref6);
  return (
    <div ref={ref6} className={`transition-opacity ease-in duration-700 ${isVisible6 ? "opacity-100" : "opacity-0"}`}>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default News_Footer;
