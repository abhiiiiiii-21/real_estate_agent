"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const badges = [
    "Local Market Expert",
    "Transparent & Personal Service",
    "10+ Years Experience"
  ];

  return (
    <section className="bg-[#FAF9F7] pb-12 px-1.5 sm:px-3 md:px-4 lg:px-6 font-instrument-sans select-none overflow-hidden">
      <div className="max-w-[1550px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#D2DFE5] rounded-[32px] md:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[830px] flex flex-col justify-between"
        >
          {/* Full Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero/hero_building.jpg"
              alt="Modern Building Background"
              width={2400}
              height={1500}
              priority
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Subtle overlay to soften contrast */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Centered Left Title */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute left-6 sm:left-10 md:left-12 lg:left-16 top-[35%] sm:top-1/2 -translate-y-1/2 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.08] max-w-xl text-left z-10"
          >
            Guiding you home
            <br />
            with confidence.
          </motion.h1>

          {/* Top Section: Badges (aligned right) */}
          <div className="flex justify-end w-full z-10">
            {/* Badges Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col gap-3 items-start lg:items-end w-full lg:w-auto"
            >
              {badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="border border-white/20 bg-white/25 backdrop-blur-md rounded-full px-5 py-2 text-xs md:text-sm font-medium text-gray-800 shadow-sm"
                >
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Floating Realtor Portrait Overlay (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 z-20 w-28 h-38 sm:w-36 sm:h-48 md:w-44 md:h-58 lg:w-[210px] lg:h-[280px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 bg-white/20 backdrop-blur-md"
          >
            <Image
              src="/hero/hero_cbs.png"
              alt="Agent Christopher Brent Sergakis"
              fill
              priority
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Bottom Section: Actions & Description */}
          <div className="flex flex-col sm:flex-row justify-between items-end gap-6 z-10 mt-auto">
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col gap-3 w-fit"
            >
              <a
                href="#consultation"
                className="group relative flex items-center justify-between pl-5 pr-11 py-2 rounded-full border border-gray-200 bg-white text-xs md:text-sm font-semibold text-gray-900 transition-all duration-500 ease-in-out hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:pl-11 hover:pr-5 min-h-[38px] w-fit shadow-sm"
              >
                <span className="transition-all duration-500 ease-in-out">Book a Free Consultation</span>
                <div className="absolute left-[calc(100%-34px)] top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center transition-all duration-500 ease-in-out group-hover:left-2 group-hover:bg-white group-hover:text-gray-900">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>

              <a
                href="#listings"
                className="group relative flex items-center justify-between pl-5 pr-11 py-2 rounded-full border border-gray-200 bg-white text-xs md:text-sm font-semibold text-gray-900 transition-all duration-500 ease-in-out hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:pl-11 hover:pr-5 min-h-[38px] w-fit shadow-sm"
              >
                <span className="transition-all duration-500 ease-in-out">View Listings</span>
                <div className="absolute left-[calc(100%-34px)] top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center transition-all duration-500 ease-in-out group-hover:left-2 group-hover:bg-white group-hover:text-gray-900">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </motion.div>

            {/* Realtor Subtitle Details (Hidden on tiny mobile) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hidden sm:flex flex-col items-end gap-1.5 text-right text-white max-w-[280px] md:max-w-xl pr-36 sm:pr-40 md:pr-48 lg:pr-56 pb-2"
            >
              <p className="text-[10px] md:text-xs font-semibold tracking-wider leading-relaxed text-white/90">
                TRUSTED INDEPENDENT REAL ESTATE GUIDANCE FOR BUYING, SELLING, AND INVESTING
              </p>
              <span className="text-[11px] md:text-xs font-bold tracking-widest text-white mt-1 block">
                AGENT CHRISTOPHER BRENT SERGAKIS
              </span>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}