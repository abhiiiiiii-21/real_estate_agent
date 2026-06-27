"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function About() {
  // Animation Variants for highly premium staggered sequence
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const fadeUpBlur: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const splitReveal: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: "0%", 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const centerImageVariant: Variants = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // GSAP-style Text Split Variants
  const textSplitContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.015, delayChildren: 0.4 }
    }
  };

  const textSplitWord: Variants = {
    hidden: { y: "120%", opacity: 0, rotate: 4 },
    visible: { 
      y: "0%", 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const bioText = "Pinellas County native with 7+ years of market expertise, combining strategic negotiation, investment insight, and results driven service across Greater Tampa Bay.";

  const sideImageVariant = (xStart: string, rotateStart: number, rotateEnd: number, delay: number): Variants => ({
    hidden: { x: xStart, y: 30, rotate: rotateStart, opacity: 0, scale: 0.8 },
    visible: { 
      x: 0, 
      y: 0, 
      rotate: rotateEnd, 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.4, delay: delay, ease: [0.16, 1, 0.3, 1] }
    }
  });

  return (
    <section id="about-section" className="bg-[#FAF9F7] py-16 md:py-24 font-instrument-sans overflow-hidden">
      <div className="mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="p-8 md:p-12 lg:p-16 relative flex flex-col justify-between min-h-[550px] lg:min-h-[600px] gap-12"
        >
          {/* Top Row: Title */}
          <div className="flex flex-col gap-4 items-start">
            <div className="overflow-hidden">
              <motion.h2 variants={splitReveal} className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1]">
                About
              </motion.h2>
            </div>
          </div>

          {/* Main Grid: Left Details, Center Image, Right Metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

            {/* Left Column: Bio Details */}
            <div className="lg:col-span-4 flex flex-col justify-end h-full">
              <div className="space-y-6 lg:max-w-sm">
                <motion.div variants={fadeUpBlur}>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
                    Christopher Brent Sergakis
                  </h3>
                  <p className="text-sm font-medium text-gray-400 mt-1">
                    Licensed Real Estate Agent & Consultant
                  </p>
                </motion.div>
                
                {/* GSAP-Style Split Text Reveal */}
                <motion.p 
                  variants={textSplitContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-gray-500 text-sm md:text-base leading-relaxed"
                >
                  {bioText.split(" ").map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden align-bottom">
                      <motion.span
                        variants={textSplitWord}
                        className="inline-block transform-origin-bottom-left"
                      >
                        {word}&nbsp;
                      </motion.span>
                    </span>
                  ))}
                </motion.p>
              </div>
            </div>

            {/* Center Column: Staggered Overlapping Portrait Images */}
            <div className="lg:col-span-4 flex justify-center items-center py-8 lg:py-0">
              <div className="relative w-full max-w-[500px] h-[380px] sm:h-[430px] md:h-[480px]">

                {/* Left Image: person_1.jpg */}
                <motion.div
                  variants={sideImageVariant("60%", 10, -4, 0.2)}
                  whileHover={{ y: -10, scale: 1.05, rotate: -2, zIndex: 30, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="absolute left-[-12%] sm:left-[-10%] md:left-[-8%] top-[5%] w-[132px] sm:w-[156px] md:w-[168px] aspect-[3/4] rounded-[20px] md:rounded-[28px] overflow-hidden shadow-lg border-2 border-white bg-gray-50 z-10"
                >
                  <Image
                    src="/about/person_1.jpg"
                    alt="Team Member 1"
                    fill
                    sizes="(max-width: 768px) 132px, 168px"
                    className="object-cover object-top"
                  />
                </motion.div>

                {/* Center Image: person_long.png */}
                <motion.div
                  variants={centerImageVariant}
                  whileHover={{ y: -5, scale: 1.03, zIndex: 30, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] sm:w-[248px] md:w-[270px] aspect-[3/4] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-gray-50 z-20"
                >
                  <Image
                    src="/about/person_long.png"
                    alt="Christopher Brent Sergakis"
                    fill
                    sizes="(max-width: 768px) 210px, 270px"
                    priority
                    className="object-cover object-top"
                  />
                </motion.div>

                {/* Right Image: person_2.jpg */}
                <motion.div
                  variants={sideImageVariant("-60%", -10, 4, 0.3)}
                  whileHover={{ y: -10, scale: 1.05, rotate: 2, zIndex: 30, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="absolute right-[-12%] sm:right-[-10%] md:right-[-8%] bottom-[5%] w-[144px] sm:w-[168px] md:w-[180px] aspect-[3/4] rounded-[20px] md:rounded-[28px] overflow-hidden shadow-lg border-2 border-white bg-gray-50 z-10"
                >
                  <Image
                    src="/about/person_2.jpg"
                    alt="Team Member 2"
                    fill
                    sizes="(max-width: 768px) 144px, 180px"
                    className="object-cover object-top"
                  />
                </motion.div>

              </div>
            </div>

            {/* Right Column: Stats & Experience */}
            <div className="lg:col-span-4 flex flex-col justify-end lg:items-end h-full mt-12 lg:mt-0">
              <div className="flex flex-col gap-6 lg:gap-8 w-full lg:max-w-xs items-start lg:items-end">
                
                {/* Stat 1 */}
                <motion.div variants={fadeUpBlur} className="flex flex-col lg:items-end text-left lg:text-right">
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Transactions
                  </span>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-blue-500 mt-1">
                    2,000+
                  </span>
                </motion.div>

                {/* Stat 2 */}
                <motion.div variants={fadeUpBlur} className="flex flex-col lg:items-end text-left lg:text-right">
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Market expert
                  </span>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-blue-500 mt-1">
                    7 yrs
                  </span>
                </motion.div>

                {/* Stat 3 */}
                <motion.div variants={fadeUpBlur} className="flex flex-col lg:items-end text-left lg:text-right">
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Deals per year
                  </span>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-blue-500 mt-1">
                    300+
                  </span>
                </motion.div>

                {/* Stat 4 */}
                <motion.div variants={fadeUpBlur} className="flex flex-col lg:items-end text-left lg:text-right">
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Team sales volume
                  </span>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-blue-500 mt-1">
                    $500m+
                  </span>
                </motion.div>

                {/* Original Experience Block */}
                <motion.div variants={fadeUpBlur} className="flex flex-col lg:items-end text-left lg:text-right">
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Experience
                  </span>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-blue-500 mt-1">
                    12 years
                  </span>
                </motion.div>

              </div>
            </div>

          </div>

          {/* Divider line separating upper half from professional details */}
          <motion.div variants={fadeUpBlur} className="w-full h-[1px] bg-gray-200 my-4" />

          {/* Professional Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Education */}
            <motion.div variants={fadeUpBlur} className="flex flex-col">
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                Education
              </span>
              <span className="text-sm font-medium text-gray-800 mt-1">
                BA Marketing · University of South Florida
              </span>
            </motion.div>

            {/* License */}
            <motion.div variants={fadeUpBlur} className="flex flex-col">
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                License
              </span>
              <span className="text-sm font-medium text-gray-800 mt-1">
                FL REALTOR® · SL3432773
              </span>
            </motion.div>

            {/* Brokerage */}
            <motion.div variants={fadeUpBlur} className="flex flex-col">
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                Brokerage
              </span>
              <span className="text-sm font-medium text-gray-800 mt-1">
                The Shop Real Estate Co. · 309 Belleview Blvd, Belleair FL 33756
              </span>
            </motion.div>

            {/* Service Area */}
            <motion.div variants={fadeUpBlur} className="flex flex-col">
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                Service area
              </span>
              <span className="text-sm font-medium text-gray-800 mt-1">
                Greater Tampa Bay since 2018 Pinellas, Hillsborough, Hernando, Pasco & Polk Counties
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
