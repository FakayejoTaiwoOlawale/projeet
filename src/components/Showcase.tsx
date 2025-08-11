import React from "react";
import { motion } from "framer-motion";
import Email from "./Email";

const Showcase = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1678846851718-2a12c21903a2?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <motion.div
        initial={{ opacity: 0 ,y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

      >
        <div className="pt-44 pl-32">
          <div className="mb-4">
            <h1 className="text-5xl font-semibold font-sans mb-2">
              Capture, organize, and <br />
              tackle your to-dos from <br />
              anywhere.
            </h1>
            <p className="text-2xl">
              Escape the clutter and chaos—unleash your productivity <br />
              with Trello.
            </p>
          </div>
          <Email />
        </div>
      </motion.div>
    </div>
  );
};

export default Showcase;
