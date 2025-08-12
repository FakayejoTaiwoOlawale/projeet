import React, { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"

const Showcase2 = () => {
    const scrollRef=useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible]=useState(false)

    //this is what enables us to be able to check the when we enter a new page...
    // useEffect(()=>{

    //     const observer= new IntersectionObserver(
    //         (entries)=>entries.forEach(entry => {
    //             if (entry.isIntersecting)
    //                 {
    //                     setIsVisible(true)
                        
    //                     //this is saying stop observing that div
    //                     observer.unobserve(entry.target)
    //                 }
    //                 //this is like saying if we start viewing like 25 percent of the div then do the logic above
    //             }),{threshold:0.25}
    //         )

    //         return ()=>if (entry.target)
    //     })

  return (
    <div className="min-h-screen flex items-center justify-center gap-6" ref={scrollRef}>
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
