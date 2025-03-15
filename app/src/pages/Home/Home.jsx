import React from "react";
import Hero from "../../components/Hero/Hero";
import HomeService from "../../components/HomeService/HomeService";
import Warranty from "../../components/Warranty/Warranty";
import Reminders from "../../components/Reminders/Reminders";
import Footer from "../../components/Footer/Footer";
import Features from "../../components/Features/Features";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeService />
      <Features/>
      <Warranty />
      <Reminders />
      <Banner/>
    </>
  );
};

export default Home;
