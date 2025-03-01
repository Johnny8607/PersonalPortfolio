'use client'
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image';

type ProjectProps = typeof projectsData[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps){
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])


    return (
        <motion.div ref={ref} style={{ scale: scaleProgress, opacity: scrollYProgress }}
        className="mb-3 sm:mb-8 last:mb-0">
            <section className='group bg-gray-100 max-w-[48rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[21rem] 
            even:pl-3 hover:bg-gray-200 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[42%] flex flex-col h-full group-even:ml-[27rem]'>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-4'>
                        {tags.map((tag, index) => (
                            <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70' key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <Image src={imageUrl} alt="Project I worked on" quality={95} 
                className='absolute hidden sm:block top-[5.2rem]  sm:-right-64 md:-right-40 w-[37rem] rounded-t-lg shadow-2xl 
                transition 
                group-hover:scale-[1.04] 
                group-even:right-[initial] 
                group-even:-left-40 
                group-hover:-translate-x-3 
                group-hover:translate-y-3 
                group-hover:-rotate-2

                group-even:group-hover:translate-x-3 
                group-even:group-hover:translate-y-3 
                group-even:group-hover:rotate-2
                '></Image>
            </section>
        </motion.div>

    )
}