"use client"
import React from 'react'
import Marquee from 'react-fast-marquee'
import { SectionHeading } from './section-heading'

export const Testimonials = () => {
  const data = [{
    quote: "asvin is so great with his work, our work is completed in 3 day prior to the deadline",
    name: "Alex Suprun",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Working with Asvin was a pleasure. His attention to detail and problem-solving skills are exceptional",
    name: "Sarah Chen",
    avatar: "https://plus.unsplash.com/premium_photo-1670884442192-7b58d513cd55?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Asvin delivered our project ahead of schedule and exceeded all expectations. His communication was excellent throughout",
    name: "Diego Hernandez",
    avatar: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "The quality of work and professionalism shown by Asvin was outstanding. Would definitely work with him again",
    name: "Emma Wilson",
    avatar: "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Asvin's technical expertise and ability to understand our requirements made our project implementation seamless",
    name: "Alexander Hipp",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }]
  
    return (
      <div className='py-10 '>
        <SectionHeading>People love my work</SectionHeading>
        <div className="[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] flex"> 
        <Marquee speed={20} pauseOnHover={true} className='py-4'>
            {data.map((item, idx) => (
                <TestimonialCard key={`testimonial-${idx}`} {...item} />
            ))}
        </Marquee>
         </div>
    </div>
  )
}

const TestimonialCard = ({quote, name, avatar}: {quote: string, name: string, avatar: string}) => {
  return (
    <div className='hover:shadow-md hover:dark:[box-shadow:var(--shadow-section)] hover:dark:bg-neutral-900 hover:dark:border-neutral-600 hover:dark:scale-[1.02] transition-all duration-500 ease-out mx-4 p-6 rounded-xl flex justify-between flex-col max-w-xs w-full gap-4 shadow-input bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 items-center'>
      <p className='text-sm text-neutral-700 dark:text-neutral-300'>{quote}</p>
      <div className='flex items-center gap-4 w-40'>
        <img src={avatar} alt={name} className='object-cover size-4 rounded-full' />
        <p className='text-sm text-neutral-500 dark:text-neutral-400'>{name}</p>
      </div>
    </div>
    
  )
}
