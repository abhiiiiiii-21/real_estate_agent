"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Plus, Minus, Maximize2, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function InteractiveMap() {
  const [zoom, setZoom] = useState(1.1);
  const [mapOffset, setMapOffset] = useState({ x: -280, y: -20 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Form State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Office Location coordinates on the Belleair map
  const officeX = 520;
  const officeY = 160;

  // Zoom controls
  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.15, 1.6));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.15, 0.8));
  const handleResetZoom = () => {
    setZoom(1.1);
    setMapOffset({ x: -280, y: -20 });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setAgree(false);
    }, 3000);
  };

  return (
    <section className="bg-[#FAF9F7] py-16 md:py-24 px-4 md:px-8 lg:px-12 xl:px-16 font-instrument-sans overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">

        {/* Grid container: Split Screen layout inside rounded card just like Testimonials */}
        <div className="bg-white rounded-[32px] md:rounded-[48px] overflow-hidden border border-neutral-100 grid grid-cols-1 lg:grid-cols-2 w-full min-h-[600px]">

          {/* Left Side: Contact Form */}
          <div className="p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center bg-white text-left">
            <div className="w-full">

              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
                Contact us
              </h2>
              <p className="text-sm sm:text-base text-gray-500 mt-2 font-normal">
                Our friendly team would love to hear from you.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-100 text-green-800 flex items-start gap-3"
                >
                  <div className="p-1 rounded-full bg-green-500 text-white mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Message Sent!</h3>
                    <p className="text-xs text-green-700 mt-1 leading-relaxed">
                      Thank you for reaching out. We will get back to you shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">

                  {/* First and Last Name (Inline on desktop) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-700">
                        First name <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm text-gray-900"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-700">
                        Last name <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm text-gray-900"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-700">
                      Email <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm text-gray-900"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-700">
                      Phone number
                    </label>
                    <div className="flex rounded-xl border border-gray-200 overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-colors">
                      {/* Country Selector dropdown mockup */}
                      <div className="flex items-center gap-1.5 px-3 bg-gray-50 border-r border-gray-200 text-sm text-gray-600 font-medium cursor-default">
                        <span>US</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        placeholder="+1 (000) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 focus:outline-none text-sm text-gray-900"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-700">
                      Message <span className="text-blue-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Leave us a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm text-gray-900 resize-none"
                    />
                  </div>

                  {/* Privacy policy checkbox */}
                  <div className="flex items-center gap-3 mt-1">
                    <input
                      type="checkbox"
                      id="privacy-policy"
                      required
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="w-4.5 h-4.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <label htmlFor="privacy-policy" className="text-xs sm:text-sm text-gray-500 cursor-pointer font-normal">
                      You agree to our friendly{" "}
                      <a href="#" className="underline hover:text-gray-700 transition-colors">
                        privacy policy
                      </a>
                      .
                    </label>
                  </div>

                  {/* Submit button (Styled Blue) */}
                  <button
                    type="submit"
                    disabled={!agree}
                    className={`w-full font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 text-sm shadow-md mt-2 ${agree
                      ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                      : "bg-blue-300 text-white cursor-not-allowed opacity-80"
                      }`}
                  >
                    Send message
                  </button>

                </form>
              )}

            </div>
          </div>

          {/* Right Side: Map Canvas */}
          <div
            ref={containerRef}
            className="w-full h-[400px] sm:h-[450px] lg:h-auto relative overflow-hidden bg-[#E5E9EC] cursor-grab active:cursor-grabbing border-t lg:border-t-0 lg:border-l border-neutral-100"
          >
            {/* Draggable Map Canvas */}
            <motion.div
              drag
              dragConstraints={{ left: -1000, right: 200, top: -800, bottom: 200 }}
              dragElastic={0.15}
              style={{ transformOrigin: "center" }}
              animate={{
                scale: zoom,
                x: mapOffset.x,
                y: mapOffset.y
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="absolute w-[1200px] h-[1200px]"
            >
              {/* Background Map Graphic */}
              <Image
                src="/map_bg.png"
                alt="Belleair Florida Map Grid"
                fill
                priority
                className="object-cover select-none pointer-events-none"
              />

              {/* Single Red Office Pin Marker placed exactly at 309 Belleview Blvd */}
              <div
                style={{ left: officeX, top: officeY }}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-default select-none"
              >
                {/* Red Google Maps style Pin */}
                <div className="relative flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-[#EF4444] border-2 border-white flex items-center justify-center shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  {/* Pin Tail */}
                  <div className="w-1.5 h-2 bg-[#EF4444] -mt-[3px] rotate-45 rounded-sm" />

                  {/* Floating Office name badge */}
                  <div className="absolute top-[32px] bg-white border border-gray-200/80 px-2 py-0.5 rounded-md text-[10px] font-bold text-gray-900 whitespace-nowrap shadow-md">
                    The Shop Real Estate Co.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Utility Controls (Plus, Minus, Reset Viewport) */}
            <div className="absolute right-4 top-4 sm:right-6 sm:top-6 z-25 flex flex-col gap-2 shadow-lg rounded-2xl bg-white overflow-hidden pointer-events-auto">
              <button
                onClick={handleZoomIn}
                className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none cursor-pointer"
                title="Zoom In"
              >
                <Plus className="w-4 h-4" />
              </button>
              <div className="w-full h-[1px] bg-gray-150" />
              <button
                onClick={handleZoomOut}
                className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none cursor-pointer"
                title="Zoom Out"
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="w-full h-[1px] bg-gray-150" />
              <button
                onClick={handleResetZoom}
                className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none cursor-pointer"
                title="Reset View"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Google Attribution Overlays */}
            <div className="absolute bottom-3 right-3 z-20 pointer-events-none bg-white/70 backdrop-blur-md text-[9px] font-semibold text-gray-600 px-2 py-0.5 rounded-md border border-white/20 select-none shadow-sm">
              Map data ©2026 Terms Report a map error
            </div>
            <div className="absolute bottom-3 left-3 z-20 pointer-events-none bg-white/70 backdrop-blur-md text-[10px] font-bold text-gray-700 px-2.5 py-0.5 rounded-md border border-white/20 select-none shadow-sm">
              Google
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
