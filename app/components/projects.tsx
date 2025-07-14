"use client"
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export const Projects = () => {
    const projects = [


        {
            title: "Pixel Pilot",
                src: "/pixel-pilot.png",
            href: "#",
            description: "Pixel Pilot is a cutting-edge platform that transforms text prompts into stunning mathematical animations using Manim"
        },
        {
            title: "AeroFlux",
            src: "/aeroflux.png",
            href: "#",
            description: "A powerful suite of Solana tools - AeroFlux provides an intuitive and streamlined interface for interacting with the Solana blockchain."
        },
        {
            title: "Solana-mpc-tss",
            src: "/solana-mpc-tss.png",
            href: "#",
            description: "A comprehensive TypeScript library for Solana Multi-Party Computation (MPC) and Threshold Signature Schemes (TSS)"
        },
        
    ]
    
    return (
        <div className="py-10">
        <p className="text-secondary text-sm md:text-sm pt-4 max-w-lg">
            I love to build web application and projects that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            {projects.map((project, idx) => (
                <motion.div 
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ 
                    duration: 0.3, 
                    delay: idx * 0.1,
                    ease: "easeInOut"
                }}
                key={project.title}
                className="group relative mb-4 "
                >
                    <Link href={project.href}>
                    <Image src={project.src} 
                    alt={project.title} 
                    width={300} 
                    height={300}
                    className="w-full h-58 rounded-xl object-cover group-hover:scale-[1.02] transition duration-200"
                    />
                    <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400 ">
                        {project.title}
                    </h2>
                    <p className="max-w-sm mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                        {project.description}
                    </p>
                    </Link>
                </motion.div>
            ))}
        </div>
        </div>
    )
}