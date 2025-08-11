import React from 'react'
import {motion} from "framer-motion"

const Showcase2 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center gap-6">
      <motion.div
        className="bg-red-600 w-3xs h-80 rounded-lg shadow-md cursor-pointer"
     whileHover={{scale:1.1, boxShadow:"0px 8px 20px rgba(0,0,0,0.2)"}}
      />
      <motion.div
        className="bg-green-600 w-3xs h-80 rounded-lg shadow-md cursor-pointer"
     whileHover={{scale:1.1, boxShadow:"0px 8px 20px rgba(0,0,0,0.2)"}}
      />
      <motion.div
        className="bg-blue-600 w-3xs h-80 rounded-lg shadow-md cursor-pointer"
     whileHover={{scale:1.1, boxShadow:"0px 8px 20px rgba(0,0,0,0.2)"}}
      />
    </div>
  );
}

export default Showcase2
