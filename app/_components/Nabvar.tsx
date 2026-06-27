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

  return (
    <nav className="w-full bg-[#FAF9F7] py-6 px-6 md:px-12 lg:px-16 flex justify-between items-center font-instrument-sans relative z-50 select-none">
      {/* Left side Logo */}
      <a href="/" className="text-xl md:text-2xl font-semibold tracking-wide text-gray-900">
        CBS
      </a>

      {/* Middle Links (Desktop) */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Right side CTA (Desktop) */}
      <div className="hidden md:flex">
        <a
          href="#contact"
          className="group relative flex items-center justify-between pl-5 pr-11 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-900 transition-all duration-500 ease-in-out hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:pl-11 hover:pr-5 min-h-[38px]"
        >
          <span className="transition-all duration-500 ease-in-out">Get In Touch</span>
          <div className="absolute left-[calc(100%-34px)] top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center transition-all duration-500 ease-in-out group-hover:left-2 group-hover:bg-white group-hover:text-gray-900">
            <ArrowRight className="w-4 h-4" />
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
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-[1px] bg-gray-100 my-1" />
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="group relative flex items-center justify-between pl-5 pr-11 py-2 rounded-full border border-gray-200 bg-white text-base font-semibold text-gray-900 transition-all duration-500 ease-in-out hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:pl-11 hover:pr-5 min-h-[42px] w-full"
            >
              <span className="transition-all duration-500 ease-in-out">Get In Touch</span>
              <div className="absolute left-[calc(100%-36px)] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center transition-all duration-500 ease-in-out group-hover:left-2 group-hover:bg-white group-hover:text-gray-900">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
