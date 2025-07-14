"use client"
import React, { useState } from "react";
import { Container } from "../container";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

export const Navbar = () => {
    const navItems = [
        {
            label: "About",
            href: "/about",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "Contact",
            href: "/contact",
        },
        {
            label: "Blog",
            href: "/blog",
        },
    ]

    const [hovered, setHovered] = useState<number | null>(null);
    const {scrollY} = useScroll();

    const [scrolled, setScrolled] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latestValue) => {
        if(latestValue > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    })
    return (
        <Container>
           <motion.nav
           animate={{
            boxShadow: scrolled ? "var(--shadow-input)" : "none",
            width: scrolled ? '50%' : '100%',
            y: scrolled ? 10 : 0,
        }}
        transition={{
            duration: 0.3,
            ease: "linear",
        }}
           className="rounded-full fixed top-0 inset-x-0 flex max-w-4xl mx-auto items-center justify-between py-2 px-3">
            <Image className="h-10 w-10 rounded-full" src="/avatar.png" alt="avatar" width={100} height={100} />
            <div className="flex items-center ">
                {navItems.map((item, idx) => (
                    <Link className="text-sm relative px-2 py-1" 
                    href={item.href} 
                    key={idx}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    >
                        {hovered === idx && (
                            <motion.span
                                className="h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800"
                                layoutId="hovered-span"
                                
                            />
                        )}
                        <span className="relative z-10">{item.label}</span>
                    </Link>
                ))}
            </div>
           </motion.nav>
        </Container>
    )
}