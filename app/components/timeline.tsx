"use client"
import React, { useRef } from 'react'
import {  motion, useInView } from 'motion/react'
import { IconCircleCheckFilled } from '@tabler/icons-react'

type data = {
    year: string;
    content: {
        title: string;
        description?: string | React.ReactNode;
    }[];
}


export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {once: true, amount: 0.6});  
  const data: data[] = [{
    year: "2025",
    content: [
        {
            title: "Started my learning journey in web3",
            description: "I started my learning journey in web3 by learning about the basics of solana blockchain and smart contracts.",
        },
    ]},
    {
    year: "2024",
    content: [
        {
            title: "Started my learning & building journey in web development",
            description: "I started my learning journey in web development from harkirat singh cohort 3.0",
        },
    ],
    },
    {
        year: "2023",
        content: [
            {
                title: "Started my learning journey in DSA",
                description: "I started my learning journey in DSA by learning about the basics of data structures and algorithms.",
            },
        ],
    },
  ]


  
    return (
    <div ref={ref} className='py-10'>
     {data.map((individualYear, ix) => (
        <div content="px-4 py-1 " key={individualYear.year} className='mb-4'>
            <motion.h2 
            animate={{
                filter: isInView ? "blur(0px)" : "blur(10px)",
                opacity: isInView ? 1 : 0,
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: ix * 0.1,
            }}
            className='font-bold text-black rounded-md shadow-input w-fit px-2 py-0.5 mb-2'>{individualYear.year}</motion.h2>
            <div className="flex flex-col gap-4">
            {individualYear.content.map((content, ix) => (
                <div key={content.title} className='pl-4'>
                    <Step isInView={isInView} idx={ix}  >
                    <motion.h3
                    initial={{
                        opacity: 0,
                        y: -10,
                    }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : -10,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.2 * ix,
                    }} className='text-neutral-600'>{content.title}</motion.h3>
                    </Step>
                    {content.description && 
                    <motion.p 
                    initial={{
                        opacity: 0,
                        y: -10,
                    }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : -10,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.3 * ix,
                    }}
                    className='text-neutral-400 pt-1 pl-4 text-sm'>
                        {content.description}
                        </motion.p>}
                    
                    </div>
                ))}
            </div>
        </div>
    ))}
    </div>
  );
};



const Step = ({ children, className, isInView, idx}: {children: React.ReactNode, className?: string, isInView: boolean, idx: number}) => {
     
    return (
        <motion.div 
        initial={{
            opacity: 0,
            y: -10,
        }}
        animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : -10,
        }}
        transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.2 * idx,
        }}
        className={`flex items-start gap-2 ${className}`}>
            <IconCircleCheckFilled className='h-4 w-4 mt-1 text-neutral-500' />
            {children}
        </motion.div>
    )
}