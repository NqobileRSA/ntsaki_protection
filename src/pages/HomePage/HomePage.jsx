import React from "react";
import HomeHero from "./HomeHero/HomeHero";
import { motion } from "framer-motion";
import ServicesSection from "./ServicesSection/ServicesSection";
import WhyUs from "./WhyUs/WhyUs";
import ContactSection from "./ContactSection/ContactSection";
import TrainingSection from "./TrainingSection/TrainingSection";
import {
  BreadCrumb,
  CTA,
  Footer,
  HelpBox,
  LogosBanner,
  Ratings,
} from "../../components/components";
import AboutUs from "./AboutSection/AboutUs";

const HomePage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}>
      <HomeHero />
      <BreadCrumb pageName={""} />
      <LogosBanner />
      <TrainingSection />
      <AboutUs />
      <ServicesSection />
      <WhyUs />
      <CTA />
      {/* <Ratings /> */}
      <ContactSection />
      <HelpBox />
      <Footer />
    </motion.div>
  );
};

export default HomePage;
