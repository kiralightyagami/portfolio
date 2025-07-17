"use client";
import React, { useState } from "react";
import { Container } from "../container";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { DarkModeToggle } from "../dark-mode-toggle";

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
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState<boolean>(false);

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["55%", "50%"]);
  const borderRadius = useTransform(scrollY, [0, 100], ["0px", "9999px"]);
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"]);

  const filter = useMotionTemplate`blur(${useTransform(scrollY, [0, 100], [0, 10])}px)`;

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    if (latestValue > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <Container>
      <motion.nav
        style={{
          boxShadow: scrolled ? "var(--shadow-input)" : "none",
          width: width,
          y: y,
          borderRadius: borderRadius,
          backdropFilter: backdropBlur,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className={`fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-between px-3 py-2 transition-all duration-300
        ${scrolled 
          ? 'bg-white/80 dark:bg-neutral-900/80 border border-white/20 dark:border-white/10' 
          : 'bg-transparent border border-transparent'
        }`}
         >
        <Link href="/">
          <Image
            className="h-10 w-10 rounded-full"
            src="/avatar.png"
            alt="avatar"
            width={100}
            height={100}
          />
        </Link>
        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link
              className="relative px-2 py-1 text-sm text-neutral-700 dark:text-white"
              href={item.href}
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                  layoutId="hovered-span"
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </div>
        <DarkModeToggle />
      </motion.nav>
    </Container>
  );
};
