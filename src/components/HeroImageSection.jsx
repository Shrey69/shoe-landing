import HeroPng from "..//assets/shoes.png"
import { FaPlay } from 'react-icons/fa6'
import { motion } from 'framer-motion'
const HeroImageSection = () => {
  return (
    
    <div className='flex flex-col justify-center items-center relative gap-16'>
        <motion.img initial={{opacity:0, x:1, rotate:20}}
        whileInView={{opacity:1, x:0, rotate:0}}
        transition={{delay:0.4 , duration:0.6}}
         src={HeroPng} alt='' 
        className='max-w-[400px] md:max-w-[500px]
        relative z-10 brightness-125' />

    <motion.div initial={{opacity:0, scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{delay:0.6 , duration:0.5}}
     className='flex gap-4 items-center'>
            <button className='h-8 w-8 flex justify-center items-center bg-red-500
            p-3 rounded-full hover:scale-105 duration-300'>
            <FaPlay />
            </button>
            <p>PLAY VIDEO</p>
           </motion.div>
    </div>

   
  )
}

export default HeroImageSection