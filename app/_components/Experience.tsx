"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import experienceData from "@/data/Experience.json";

interface Project {
  id: number;
  propertyName: string;
  location: string;
  shortLocation: string;
  propertyType: string;
  status: string;
  yearSold: string;
  price: string;
  beds: string;
  baths: string;
  sqft: string;
  image: string;
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  // Cast JSON data
  const projectsData = experienceData.projects as Project[];
  const content = experienceData.content;
  
  const activeProject = projectsData[activeIndex];

  const renderProjectCard = (project: Project, idx: number, isMobile: boolean) => {
    const isActive = activeIndex === idx;
    const indexStr = project.id.toString().padStart(2, '0');
    
    return (
      <motion.div
        key={`${isMobile ? "m" : "d"}-${project.id}-${idx}`}
        custom={idx}
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: isMobile ? 0 : idx * 0.1 }}
        onClick={() => setActiveIndex(idx)}
        onMouseEnter={() => setActiveIndex(idx)}
        className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm transition-all duration-300 bg-neutral-100 ${
          isMobile ? "w-[180px] shrink-0" : "w-full"
        } aspect-[9/14] ${isActive ? "scale-[1.02]" : "hover:scale-[1.01]"}`}
      >
        {/* Property Image with Side Reveal Parallax */}
        <motion.div
           initial={{ scale: 1.3 }}
           whileInView={{ scale: 1 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: isMobile ? 0 : idx * 0.1 }}
           className="w-full h-full relative"
        >
          <Image
            src={project.image}
            alt={project.propertyName}
            fill
            sizes="(max-width: 768px) 150px, 200px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        {/* Hover Details Overlay */}
        <div className="absolute inset-0 bg-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10 select-none">
          {/* Top: Location */}
          <div className="text-left space-y-0.5">
            <span className="text-xs md:text-sm font-semibold text-gray-300 block">
              {project.shortLocation}
            </span>
            <span className="text-[12px] md:text-xs text-gray-400 block font-medium">
              Florida
            </span>
          </div>

          {/* Center: Watermark Number & Price */}
          <div className="relative flex items-center justify-center h-20 w-full overflow-hidden">
            <span className="absolute text-[108px] font-bold text-[#1a1a1a] opacity-60 leading-none">
              {indexStr}
            </span>
            <span className="z-10 text-lg md:text-xl font-bold text-blue-600 tracking-tight">
              {project.price}
            </span>
          </div>

          {/* Bottom: Name & Type */}
          <div className="flex justify-between items-center text-[11px] md:text-xs font-semibold">
            <span className="text-gray-300 truncate pr-2 max-w-[70%]">
              {project.propertyName}
            </span>
            <span className="text-gray-400 font-medium whitespace-nowrap">
              {project.propertyType.split(' ')[0]}
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="experience-section" className="bg-[#FAF9F7] py-16 md:py-24 px-4 md:px-8 lg:px-12 xl:px-16 font-instrument-sans overflow-hidden">
      <div className="w-full mx-auto space-y-16">

        {/* Top Section: Desktop Grid & Mobile Infinite Marquee */}
        {/* Desktop Grid Layout */}
        <div className="desktop-grid hidden lg:grid grid-cols-6 gap-4">
          {projectsData.map((project, idx) => renderProjectCard(project, idx, false))}
        </div>

        {/* Mobile View: Infinite Marquee */}
        <div className="lg:hidden relative w-full overflow-hidden py-1">
          {/* Gradient Overlay Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAF9F7] via-[#FAF9F7]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAF9F7] via-[#FAF9F7]/80 to-transparent z-20 pointer-events-none" />

          {/* Marquee Row */}
          <div className="animate-marquee flex gap-4 pr-4">
            {/* Original Set */}
            {projectsData.map((project, idx) => renderProjectCard(project, idx, true))}
            {/* Duplicate Set for seamless looping */}
            {projectsData.map((project, idx) =>
              renderProjectCard(project, idx, true)
            )}
          </div>
        </div>

        {/* Middle Section: Title & Brand Block from JSON */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          {/* Large Left Title */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-tight flex flex-col gap-1">
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
                  {content.heading[0]}
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
                  {content.heading[1]}
                </motion.div>
              </div>
              <div className="overflow-hidden pt-1">
                <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} className="flex items-center gap-2">
                  <span className="text-blue-600 font-semibold">–</span>{content.heading[2]}
                </motion.div>
              </div>
            </h2>
          </div>

          {/* Right Brand Info */}
          <div className="lg:col-span-6 space-y-6 lg:max-w-md lg:ml-auto">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              {content.badge}
            </div>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {content.description}
            </p>
            <a 
              href="#featured-sales" 
              className="group inline-flex items-center justify-center bg-gray-900 text-white rounded-full px-8 py-3.5 text-xs md:text-sm font-semibold transition-transform hover:scale-[1.02] shadow-sm cursor-pointer no-underline"
            >
              <div className="relative overflow-hidden leading-tight">
                <span 
                  className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full" 
                  data-text={content.button}
                >
                  {content.button}
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Section: Divider & Dynamic Metadata Grid */}
        <div className="space-y-6 pt-4">
          <div className="w-full h-[1px] bg-gray-200" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">

            {/* Project Name */}
            <div className="flex flex-col">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400">
                Property Name
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeProject.propertyName}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg md:text-xl font-medium text-gray-900 mt-2 truncate"
                  title={activeProject.propertyName}
                >
                  {activeProject.propertyName}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Location */}
            <div className="flex flex-col animate-none">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400">
                Location
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeProject.location}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg md:text-xl font-medium text-gray-900 mt-2 truncate"
                  title={activeProject.location}
                >
                  {activeProject.location}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Year Sold */}
            <div className="flex flex-col animate-none">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400">
                Year Sold
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeProject.yearSold}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg md:text-xl font-medium text-gray-900 mt-2"
                >
                  {activeProject.yearSold}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Rooms */}
            <div className="flex flex-col animate-none">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400">
                Specs
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${activeProject.beds}-${activeProject.baths}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg md:text-xl font-medium text-gray-900 mt-2"
                >
                  {activeProject.beds} Bed, {activeProject.baths} Bath
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Total Area */}
            <div className="flex flex-col animate-none">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400">
                Total Area
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeProject.sqft}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg md:text-xl font-medium text-gray-900 mt-2"
                >
                  {activeProject.sqft}
                </motion.span>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section >
  );
}
