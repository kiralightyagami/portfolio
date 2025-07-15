"use client"
import React from "react";
import { motion } from "motion/react";
export const SectionHeading = ({children , delay = 0, className}: {children?: string, delay?: number, className?: string}) => {
    return (
        <h2 className={` font-normal max-w-lg pt-4 text-sm md:text-sm ${className}`}>
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
}