import React from "react";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router";
import BlackPage from "./pages/BlackPage";
import { motion, useScroll } from "motion/react";
import Pages from "./pages/Pages";
import Pricing from "./pages/Pricing";
import User from "./pages/User";
const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="min-h-screen m-0 p-0">
      <motion.div
        id="scroll-indication"
        className="fixed top-0 left-0 right-0 bg-blue-400 h-1.5 "
        style={{ scaleX: scrollYProgress, originX: 0 }}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/plans" element={<Pages />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/user" element={<User />} />

        <Route path="/blackpage" element={<BlackPage />} />
      </Routes>
    </div>
  );
};

export default App;
