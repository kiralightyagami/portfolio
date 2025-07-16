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
                className="group relative mb-4 rounded-2xl realtive "
                >
                    <Link href={project.href}>
                        <Image src={project.src} 
                        alt={project.title} 
                        width={300} 
                        height={300}
                        className=" w-full h-34 rounded-xl object-cover group-hover:scale-[1.02] transition duration-200"
                        />
                        <h2 className="p-2 z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400 ">
                            {project.title}
                        </h2>
                        <p className="p-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
                            {project.description}
                        </p>
                    </Link>
                    <div className="flex flex-wrap -space-x-1 p-2">
                        {project.stack.map((stack) => (
                            <StackItem key={stack} technology={stack} />
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
        </div>
    )
}