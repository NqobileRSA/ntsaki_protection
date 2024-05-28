import React from "react";
import { AnimatePresence } from "framer-motion";
// import { AnimatePresence } from "framer-motion/dist/framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage, AboutPage, ServicesPage, ContactPage } from "./pages/pages";

const AnimatedRoutes = () => {
  const location = useLocation();

  const pages = [
    { path: "/", element: HomePage },
    { path: "/About", element: AboutPage },
    { path: "/Services", element: ServicesPage },
    { path: "Contact", element: ContactPage },
  ];

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {pages.map((page, index) => (
          <Route key={index} path={page.path} element={<page.element />} />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
