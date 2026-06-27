"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  indexStr: string;
  projectName: string;
  locationShort: string;
  locationFull: string;
  area: string;
  year: string;
  rooms: string;
  floors: string;
  image: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    indexStr: "01",
    projectName: "AG24K",
    locationShort: "Belleair, USA",
    locationFull: "309 Belleview Blvd, Belleair FL",
    area: "664 m²",
    year: "2024",
    rooms: "5",
    floors: "3 floor",
    image: "/RecentlySold/1.png"
  },
  {
    id: 2,
    indexStr: "02",
    projectName: "MC20K",
    locationShort: "Clearwater, USA",
    locationFull: "812 Sunset Point Rd, Clearwater FL",
    area: "216 m²",
    year: "2024",
    rooms: "4",
    floors: "5 floor",
    image: "/RecentlySold/2.png"
  },
  {
    id: 3,
    indexStr: "03",
    projectName: "JK12K",
    locationShort: "St. Pete, USA",
    locationFull: "1200 Beach Dr NE, St. Petersburg FL",
    area: "928 m²",
    year: "2025",
    rooms: "6-7",
    floors: "4 floor",
    image: "/RecentlySold/3.jpg"
  },
  {
    id: 4,
    indexStr: "04",
    projectName: "AB45U",
    locationShort: "Palm Harbor, USA",
    locationFull: "249 Florida Ave, Palm Harbor FL",
    area: "534 m²",
    year: "2025",
    rooms: "4",
    floors: "4 floor",
    image: "/RecentlySold/4.jpg"
  },
  {
    id: 5,
    indexStr: "05",
    projectName: "Y2KC",
    locationShort: "Tampa, USA",
    locationFull: "1012 E Cumberland Ave, Tampa FL",
    area: "420 m²",
    year: "2025",
    rooms: "3-4",
    floors: "2 floor",
    image: "/RecentlySold/2.png"
  },
  {
    id: 6,
    indexStr: "06",
    projectName: "TK23K",
    locationShort: "Sarasota, USA",
    locationFull: "401 Quay Common, Sarasota FL",
    area: "548 m²",
    year: "2026",
    rooms: "5-6",
    floors: "8 floor",
    image: "/RecentlySold/3.jpg"
  }
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeProject = projectsData[activeIndex];

  const renderProjectCard = (project: Project, idx: number, isMobile: boolean) => {
    const isActive = activeIndex === idx;
    return (
      <div
        key={`${isMobile ? "m" : "d"}-${project.id}`}
        onClick={() => setActiveIndex(idx)}
        onMouseEnter={() => setActiveIndex(idx)}
        className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm transition-all duration-300 ${
          isMobile ? "w-[180px] shrink-0" : "w-full"
        } aspect-[9/14] ${isActive ? "scale-[1.02]" : "hover:scale-[1.01]"}`}
      >
        {/* Property Image */}
        <Image
          src={project.image}
          alt={project.projectName}
          fill
          sizes="(max-width: 768px) 150px, 200px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover Details Overlay */}
        <div className="absolute inset-0 bg-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10 select-none">
          {/* Top: Location */}
          <div className="text-left space-y-0.5">
            <span className="text-xs md:text-sm font-semibold text-gray-300 block">
              {project.locationShort.split(",")[0]}
            </span>
            <span className="text-[12px] md:text-xs text-gray-400 block font-medium">
              {project.locationShort.split(",")[1]?.trim()}
            </span>
          </div>

          {/* Center: Watermark Number & Lime Green Area */}
          <div className="relative flex items-center justify-center h-20 w-full overflow-hidden">
            <span className="absolute text-[108px] font-bold text-[#1a1a1a] opacity-60 leading-none">
              {project.indexStr}
            </span>
            <span className="z-10 text-lg md:text-2xl font-bold text-[#a3e635] tracking-tight">
              {project.area}
            </span>
          </div>

          {/* Bottom: Name & Floors */}
          <div className="flex justify-between items-center text-[11px] md:text-xs font-semibold">
            <span className="text-gray-300">
              {project.projectName}
            </span>
            <span className="text-gray-400 font-medium">
              {project.floors}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="experience-section" className="bg-[#FAF9F7] py-16 md:py-24 px-4 md:px-8 lg:px-12 xl:px-16 font-instrument-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Top Section: Desktop Grid & Mobile Infinite Marquee */}
        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-6 gap-4">
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
              renderProjectCard({ ...project, id: project.id + projectsData.length }, idx, true)
            )}
          </div>
        </div>

        {/* Middle Section: Quality - Urbanity - Sustainability Title & Brand Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          {/* Large Left Title */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-tight">
              Quality
              <br />
              <span className="flex items-center gap-2">
                <span className="text-[#a3e635] font-semibold">–</span>Urbanity
              </span>
              Sustainability
            </h2>
          </div>

          {/* Right Brand Info */}
          <div className="lg:col-span-6 space-y-6 lg:max-w-md lg:ml-auto">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <span className="w-2 h-2 rounded-full bg-gray-900 animate-pulse" />
              Work in Progress
            </div>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Christopher Brent primarily values his clients, always aiming to apply the highest professional standards, creating value for them, with the aim of maintaining long-term, trusted relationships.
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 py-2.5 text-xs md:text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer hover:shadow hover:-translate-y-0.5">
              Discover More
            </button>
          </div>
        </div>

        {/* Bottom Section: Divider & Dynamic Metadata Grid */}
        <div className="space-y-6 pt-4">
          <div className="w-full h-[1px] bg-gray-200" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">

            {/* Project Name */}
            <div className="flex flex-col">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400">
                Project Name
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeProject.projectName}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg md:text-xl lg:text-2xl font-medium text-gray-900 mt-2"
                >
                  {activeProject.projectName}
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
                  key={activeProject.locationFull}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg md:text-xl lg:text-2xl font-medium text-gray-900 mt-2"
                >
                  {activeProject.locationFull}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Year */}
            <div className="flex flex-col animate-none">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400">
                Year
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeProject.year}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg md:text-xl lg:text-2xl font-medium text-gray-900 mt-2"
                >
                  {activeProject.year}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Room */}
            <div className="flex flex-col animate-none">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400">
                Room
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeProject.rooms}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg md:text-xl lg:text-2xl font-medium text-gray-900 mt-2"
                >
                  {activeProject.rooms}
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
                  key={activeProject.area}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg md:text-xl lg:text-2xl font-medium text-gray-900 mt-2"
                >
                  {activeProject.area}
                </motion.span>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section >
  );
}
