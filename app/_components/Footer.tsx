"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutData from "@/data/About.json";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const lenis = useLenis();

  const profile = aboutData[0];
  const { contact, socials } = profile;

  // Parallax Effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href || href === "#") return;
    e.preventDefault();
    lenis?.scrollTo(href, {
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease for smooth finish
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".footer-letter", {
        y: "0%",
        stagger: 0.05,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={containerRef} className="bg-black overflow-hidden font-instrument-sans relative w-full">
      <motion.div style={{ y }} className="max-md:pt-16 max-md:pb-6 pt-24 pb-8 max-md:px-5 px-8 md:px-12 lg:px-16 w-full h-full flex flex-col items-center">
        <div className="max-w-[1400px] mx-auto w-full">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-12">

          {/* Left Column - Contact */}
          <div className="w-full lg:flex-1 lg:pr-12">


            <div className="grid max-md:grid-cols-1 grid-cols-2 md:grid-cols-3 max-md:gap-y-8 gap-y-12 gap-x-10 lg:gap-x-16">
              <div>
                <h4 className="text-white/40 text-[11px] uppercase tracking-wider font-semibold mb-4">{contact.office.title}</h4>
                <p className="text-white text-sm leading-relaxed">
                  {contact.office.company}<br />
                  {contact.office.address}
                </p>
              </div>
              <div>
                <h4 className="text-white/40 text-[11px] uppercase tracking-wider font-semibold mb-4">{contact.email.title}</h4>
                <a href={`mailto:${contact.email.value}`} className="text-white text-sm hover:text-gray-300 transition-colors">
                  {contact.email.value}
                </a>
              </div>
              <div>
                <h4 className="text-white/40 text-[11px] uppercase tracking-wider font-semibold mb-4">{contact.phone.title}</h4>
                <a href={`tel:${contact.phone.value.replace(/[^0-9+]/g, '')}`} className="text-white text-sm hover:text-gray-300 transition-colors whitespace-nowrap">
                  {contact.phone.value}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Navigation & Socials */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row max-md:gap-10 gap-16 lg:gap-32 max-md:mt-12 mt-16 lg:mt-0">
            <div className="flex flex-col max-md:gap-4 gap-5">
              {[
                { name: "About", href: "#about-section" },
                { name: "Experience", href: "#experience-section" },
                { name: "Why Choose Us", href: "#why-choose-section" },
                { name: "Testimonials", href: "#testimonials-section" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="group text-white text-xl font-normal w-fit"
                >
                  <div className="relative overflow-hidden leading-tight">
                    <span
                      className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full"
                      data-text={link.name}
                    >
                      {link.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex flex-col max-md:gap-4 gap-5">
              {[
                { name: "Instagram", url: socials.instagram },
                { name: "Facebook", url: socials.facebook }
              ].filter(link => link.url).map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group text-white/80 text-sm w-fit">
                  <div className="relative overflow-hidden leading-tight">
                    <span
                      className="block transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full group-hover:text-white"
                      data-text={link.name}
                    >
                      {link.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Huge Text Section */}
        <div className="mt-6 md:mt-20 w-full flex max-md:justify-center justify-start">
          <h1 className="text-[14.5vw] sm:text-[13vw] lg:text-[12.5vw] leading-[0.8] font-black text-white overflow-hidden flex pt-4 max-md:pb-2 pb-4 tracking-tight">
            <span className="footer-letter inline-block translate-y-[120%]">
              CHRISTOPHER
            </span>
          </h1>
        </div>

        {/* Bottom Strip */}
        <div className="max-md:mt-8 mt-12 flex flex-col xl:flex-row justify-between max-md:items-center items-start xl:items-center max-md:gap-4 gap-6 max-md:pt-4 pt-6 max-md:border-t max-md:border-white/10">
          <div className="flex flex-wrap max-md:justify-center items-center gap-x-6 gap-y-3">
            {[
              "Terms",
              "Privacy policy"
            ].map((link) => (
              <a key={link} href="#" className="group text-white/40 text-[11px] w-fit">
                <div className="relative overflow-hidden leading-tight">
                  <span
                    className="block transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full group-hover:text-white"
                    data-text={link}
                  >
                    {link}
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="flex flex-wrap max-md:justify-center items-center max-md:gap-4 gap-6 text-white/40 text-[11px] shrink-0 mt-2 xl:mt-0">
            <span>Copyright © 2026</span>
          </div>
        </div>

        </div>
      </motion.div>
    </footer>
  );
}