"use client";
import React, { useState, useEffect } from "react";
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
import { IconMenu2, IconX } from "@tabler/icons-react";
import {unstable_ViewTransition as ViewTransition} from "react";

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
      href: "https://medium.com/@asvinshrivas332",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Track viewport to apply width transforms only on desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateMatch = () => setIsDesktop(mediaQuery.matches);
    updateMatch();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateMatch);
    } else {
      // Safari fallback
      // @ts-ignore
      mediaQuery.addListener(updateMatch);
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateMatch);
      } else {
        // @ts-ignore
        mediaQuery.removeListener(updateMatch);
      }
    };
  }, []);

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["65%", "50%"]);
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
          width: isDesktop ? (width as unknown as string) : "100%",
          y: y,
          borderRadius: borderRadius,
          backdropFilter: backdropBlur,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",

        }}
        
        className={`fixed inset-x-0 top-0 z-50 mx-auto flex max-w-xs xs:max-w-sm sm:max-w-4xl xl:max-w-3xl items-center justify-between px-3 py-2 transition-all duration-300 w-full
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
        {/* Desktop Nav */}
        <ViewTransition>  
        <div className="hidden md:flex items-center">
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
        {/* Mobile Hamburger */}
        <div className=" md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 focus:outline-none"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? (
              <IconX className="h-6 w-6 text-neutral-700 dark:text-white" />
            ) : (
              <IconMenu2 className="h-6 w-6 text-neutral-700 dark:text-white" />
            )}
          </button>
        </div>
        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation menu"
            className="absolute left-1/2 top-full z-50 mt-2 w-[95vw] max-w-[22rem] -translate-x-1/2 rounded-md border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex flex-col items-start gap-3 p-4">
              {navItems.map((item, idx) => (
                <Link
                  className="w-full rounded-md px-2 py-2 text-sm text-neutral-700 outline-none transition-colors hover:bg-neutral-100 focus:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href={item.href}
                  key={idx}
                  role="menuitem"
                  tabIndex={0}
                  onClick={() => setMenuOpen(false)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') setMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
        <DarkModeToggle />
        </ViewTransition>
      </motion.nav>
    </Container>
    
  );
};
