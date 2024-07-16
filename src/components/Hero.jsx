import SideDetails from './SideDetails'
import HeroImageSection from './HeroImageSection'
import RightSide from './RightSide'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='bg-primary text-white relative'>
        <div className='container grid grid-cols-1 md:grid-cols-3 min-h-[700px] md:gap-32'>
           <SideDetails/>
           <HeroImageSection />
            <RightSide />
        </div>
        <motion.p
        initial= {{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.6, delay:0}}
         className='text-center text-[240px] md:text-[220px]
        lg:text-[250px] xl:text-[350px] font-bold font-anton
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        z-[2]'>NIKE</motion.p>

        <div className='h-[500px] w-[500px] bg-white/45 blur-3xl rounded-full
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
    </section>
  )
}

export default Hero