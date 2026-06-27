"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="w-full font-instrument-sans overflow-hidden p-0 mt-24 md:mt-36 lg:mt-40 mb-0 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden w-full min-h-[450px] md:min-h-[520px] flex flex-col items-center justify-center text-center px-6 py-16 md:px-16 md:py-24"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/cta.jpg"
            alt="Find Your Home"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark overlay to match mockup exactly */}
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6.5xl font-medium tracking-tight mb-8 z-10 max-w-4xl leading-[1.12]"
        >
          Find You. We&apos;ll Help You Get There.
        </motion.h2>

        {/* Let's Get Started CTA Button with custom sliding arrow animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="z-10"
        >
          <Link
            href="https://www.instagram.com/family_friends_realestate/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-gray-900 text-sm font-semibold transition-transform hover:scale-[1.02] shadow-xl w-fit cursor-pointer no-underline font-instrument-sans"
          >
            <div className="relative overflow-hidden leading-tight">
              <span 
                className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full" 
                data-text="Get in Touch"
              >
                Get in Touch
              </span>
            </div>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}
