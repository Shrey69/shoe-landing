import React from 'react'
import { motion } from 'framer-motion'
const SideDetails = () => {

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
    <div  className='flex flex-col justify-end py-14 md:py-20'>
            
            <div className='text-center md:text-left space-y-4 
            lg:max-w-[400px]'>
            <motion.h1 variants={slideUp(0.2)} initial="hidden" animate="show"
             className='text-3xl font-semibold uppercase'>Jordan 1 red</motion.h1>
            <motion.p variants={slideUp(0.4)} initial="hidden" animate="show">release date <br/>
            color way <br />
            red
            </motion.p>

            <motion.div variants={slideUp(0.6)} initial="hidden" animate="show"
            className='max-w-[250px] space-y-3 mx-auto md:mx-0'>
                <p>Select Your Size (IN)</p>
            
            <motion.div variants={slideUp(0.8)} initial="hidden" animate="show"
             className='flex gap-3 flex-wrap justify-center md:justify-start relative z-10'>
                <p className='size-box'>sm</p>
                <p className='size-box'>md</p>
                <p className='size-box'>lg</p>
                <p className='size-box'>xl</p>
                <p className='size-box'>8</p>
                <p className='size-box'>9</p>
                <p className='size-box'>10</p>
                <p className='size-box'>11</p>
                <p className='size-box'>12</p>
                <p className='size-box'>13</p>
            </motion.div>
            </motion.div >
            </div>

           </div>
  )
}

export default SideDetails
