/* eslint-disable no-undef */
import React from "react";
import HeroSection from "../components/HeroSection";
import DealsOfTheDay from "../components/DealsOfTheDay";
import RecommendedForYou from "../components/RecommendedForYou";
import { useProducts } from "../contexts/ProductContext";

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
