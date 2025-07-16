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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            {projects.map((project, idx) => (
                <motion.div 
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                whileHover={{ 
                    boxShadow: "var(--shadow-input)"
                }}
                transition={{ 
                    duration: 0.3, 
                    delay: idx * 0.1,
                    ease: "easeInOut"
                }}
                key={project.title}
                className="group relative mb-4  rounded-2xl realtive "
                >
                    <Link href={project.href}>
                        <Image src={project.src} 
                        alt={project.title} 
                        width={300} 
                        height={300}
                        className=" w-full h-34 rounded-xl object-cover group-hover:scale-[1.02] transition duration-200"
                        />
                        <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
                        <div>
                        <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-700 dark:text-neutral-200 ">
                            {project.title}
                        </h2>
                        <p className=" mt-2 max-w-[17rem] text-sm text-neutral-500 dark:text-neutral-400">
                            {project.description}
                        </p>
                        </div>
                        <div className="mt-2 flex max-w[14rem] flex-wrap gap-1">
                        {project.stack.map((stack) => (
                            <StackItem key={stack} technology={stack} className="-mr-3 hover:z-10"/>
                        ))}
                    </div>
                    </div>
                    </Link>
                    
                </motion.div>
            ))}
        </div>
        </div>
    )
}