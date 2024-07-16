import React from 'react'
import Logo from "..//assets/logo.png"
import { motion } from 'framer-motion';
import { FaRegUserCircle } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingBag } from "react-icons/md";
const Navbar = () => {
    const slideRight = (delay) =>({
        hidden: {
            opacity: 0,
            x: -100
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: delay
            }
        }
    })

    const Menu = [
        {
        id: 1,
        title: "New Release",
        link: "/",
        delay: "0.2",
    },
    {
        id: 2,
        title: "Men",
        link: "#",
        delay: "0.4",
    },
    {
        id: 3,
        title: "Women",
        link: "#",
        delay: "0.6",
    },
    {
        id: 4,
        title: "Kids",
        link: "#",
        delay: "0.8",
    },
    {
        id: 5,
        title: "Customize",
        link: "#",
        delay: "1",
    }
]
  return (
    <nav className='bg-primary text-white'>
      <div className='container p-6 flex justify-between items-center '>


        <motion.div variants={slideRight(0.2)} initial="hidden" animate="show">
            <img src={Logo} alt='Logo' className='w-[100px]' />
        </motion.div>

        <div className='hidden md:block'>
            <ul className='flex items-center gap-4'>
                {
                    Menu.map((i) => {
                        return(
                            <motion.li variants={slideRight(i.delay)} initial="hidden" animate="show"
                             key={i.id}>
                                <a href={i.link}
                                className='inline-block py-2 px-4 uppercase font-barlow font-semibold
                                hover:scale-105 duration-300'>
                                    {i.title}
                                </a>
                            </motion.li>
                        )
                    })
                 }
            </ul>
        </div>

        <div className='flex items-center gap-4'>
            <motion.div variants={slideRight(1.2)} initial="hidden" animate="show"
             className='text-2xl cursor-pointer'>
            <FaRegUserCircle />
            </motion.div>
            <motion.div variants={slideRight(1.4)} initial="hidden" animate="show"
            className='text-2xl cursor-pointer relative'>
            <MdOutlineShoppingBag />
            <div className='absolute -top-1 -right-1 w-4 h-4 text-xs bg-red-500
            flex justify-center items-center rounded-full'>2</div>
            </motion.div>
        </div>
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
