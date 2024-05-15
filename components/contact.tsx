'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'


export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    ref={ref}
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1,
    }}>
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 -mt-6'>Please contact me directly at <a className='underline' href='mailto:dangjohnny0543@gmail.com'>dangjohnny0543@gmail.com</a> or through this form.</p>
        
        <form className='mt-10 flex flex-col' action={async (formData) => {
            const { data, error } = await sendEmail(formData)
            
            if (error) {
                toast.error(error);
                return;
            }
            toast.success('Email sent successfully!')
        }}>
            <input name='senderEmail' className='h-14 rounded-lg borderBlack px-4' type="email" required maxLength={500} placeholder='Your email'/>
            <textarea name='message' className='h-52 my-3 rounded-lg borderBlack p-4' maxLength={5000} placeholder='Your message'></textarea>
            <SubmitBtn/>
        </form>
    </motion.section>
  )
}
