"use client";

import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nabvar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about-section" },
    { name: "Services", href: "#services-section" },
    { name: "Properties", href: "#properties-section" },
    { name: "Testimonials", href: "#testimonials-section" }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="w-full bg-[#FAF9F7] py-6 px-6 md:px-12 lg:px-16 flex justify-between items-center font-instrument-sans relative z-50 select-none"
    >
      {/* Left side Logo */}
      <a href="/" className="text-xl md:text-2xl font-semibold tracking-wide text-gray-900">
        CHRISTOPHER
      </a>

      {/* Middle Links (Desktop) */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="group inline-flex items-center gap-1 text-sm font-medium text-gray-600 no-underline transition-colors duration-200 hover:text-gray-900"
          >
            <div className="relative overflow-hidden leading-tight">
              <span
                className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full"
                data-text={link.name}
              >
                {link.name}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Right side CTA (Desktop) */}
      <div className="hidden md:flex">
        <a
          href="#contact"
          className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gray-900 text-white text-sm font-semibold transition-transform hover:scale-[1.02]"
        >
          <div className="relative overflow-hidden leading-tight">
            <span 
              className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full" 
              data-text="Get In Touch"
            >
              Get In Touch
            </span>
          </div>
        </a>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-900 hover:text-gray-600 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Dropdown Menu (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#FAF9F7] border-b border-gray-100 shadow-lg py-6 px-6 flex flex-col gap-5 md:hidden z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="group flex items-center justify-between w-full text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                <div className="relative overflow-hidden leading-tight">
                  <span
                    className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full"
                    data-text={link.name}
                  >
                    {link.name}
                  </span>
                </div>
              </a>
            ))}
            <div className="h-[1px] bg-gray-100 my-1" />
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="group inline-flex items-center justify-center w-full py-4 rounded-full bg-gray-900 text-white text-base font-semibold transition-transform hover:scale-[1.02] no-underline"
            >
              <div className="relative overflow-hidden leading-tight">
                <span 
                  className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full" 
                  data-text="Get In Touch"
                >
                  Get In Touch
                </span>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
