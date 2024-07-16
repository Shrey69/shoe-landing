import React from 'react'
import { motion } from 'framer-motion';
import {FaArrowLeft,  FaArrowRight } from "react-icons/fa";
const RightSide = () => {

    const slideUp = (delay) =>({
        hidden: {
            opacity: 0,
            y: 100
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: delay
            }
        }
    })
  return (
    <div className='flex flex-col justify-end items-center
    lg:px-8 py-16'>
      <motion.p variants={slideUp(0.8)} initial="hidden" animate="show" 
       className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea molestias libero necessitatibus distinctio reprehenderit recusandae rem, a veritatis quae hic repellendus qui ipsa fugiat vero impedit, commodi dolorem officiis.</motion.p>

        <motion.div variants={slideUp(0.8)} initial="hidden" animate="show"
         className='flex gap-8 pt-6 relative z-20'>
            <div className=' rounded-full border border-white  p-2
            hover:bg-white hover:text-primary duration-300'>
                <FaArrowLeft />
            </div>
            <div className=' rounded-full border border-white  p-2
            hover:bg-white hover:text-primary duration-300'>
                 <FaArrowRight/>
            </div>
        </motion.div>
   
     </div>
  )
}

export default RightSide
