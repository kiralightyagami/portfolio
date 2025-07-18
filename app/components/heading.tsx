"use client"
import React from "react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";

export const Heading = ({ as: Tag ="h1", children, className}: {as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6", children: React.ReactNode, className?: string}) => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ 
                duration: 0.3, 
                ease: "easeInOut",
            }}
            viewport={{ once: true }}
        >
            <Tag className={cn("text-neutral-900 dark:text-white drop-shadow-lg text-xl sm:text-2xl md:text-4xl font-bold tracking-tighter text-left", className)}>
                {children}
            </Tag>
        </motion.div>
    )
}