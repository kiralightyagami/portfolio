"use client"
import React from "react";
import { motion } from "motion/react";
export const SectionHeading = ({children , delay = 0, className}: {children?: string, delay?: number, className?: string}) => {
    return (
        <h2 className={` font-normal mt-4 relative max-w-lg w-fit text-sm md:text-sm ${className}`}>
           <Background />
           {children?.split(" ").map((word, idx) => (
                <motion.span 
                key={word+idx}
                initial={{ 
                    opacity: 0,
                     y: 5 ,
                     filter: "blur(2px)" 
                }}
                animate={{ 
                    opacity: 1, 
                    y: 0,
                    filter: "blur(0px)"
                }}
                transition={{ 
                    duration: 0.5, 
                    delay: delay + idx * 0.05,
                    ease: "easeInOut"
                }}
                viewport={{
                    once: true,
                }}
                >{word}{" "}</motion.span>
            ))}
        </h2>
    )
};


const Background = () => {
    return (
        <motion.div 
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}    
        transition={{
            duration: 0.3,
            delay: 1,
            ease: "easeInOut",
        }}
        className="absolute inset-0 h-full w-full scale-[1.04] bg-neutral-100">
            <div className="h-1 w-1 rounded-full bg-neutral-200 absolute animate-pulse -top-px -left-px"></div>
            <div className="h-1 w-1 rounded-full bg-neutral-200 absolute animate-pulse -top-px -right-px"></div>
            <div className="h-1 w-1 rounded-full bg-neutral-200 absolute animate-pulse -bottom-px -left-px"></div>
            <div className="h-1 w-1 rounded-full bg-neutral-200 absolute animate-pulse -bottom-px -right-px"></div>
        </motion.div>
    )
}