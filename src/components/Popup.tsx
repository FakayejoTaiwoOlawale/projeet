import React from 'react'
import {motion} from "framer-motion"

const Popup = () => {
  return (
    <div className='fixed top-0 right-24 left-0'>
      <motion.div className='w-40 shadow-2xl'initial={{opacity:0,x:200}} animate={{opacity:1,x:0}} transition={{duration:0.5}}>
            <h3 className='text-2xl'>Project 1</h3>
            <p className='text-blue-800'>This project was just completed</p>
      </motion.div>
    </div>
  )
}

export default Popup
