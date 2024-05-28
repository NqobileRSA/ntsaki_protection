import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AnimatedRoutes from "./AnimatedRoutes";
import { Topbar, WhatsApp, Navigation } from "./components/components";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Router>
        <header>
          <Topbar />
          <Navigation />
        </header>
        <main>
          <AnimatedRoutes />
          <WhatsApp />
        </main>
      </Router>
    </div>
  );
}

export default App;
