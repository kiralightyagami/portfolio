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
  const width = useTransform(scrollY, [0, 100], ["58%", "50%"]);


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
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full bg-white px-3 py-2 dark:bg-neutral-900
        backdrop-blur-xl"
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
              className="relative px-2 py-1 text-sm"
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
      </motion.nav>
    </Container>
  );
};
