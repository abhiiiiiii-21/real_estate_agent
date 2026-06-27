"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function About() {
  // Smooth scroll handler to next section
  const handleScrollDown = () => {
    const nextSection = document.getElementById("why-choose-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about-section" className="bg-[#FAF9F7] py-16 md:py-24 font-instrument-sans overflow-hidden">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 md:p-12 lg:p-16 relative flex flex-col justify-between min-h-[550px] lg:min-h-[600px] gap-12"
        >
          {/* Top Row: Title & Badge */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1]">
              About
            </h2>
          </div>

          {/* Main Grid: Left Details, Center Image, Right Metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

            {/* Left Column: Bio Details */}
            <div className="lg:col-span-4 flex flex-col justify-end h-full">
              <div className="space-y-6 lg:max-w-sm">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
                    Christopher Brent Sergakis
                  </h3>
                  <p className="text-sm font-medium text-gray-400 mt-1">
                    Licensed Real Estate Agent & Consultant
                  </p>
                </div>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  Pinellas County native with 7+ years of market expertise, combining strategic negotiation, investment insight, and results driven service across Greater Tampa Bay.
                </p>
              </div>
            </div>

            {/* Center Column: Portrait Image */}
            <div className="lg:col-span-4 flex justify-center items-center py-4 lg:py-0">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl shadow-gray-150/50 group bg-gray-50"
              >
                <Image
                  src="/about/person_long.png"
                  alt="Christopher Brent"
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </div>

            {/* Right Column: Experience & Focus */}
            <div className="lg:col-span-4 flex flex-col justify-end lg:items-end h-full">
              <div className="flex flex-row lg:flex-col gap-8 lg:gap-6 justify-between lg:justify-end w-full lg:max-w-xs">

                {/* Experience Block */}
                <div className="flex flex-col lg:items-end">
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Experience
                  </span>
                  <span className="text-base md:text-lg lg:text-xl font-medium text-gray-900 mt-1.5">
                    12 years
                  </span>
                </div>

                {/* Areas of Focus Block */}
                <div className="flex flex-col lg:items-end">
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Areas of Focus
                  </span>
                  <span className="text-base md:text-lg lg:text-xl font-medium text-gray-900 mt-1.5 lg:text-right">
                    Pinellas County, St. Petersburg,<br className="hidden md:inline lg:hidden" /> Clearwater, Belleair
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Divider line separating upper half from professional details */}
          <div className="w-full h-[1px] bg-gray-200 my-4" />

          {/* Professional Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Education */}
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                Education
              </span>
              <span className="text-sm font-medium text-gray-800 mt-1">
                BA Marketing · University of South Florida
              </span>
            </div>

            {/* License */}
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                License
              </span>
              <span className="text-sm font-medium text-gray-800 mt-1">
                FL REALTOR® · SL3432773
              </span>
            </div>

            {/* Brokerage */}
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                Brokerage
              </span>
              <span className="text-sm font-medium text-gray-800 mt-1">
                The Shop Real Estate Co. · 309 Belleview Blvd, Belleair FL 33756
              </span>
            </div>

            {/* Service Area */}
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                Service area
              </span>
              <span className="text-sm font-medium text-gray-800 mt-1">
                Greater Tampa Bay since 2018 Pinellas, Hillsborough, Hernando, Pasco & Polk Counties
              </span>
            </div>
          </div>

          {/* Bottom Right: Scroll Button */}
          {/* <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10">
            <motion.button
              onClick={handleScrollDown}
              whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to next section"
              className="w-10 h-10 md:w-12 md:h-12 bg-gray-100/80 hover:bg-gray-100 text-gray-600 rounded-full flex items-center justify-center transition-colors cursor-pointer border border-gray-200/50 shadow-sm"
            >
              <ArrowDown className="w-5 h-5 md:w-6 md:h-6 animate-bounce" style={{ animationDuration: '2.5s' }} />
            </motion.button>
          </div> */}

        </motion.div>
      </div>
    </section>
  );
}
