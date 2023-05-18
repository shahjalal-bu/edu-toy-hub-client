/* eslint-disable no-undef */
import React from "react";
import HeroSection from "../components/HeroSection";
import DealsOfTheDay from "../components/DealsOfTheDay";
import RecommendedForYou from "../components/RecommendedForYou";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DealsOfTheDay />
      <RecommendedForYou />
    </>
  );
};

export default Home;
