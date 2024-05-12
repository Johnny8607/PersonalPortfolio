'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
        delay: 0.3
    }}>
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
            Currently pursuing a Bachelor in <span className='font-medium'>Software Engineering</span> @ Concordia University 🏫, I am driven student
            with a passion for <span className='font-medium'>web developement</span>. I'm always on the look out to enhance my current skills as I already participated
            to multiple hackathons and completed an internship as a <span className='font-medium'>Front-End Developer intern.</span> I love the feeling of making aesthetic
            and minimalistic user interfaces. My current stack is <span className='font-medium'>React, Next.js, TypeScript, Java, and MongoDB.</span>  
        </p>
        <p>
            Aside from tech, I have lots of interest about the business world, with a particular focus on investment, finance, and marketing.
            Finally, I enjoy working out 💪, boxing 🥊, travelling ✈️, and listening to music 🎶! 
        </p>
    </motion.section>
  )
}
