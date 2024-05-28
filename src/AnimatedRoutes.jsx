import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { navLinks } from "./constants";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {navLinks.map((page, index) => (
          <Route key={index} path={page.path} element={<page.element />} />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
