"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  avatar: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Daniel",
    location: "Dubai, January 2025",
    text: "Working with this team was an absolute pleasure. They helped me find the perfect property that matched all my needs and preferences. Their expertise and attention to detail made the entire process smooth and stress-free. I couldn't be happier with my new home!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    location: "Clearwater, February 2025",
    text: "The attention to detail and local market knowledge made selling our home a breeze. We got an offer above listing price within a week! Highly recommend Christopher for anyone looking for a top-tier real estate experience in Florida.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 3,
    name: "Marcus Brody",
    location: "Belleair, May 2025",
    text: "As an investor, I value speed, precision, and raw data. Christopher delivered on all counts. He found off-market properties with incredible cap rates and guided us through a complex commercial transaction seamlessly.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0); // -1 for left, 1 for right

  const activeTestimonial = testimonialsData[activeIndex];

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  // Framer motion variants for the sliding testimonial text
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0
    })
  };

  return (
    <section className="bg-[#FAF9F7] py-16 md:py-24 px-4 md:px-8 lg:px-12 xl:px-16 font-instrument-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[32px] md:rounded-[40px] lg:rounded-[48px] p-8 md:p-12 lg:p-16 relative shadow-sm border border-gray-100 flex flex-col justify-between gap-12"
        >
          {/* Header Row */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1]">
              What Our Clients Say
            </h2>
          </div>

          {/* Main Grid: Left aggregator/quotes, Right sliding card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Aggregator Pill & Quote Bubble */}
            <div className="lg:col-span-5 flex flex-row sm:flex-row lg:flex-row items-center gap-6">
              
              {/* Reviews Aggregator Pill */}
              <div className="flex items-center gap-3 bg-gray-50/80 border border-gray-100 rounded-full py-1.5 pl-1.5 pr-5 w-fit">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200/50 shadow-sm">
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex -space-x-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white bg-gray-100">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                      alt="Reviewer 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white bg-gray-100">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"
                      alt="Reviewer 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white bg-gray-100">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80"
                      alt="Reviewer 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-[13px] font-medium text-gray-800 flex items-baseline">
                  <span className="font-bold">125+</span>
                  <span className="text-gray-400 font-light ml-1 text-[11px]">Reviews</span>
                </div>
              </div>

              {/* Coral/Peach Double Quotes Bubble */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FF957C] text-white rounded-full flex items-center justify-center shadow-sm shadow-[#FF957C]/20 shrink-0">
                <span className="text-3xl md:text-4xl font-serif leading-none mt-2 select-none">”</span>
              </div>

            </div>

            {/* Right Column: Sliding Testimonial block */}
            <div className="lg:col-span-7 space-y-8 w-full">
              
              {/* Testimonial Text (Animated) */}
              <div className="h-[260px] sm:h-[180px] lg:h-[180px] relative overflow-hidden flex items-center">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.p
                    key={activeIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl lg:text-2xl font-light text-gray-800 leading-relaxed tracking-tight text-left"
                  >
                    {activeTestimonial.text}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Dynamic Horizontal Progress Bar (Autoplay Loading Bar) */}
              <div className="relative w-full h-[2px] bg-gray-100">
                <motion.div
                  key={activeIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  onAnimationComplete={handleNext}
                  className="absolute left-0 top-0 bottom-0 bg-gray-900 h-full"
                />
              </div>

              {/* Client Profile details & Slider buttons */}
              <div className="flex justify-between items-center pt-2">
                
                {/* Profile Block */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-150 shadow-sm bg-gray-50">
                    <Image
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-base font-semibold text-gray-900 leading-tight">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {activeTestimonial.location}
                    </p>
                  </div>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-3">
                  {/* Prev Button */}
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Testimonial"
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-gray-200/60 bg-transparent text-gray-600 hover:bg-gray-50 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    aria-label="Next Testimonial"
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gray-900 text-white hover:bg-gray-800 flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-sm shadow-gray-900/10"
                  >
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
