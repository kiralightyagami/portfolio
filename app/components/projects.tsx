"use client"
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { Project,   projects as defaultProjects } from "../constants/project";
import { SectionHeading } from "./section-heading";
import { StackItem } from "./stack-item";

export const Projects = ({projects = defaultProjects}: {projects?: Project[]}) => {
    
    
    return (
        <div className="py-10 ">
        <SectionHeading delay={0.2}>
            A few of my projects.
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
            {projects.map((project, idx) => (
                <motion.div 
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                whileHover={{ 
                    boxShadow: "var(--shadow-input)",
                    y: -4
                }}
                transition={{ 
                    duration: 0.3, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                }}
                key={project.title}
                className="group relative mb-4 rounded-2xl realtive w-full max-w-full"
                >
                    <Link href={project.href}>
                        <Image src={project.src} 
                        alt={project.title} 
                        width={300} 
                        height={300}
                        className=" w-full h-34 rounded-xl object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                        />
                        <motion.div 
                        className="flex flex-1 flex-col justify-between py-4"
                        initial={{ paddingLeft: "0px", paddingRight: "0px" }}
                        whileHover={{ paddingLeft: "16px", paddingRight: "16px" }}
                        transition={{ 
                            duration: 0.5, 
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        >
                        <div>
                        <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-700 dark:text-neutral-200 transition-colors duration-300 ease-out group-hover:text-neutral-900 dark:group-hover:text-white text-center md:text-left">
                            {project.title}
                        </h2>
                        <p className="mt-2 max-w-[17rem] text-sm text-neutral-500 dark:text-neutral-400 transition-colors duration-300 ease-out text-center md:text-left mx-auto md:mx-0">
                            {project.description}
                        </p>
                        </div>
                        <div className="mt-2 flex max-w[14rem] flex-wrap gap-1 justify-center md:justify-start">
                        {project.stack.map((stack) => (
                            <StackItem key={stack} technology={stack} className="-mr-3 hover:z-10"/>
                        ))}
                    </div>
                    </motion.div>
                    </Link>
                    
                </motion.div>
            ))}
        </div>
        </div>
    )
}