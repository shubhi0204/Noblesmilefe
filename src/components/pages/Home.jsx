import React, { useState, useEffect, useRef } from "react";
import Navbar from "../layout/Navbar";
import HeroHeader from "../layout/HeroHeader";
import Services from "../sections/Home/Services";
import ContactLayout from "../layout/ContactLayout";
import Footer from "../sections/Home/Footer";
import Recognitions from "../sections/Home/Recognitions";
import AboutDoctor from "../sections/Home/AboutDoctor";
import Blogs from "../sections/Home/Blogs";

const Home = () => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolledPastHero(!entry.isIntersecting);
      },
      {
        root: null, // Observing the viewport
        threshold: 1.0, // Fully out of view
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Cleanup on unmount
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-[4rem] md:gap-[9rem] bg-white w-full relative">
      <div className="w-full fixed z-[999] bg-white">
        <Navbar isScrolled={isScrolledPastHero} />
      </div>
      <div ref={heroRef} id="home">
        <HeroHeader />
      </div>
      <div className="mt-[8rem] flex flex-col gap-[9.2rem]" id="about">
        <AboutDoctor />
        <Recognitions />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <ContactLayout />
      </div>
      <div id="blogs">
        <Blogs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
