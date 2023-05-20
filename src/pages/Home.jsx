/* eslint-disable no-undef */
import React from "react";
import HeroSection from "../components/HeroSection";
import DealsOfTheDay from "../components/DealsOfTheDay";
import RecommendedForYou from "../components/RecommendedForYou";
import { useProducts } from "../contexts/ProductContext";
import Services from "../components/Services";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DealsOfTheDay />
      <RecommendedForYou />
      <Subscribe />
      <Services />
    </>
  );
};

export default Home;
