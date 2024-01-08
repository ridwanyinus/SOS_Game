"use client";

import About from "./Sections/About";
import Features from "./Sections/Features";
import Requirements from "./Sections/Requirements";
import Quote from "./Sections/Quote";
import Head from "./Sections/Head";
import News_Footer from "./Sections/News_Footer";

const Home = () => {
  return (
    <main className="bg-black">
      <Head />
      <About />
      <Features />
      <Requirements />
      <Quote />
      <News_Footer />
    </main>
  );
};

export default Home;
