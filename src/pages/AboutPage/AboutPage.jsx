import React from "react";
import OurStory from "./OurStory/OurStory";
import Counts from "./Counts/Counts";
import Vision from "./Vision/Vision";
import { motion } from "framer-motion";
import {
  Banner,
  BreadCrumb,
  Footer,
  HelpBox,
  LogosBanner,
} from "../../components/components";
import image from "../../assets/images/business-security-guards.jpeg";
import AboutSection from "./AboutSection/HeroSection";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}>
      <Banner image={image} title={"Learn about us"} />
      <BreadCrumb pageName={"About"} />
      {/* <LogosBanner /> */}
      <OurStory />
      {/* <AboutSection /> */}
      <Counts />
      <Vision />
      <HelpBox />
      <Footer />
    </motion.div>
  );
};

export default AboutPage;
