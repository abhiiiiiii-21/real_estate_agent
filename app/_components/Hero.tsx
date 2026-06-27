"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const badges = [
    "Local Market Expert",
    "Transparent & Personal Service",
    "10+ Years Experience"
  ];

  // Easing for premium feel
  const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll Parallax Zoom Effect
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={containerRef} className="bg-[#FAF9F7] pb-12 px-1.5 sm:px-3 md:px-4 lg:px-6 font-instrument-sans select-none overflow-hidden">
      <div className="max-w-[1550px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.6, ease: customEase }}
          className="bg-[#D2DFE5] rounded-[32px] md:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[830px] flex flex-col justify-between"
        >
          {/* Full Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full origin-center">
              <motion.div 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.4, ease: customEase }}
                className="w-full h-full"
              >
                <Image
                  src="/hero/hero_building.jpg"
                  alt="Modern Building Background"
                  width={2400}
                  height={1500}
                  priority
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </motion.div>
            </motion.div>
            {/* Subtle overlay to soften contrast */}
            <div className="absolute inset-0 bg-black/5" />
          </div>

          {/* Centered Left Title - Cinematic Line Reveal */}
          <div className="absolute left-6 sm:left-10 md:left-12 lg:left-16 top-[35%] sm:top-1/2 -translate-y-1/2 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.08] max-w-xl text-left flex flex-col gap-1">
              <span className="overflow-hidden inline-block pb-1">
                <motion.span 
                  initial={{ y: "120%", rotate: 2 }} 
                  animate={{ y: "0%", rotate: 0 }} 
                  transition={{ delay: 0.6, duration: 1.2, ease: customEase }} 
                  className="inline-block transform-origin-bottom-left"
                >
                  Guiding you home
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block pb-1">
                <motion.span 
                  initial={{ y: "120%", rotate: 2 }} 
                  animate={{ y: "0%", rotate: 0 }} 
                  transition={{ delay: 0.7, duration: 1.2, ease: customEase }} 
                  className="inline-block transform-origin-bottom-left"
                >
                  with confidence.
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Top Section: Badges (aligned right) - Staggered Mask Reveal */}
          <div className="flex justify-end w-full z-10">
            {/* Badges Stack */}
            <div className="flex flex-col gap-3 items-start lg:items-end w-full lg:w-auto">
              {badges.map((badge, idx) => (
                <div key={idx} className="overflow-hidden rounded-full">
                  <motion.div
                    initial={{ y: "120%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.6 + idx * 0.1, duration: 1, ease: customEase }}
                    className="border border-white/20 bg-white/25 backdrop-blur-md rounded-full px-5 py-2 text-xs md:text-sm font-medium text-gray-800 shadow-sm"
                  >
                    {badge}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Realtor Portrait Overlay (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.0, duration: 1.4, ease: customEase }}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 z-20 w-28 h-38 sm:w-36 sm:h-48 md:w-44 md:h-58 lg:w-[210px] lg:h-[280px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 bg-white/20 backdrop-blur-md"
          >
            <Image
              src="/hero/hero_cbs.png"
              alt="Agent Christopher Brent Sergakis"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Bottom Section: Actions & Description */}
          <div className="flex flex-col sm:flex-row justify-between items-end gap-6 z-10 mt-auto">
            {/* CTA Buttons - Staggered Mask Reveal */}
            <div className="flex flex-col gap-3 w-fit">
              <div className="overflow-hidden rounded-full p-[2px] -m-[2px]">
                <motion.div
                  initial={{ y: "120%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 0.9, duration: 1, ease: customEase }}
                >
                  <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, 'contact')}
                    className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-gray-900 text-xs md:text-sm font-semibold transition-transform hover:scale-[1.02] shadow-sm w-fit no-underline"
                  >
                    <div className="relative overflow-hidden leading-tight">
                      <span 
                        className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full" 
                        data-text="Book a Free Consultation"
                      >
                        Book a Free Consultation
                      </span>
                    </div>
                  </a>
                </motion.div>
              </div>

              <div className="overflow-hidden rounded-full p-[2px] -m-[2px]">
                <motion.div
                  initial={{ y: "120%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 1.0, duration: 1, ease: customEase }}
                >
                  <a
                    href="#properties-section"
                    onClick={(e) => handleScroll(e, 'properties-section')}
                    className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-gray-900 text-xs md:text-sm font-semibold transition-transform hover:scale-[1.02] shadow-sm w-fit no-underline"
                  >
                    <div className="relative overflow-hidden leading-tight">
                      <span 
                        className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full" 
                        data-text="View Listings"
                      >
                        View Listings
                      </span>
                    </div>
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Realtor Subtitle Details (Hidden on tiny mobile) */}
            <div className="hidden sm:block overflow-hidden pr-36 sm:pr-40 md:pr-48 lg:pr-56 pb-2 max-w-[280px] md:max-w-xl">
              <motion.div
                initial={{ y: "120%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 1.2, duration: 1, ease: customEase }}
                className="flex flex-col items-end gap-1.5 text-right text-white"
              >
                <p className="text-[10px] md:text-xs font-semibold tracking-wider leading-relaxed text-white/90">
                  TRUSTED INDEPENDENT REAL ESTATE GUIDANCE FOR BUYING, SELLING, AND INVESTING
                </p>
                <span className="text-[11px] md:text-xs font-bold tracking-widest text-white mt-1 block">
                  AGENT CHRISTOPHER BRENT SERGAKIS
                </span>
              </motion.div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}