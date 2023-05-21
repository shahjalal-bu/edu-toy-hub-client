/* eslint-disable no-undef */
import React from "react";
import HeroSection from "../components/HeroSection";
import DealsOfTheDay from "../components/DealsOfTheDay";
import RecommendedForYou from "../components/RecommendedForYou";
import Services from "../components/Services";
import Subscribe from "../components/Subscribe";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DealsOfTheDay />
      <Gallery />
      <RecommendedForYou />
      <Subscribe />
      <Services />
    </>
  );
};

export default Home;
