/* eslint-disable no-undef */
import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import DealsOfTheDay from "../components/DealsOfTheDay";
import Services from "../components/Services";
import Subscribe from "../components/Subscribe";
import Gallery from "../components/Gallery";
import ToyByCategory from "../components/ToyByCategory";

const Home = () => {
  //set dynamic title
  useEffect(() => {
    document.title = "EduToysHub | Home";
    return () => {
      document.title = "EduToysHub";
    };
  }, []);

  return (
    <>
      <HeroSection />
      <DealsOfTheDay />
      <Gallery />
      <ToyByCategory />
      <Subscribe />
      <Services />
    </>
  );
};

export default Home;
