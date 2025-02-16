'use client';

import React from 'react'
import portaitImg from "@/public/JohnnyPortrait.png";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();  
  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                    type: "tween",
                    duration: 0.3,
                }}>
                    <Image 
                    src={portaitImg} 
                    alt="Johnny's portait"
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    className='h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
                </motion.div>
                <motion.span 
                className='absolute text-4xl bottom-0 right-0'
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7
                }}>
                    🧑‍💻
                </motion.span>
            </div>
        </div>
        <motion.h1 
        className='mb-10 mt-6 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 600 }}
        animate={{ opacity: 1, y: 0 }}>
            <span className='font-bold'>Hello, I'm <span className=' text-sky-600 underline'>Johnny!</span></span>
        </motion.h1>
        <motion.div 
        className='flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y:0 }}
        transition={{
            delay: 0.2,
        }}>
            <Link 
            href="#contact"
            className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none duration-300
            hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all'
            onClick={() => {
                setActiveSection('Contact');
                setTimeOfLastClick(Date.now());
            }}>Contact me here
                <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition-all duration-300'/>
            </Link>
            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none duration-300 
            hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10' href='/Resume_Johnny_Dang_2024.pdf' download>Download Resume 
                <HiDownload className='opacity-60 group-hover:translate-y-1 transition-all duration-300'/>
            </a>
            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full duration-300 
            hover:scale-[1.15] hover:text-[#0077B5] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-[#0077B5]'
            href='https://www.linkedin.com/in/johnnydang22/' target='_blank'>
                <BsLinkedin/>
            </a>
            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.30rem] duration-300 
            hover:scale-[1.15] hover:text-[#24292e] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-[#24292e]'
            href='https://github.com/Johnny8607' target='_blank'>
                <FaGithubSquare/>
            </a>
        </motion.div>
    </section>
  )
}
