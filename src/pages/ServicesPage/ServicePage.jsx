import React from "react";
import {
  Banner,
  BreadCrumb,
  CTA,
  Footer,
  HelpBox,
} from "../../components/components";
import { motion } from "framer-motion";
import serviceImage from "../../assets/images/blackSecurity.jpg";
import ServiceTabs from "./ServiceTabs/ServiceTabs";
import ServiceInfo from "./ServiceInfo/ServiceInfo";

const ServicePage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}>
      <Banner image={serviceImage} title={"Explore our services"} />
      <BreadCrumb pageName={"Services"} />
      <ServiceInfo />
      <ServiceTabs />
      <CTA />
      <HelpBox />
      <Footer />
    </motion.div>
  );
};

export default ServicePage;
