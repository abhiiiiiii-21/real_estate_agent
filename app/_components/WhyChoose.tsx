"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import data from '../../data/WhyChooseUS.json';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function WhyChoose() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      // Header text word stagger reveal
      gsap.fromTo(
        ".why-choose-word",
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          }
        }
      );

      // Accordion rows stagger fade-up
      const accordionItems = gsap.utils.toArray(".accordion-row");
      if (accordionItems.length > 0) {
        gsap.fromTo(
          accordionItems,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: ".accordion-container",
              start: "top 80%",
              once: true,
            },
            clearProps: "transform,opacity"
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#050505] text-white py-24 px-4 md:px-12 lg:px-24 overflow-visible font-instrument-sans">
      <div className="max-w-7xl mx-auto mt-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] max-w-2xl flex flex-wrap gap-x-3 gap-y-1">
            {"Why Clients Choose Christopher Brent".split(" ").map((word, i) => (
              <span key={i} className="overflow-hidden inline-block pb-1">
                <span className="why-choose-word inline-block">{word}</span>
              </span>
            ))}
          </h2>
          <button className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold transition-transform hover:scale-[1.02] cursor-pointer shrink-0">
            <div className="relative overflow-hidden leading-tight">
              <span 
                className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full" 
                data-text="Book a Free Consultation"
              >
                Book a Free Consultation
              </span>
            </div>
          </button>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col accordion-container">
          {/* Top border for the first item */}
          <div className="w-full h-[1px] bg-white/10" />

          {data.map((item, index) => {
            const isOpen = openIndex === index;
            const number = `/00${index + 1}`;

            return (
              <div key={index} className="accordion-row flex flex-col w-full">
                <motion.div
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  initial={false}
                  animate={{
                    backgroundColor: isOpen ? '#ffffff' : 'rgba(255, 255, 255, 0)',
                    color: isOpen ? '#000000' : '#ffffff',
                    borderRadius: isOpen ? '32px' : '0px',
                    padding: isOpen ? '2.5rem 2rem' : '2.5rem 0rem',
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group cursor-pointer w-full hover:bg-white/5"
                >
                  <div className="flex items-center justify-between w-full relative px-4 md:px-8">

                    {/* Left Section: Number and Text */}
                    <div className="flex items-start gap-6 md:gap-16 flex-1 z-10 min-h-[3rem] md:min-h-[3.5rem] pt-1 md:pt-2">
                      <span className={`text-xs md:text-sm font-medium mt-2 transition-colors duration-500 ${isOpen ? 'text-gray-500' : 'text-gray-400'}`}>
                        {number}
                      </span>
                      <div className="flex flex-col gap-2 max-w-lg">
                        <h3 className={`text-2xl md:text-4xl font-medium tracking-tight transition-all duration-500 ${isOpen ? 'text-black' : 'text-white group-hover:text-gray-300 group-hover:translate-x-2'}`}>
                          {item.title}
                        </h3>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <p className="text-gray-600 text-sm md:text-base leading-relaxed pt-4 select-none">
                                {item.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Middle Section: Image (Hidden on mobile for better layout) */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, width: 0, margin: 0 }}
                          animate={{ opacity: 1, width: 340, margin: '0 2rem' }}
                          exit={{ opacity: 0, width: 0, margin: 0 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="relative hidden lg:flex items-center justify-center shrink-0 z-20 h-0"
                        >
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="w-[340px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-2xl shrink-0"
                          >
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Right Section: Arrow */}
                    <div className="z-10 shrink-0 ml-auto">
                      <div
                        className={`relative overflow-hidden flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border transition-all duration-500 ${isOpen ? 'border-gray-300 bg-white shadow-sm' : 'border-white/20 bg-transparent group-hover:border-white/50 group-hover:bg-white/10'
                          }`}
                      >
                        <div className="relative flex items-center justify-center w-full h-full">
                          {/* Original Arrow */}
                          <ArrowRight className={`absolute transition-all duration-500 w-5 h-5 md:w-6 md:h-6 ${isOpen ? 'text-black' : 'text-white group-hover:translate-x-8 group-hover:opacity-0'}`} />
                          {/* Hover Arrow */}
                          <ArrowRight className={`absolute transition-all duration-500 w-5 h-5 md:w-6 md:h-6 text-white -translate-x-8 opacity-0 ${!isOpen ? 'group-hover:translate-x-0 group-hover:opacity-100' : ''}`} />
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>

                {/* Bottom border */}
                <div className={`w-full transition-colors duration-500 h-[1px] ${isOpen ? 'bg-transparent' : 'bg-white/10'}`} />
              </div>
            );
          })}
        </div>

        {/* Closing text */}
        <div className="mt-24 md:mt-42 pb-§5 text-center flex justify-center">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-white">
            ...and every sale tells a story.
          </h3>
        </div>
      </div>
    </section>
  );
}