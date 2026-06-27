"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Download, X, Play, Check, ChevronLeft, ChevronRight,
  Waves, Dumbbell, Store, Tent, ShieldCheck, Wind, TreePine, Flame, 
  Coffee, Film, Car, Sparkles, Smartphone, Utensils, Shirt, Tv, Wine, Box,
  Anchor, Armchair, AppWindow, Sun, Eye, Lock, Lightbulb, PawPrint, Wifi, Speaker, Gamepad2, Thermometer, Gem, Archive
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLenis } from 'lenis/react';

const getFeatureIcon = (feature: string) => {
  const f = feature.toLowerCase();
  if (f.includes('pool') || f.includes('sea') || f.includes('water') || f.includes('bay') || f.includes('ocean')) return <Waves className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('dock') || f.includes('marina') || f.includes('boat')) return <Anchor className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('gym') || f.includes('fitness') || f.includes('treadmill')) return <Dumbbell className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('shop') || f.includes('boutique')) return <Store className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('play') || f.includes('kindergarten')) return <Tent className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('secur') || f.includes('camera') || f.includes('gate') || f.includes('safe')) return <ShieldCheck className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('air') || f.includes('condition') || f.includes('wind')) return <Wind className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('parking') || f.includes('garage') || f.includes('car')) return <Car className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('green') || f.includes('garden') || f.includes('park') || f.includes('landscape')) return <TreePine className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('barbecue') || f.includes('bbq') || f.includes('fire')) return <Flame className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('cafe') || f.includes('coffee') || f.includes('restaurant')) return <Coffee className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('cinema') || f.includes('media') || f.includes('theater')) return <Film className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('spa') || f.includes('massage') || f.includes('primary')) return <Sparkles className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('smart') || f.includes('tech') || f.includes('auto') || f.includes('home')) return <Smartphone className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('kitchen') || f.includes('chef') || f.includes('cook')) return <Utensils className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('closet') || f.includes('wardrobe')) return <Shirt className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('tv') || f.includes('television')) return <Tv className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('wine') || f.includes('cellar')) return <Wine className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('lanai') || f.includes('terrace') || f.includes('lounge') || f.includes('balcony')) return <Armchair className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('window') || f.includes('glass')) return <AppWindow className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('sunset') || f.includes('solar')) return <Sun className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('view') || f.includes('panoramic')) return <Eye className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('light')) return <Lightbulb className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('pet') || f.includes('dog')) return <PawPrint className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('internet') || f.includes('wi-fi') || f.includes('wifi')) return <Wifi className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('sound') || f.includes('audio') || f.includes('speaker')) return <Speaker className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('game') || f.includes('billiard')) return <Gamepad2 className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('heat')) return <Thermometer className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('quartz') || f.includes('custom') || f.includes('designer') || f.includes('luxury') || f.includes('premium')) return <Gem className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  if (f.includes('pantry') || f.includes('cabinet') || f.includes('storage')) return <Archive className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
  
  return <Box className="w-[18px] h-[18px] text-neutral-500" strokeWidth={1.5} />;
};

const RevealImage = ({ src, alt, delay = 0, className = "", isActive }: { src: string, alt: string, delay?: number, className?: string, isActive?: boolean }) => {
  const [hasRevealed, setHasRevealed] = useState(false);
  
  useEffect(() => {
    if (isActive) setHasRevealed(true);
  }, [isActive]);

  return (
    <motion.div 
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={{ clipPath: hasRevealed ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: hasRevealed ? delay : 0 }}
      className={`relative rounded-[1.5rem] overflow-hidden group bg-neutral-100 ${className}`}
    >
      <motion.div
        initial={{ scale: 1.3 }}
        animate={{ scale: hasRevealed ? 1 : 1.3 }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: hasRevealed ? delay : 0 }}
        className="relative w-full h-full"
      >
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
      </motion.div>
    </motion.div>
  );
};

interface PropertyModalProps {
  property: any;
  onClose: () => void;
}

export function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [activeFloor, setActiveFloor] = useState(0);
  const [activeCardId, setActiveCardId] = useState("card-1");
  const activeCardIdRef = useRef("card-1");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lastWheelTime = useRef(0);
  const lenis = useLenis();

  const navItems = [
    { id: "card-1", num: "01.", label: "General info" },
    { id: "card-2", num: "02.", label: "About" },
    { id: "card-3", num: "03.", label: "Characteristics" },
    { id: "card-4", num: "04.", label: "Exterior" },
    { id: "card-5", num: "05.", label: "Interior" },
    { id: "card-6", num: "06.", label: "Layout" },
  ];

  useEffect(() => {
    if (!property) return;

    // Lock body scroll and pause lenis when modal is open
    document.body.style.overflow = 'hidden';
    if (lenis) lenis.stop();

    const container = scrollContainerRef.current;
    let observer: IntersectionObserver | null = null;

    const handleWheel = (e: WheelEvent) => {
      // Check if target is a vertically scrollable element (like characteristics)
      let target = e.target as HTMLElement | null;
      let isScrollable = false;
      while (target && target !== document.body) {
        if (target.scrollHeight > target.clientHeight) {
          const overflowY = window.getComputedStyle(target).overflowY;
          if (overflowY === 'auto' || overflowY === 'scroll') {
             // Only allow native scroll if actually scrolling within bounds
             if (e.deltaY > 0 && Math.ceil(target.scrollTop + target.clientHeight) < target.scrollHeight) {
                 isScrollable = true;
                 break;
             }
             if (e.deltaY < 0 && target.scrollTop > 0) {
                 isScrollable = true;
                 break;
             }
          }
        }
        target = target.parentElement;
      }
      
      if (isScrollable) return; // Allow native scroll within the element

      // Prevent default to disable native background scrolling or unwanted bounces
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastWheelTime.current < 600) return; // Cooldown to prevent rapid skipping

      // Get current index based on activeCardIdRef
      const currentIndex = navItems.findIndex(item => item.id === activeCardIdRef.current);
      let nextIndex = currentIndex;

      // Map vertical scroll (wheel) to horizontal card navigation
      if (e.deltaY > 10) {
        nextIndex = Math.min(currentIndex + 1, navItems.length - 1);
      } else if (e.deltaY < -10) {
        nextIndex = Math.max(currentIndex - 1, 0);
      }

      if (nextIndex !== currentIndex) {
        lastWheelTime.current = now;
        const targetId = navItems[nextIndex].id;
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      }
    };

    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveCardId(entry.target.id);
              activeCardIdRef.current = entry.target.id;
            }
          });
        },
        {
          root: container,
          threshold: 0.5,
        }
      );

      Array.from(container.children).forEach((child) => {
        if (child.id.startsWith("card-")) {
          observer?.observe(child);
        }
      });
    }

    return () => {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, [property, lenis]); // Re-run when property changes so refs are ready

  const scrollToCard = (id: string) => {
    setActiveCardId(id);
    activeCardIdRef.current = id;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  };

  const handlePrev = () => {
    const currentIndex = navItems.findIndex(item => item.id === activeCardIdRef.current);
    const prevIndex = Math.max(currentIndex - 1, 0);
    scrollToCard(navItems[prevIndex].id);
  };

  const handleNext = () => {
    const currentIndex = navItems.findIndex(item => item.id === activeCardIdRef.current);
    const nextIndex = Math.min(currentIndex + 1, navItems.length - 1);
    scrollToCard(navItems[nextIndex].id);
  };

  return (
    <AnimatePresence>
      {property && (
        <motion.div
          key="property-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]/95 backdrop-blur-sm"
        >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous Card Button */}
        <button
          onClick={handlePrev}
          disabled={activeCardId === navItems[0].id}
          className={`absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black hover:bg-black/80 text-white transition-colors z-50 cursor-pointer ${
            activeCardId === navItems[0].id ? 'opacity-30 cursor-not-allowed' : 'shadow-lg'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Card Button */}
        <button
          onClick={handleNext}
          disabled={activeCardId === navItems[navItems.length - 1].id}
          className={`absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black hover:bg-black/80 text-white transition-colors z-50 cursor-pointer ${
            activeCardId === navItems[navItems.length - 1].id ? 'opacity-30 cursor-not-allowed' : 'shadow-lg'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Content Container (Hidden native scroll, controlled via wheel event) */}
        <div 
          ref={scrollContainerRef}
          className="w-full h-full pt-6 pb-24 px-[10vw] flex items-center gap-6 overflow-x-hidden hide-scrollbar scroll-smooth"
        >
            
          {/* Card 01: General Info */}
          <div 
            id="card-1"
            className="flex-shrink-0 w-[950px] h-[75vh] min-h-[550px] max-h-[650px] bg-white rounded-[2rem] p-4 flex snap-center"
          >
            {/* Left side: Hero Image */}
            <div className="relative w-[45%] h-full rounded-[1.5rem] overflow-hidden group">
              <Image src={property.heroImage} alt={property.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
            </div>

            {/* Right side: Content */}
            <div className="flex-1 flex flex-col py-6 px-10">
              {/* Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-black/10">
                <span className="text-[32px] font-normal text-black leading-none">01</span>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 text-[13px] text-neutral-600 bg-white">
                    <MapPin className="w-3.5 h-3.5" /> {property.location.split(",")[0]}
                  </span>
                  <span className="px-3 py-1.5 rounded-full border border-black/10 text-[13px] text-neutral-600 bg-white">
                    {property.propertyType.split(' ').pop()}
                  </span>
                </div>
              </div>

              {/* Title Section */}
              <div className="mt-8 mb-8">
                <div className="text-[13px] text-neutral-400 mb-3">
                  Developer: <span className="text-neutral-700">{property.developer}</span>
                </div>
                <h2 className="text-3xl md:text-[40px] font-medium leading-[1.15] text-black pr-4">
                  {property.title}
                </h2>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-[#F6F6F6] p-4 rounded-2xl flex flex-col justify-between h-[90px]">
                  <span className="text-[11px] text-neutral-400">Square</span>
                  <span className="text-[14px] font-medium text-black">{property.overview.area.replace(' Sqft', ' sqft').replace('m2', 'm²')}</span>
                </div>
                <div className="bg-[#F6F6F6] p-4 rounded-2xl flex flex-col justify-between h-[90px]">
                  <span className="text-[11px] text-neutral-400">Number of rooms</span>
                  <span className="text-[14px] font-medium text-black">{property.overview.bedrooms}</span>
                </div>
                <div className="bg-[#F6F6F6] p-4 rounded-2xl flex flex-col justify-between h-[90px]">
                  <span className="text-[11px] text-neutral-400">Status</span>
                  <span className="text-[14px] font-medium text-black">{property.status}</span>
                </div>
                <div className="bg-[#F6F6F6] p-4 rounded-2xl flex flex-col justify-between h-[90px]">
                  <span className="text-[11px] text-neutral-400">Delivery Date</span>
                  <span className="text-[14px] font-medium text-black">{property.overview.yearBuilt}</span>
                </div>
              </div>

              {/* Bottom (Price & Buttons) */}
              <div className="mt-auto flex flex-col">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-[13px] text-neutral-400">Price</span>
                  <span className="text-[32px] font-medium text-black tracking-tight">{property.price}</span>
                </div>
                <div className="flex gap-3">
                  <button className="px-8 py-3.5 bg-black hover:bg-neutral-800 text-white rounded-full text-[13px] font-medium transition-colors cursor-pointer">
                    Callback
                  </button>
                  <button className="px-6 py-3.5 bg-white border border-black/10 hover:bg-neutral-50 text-black rounded-full text-[13px] font-medium flex items-center gap-2 transition-colors cursor-pointer">
                    <Download className="w-4 h-4" />
                    Download catalog
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 02: About */}
          <div 
            id="card-2"
            className="flex-shrink-0 w-[950px] h-[75vh] min-h-[550px] max-h-[650px] bg-white rounded-[2rem] p-4 flex snap-center"
          >
            <div className="w-[50%] flex flex-col py-6 px-10 pr-12">
              <div className="flex items-center gap-6 mb-12">
                <div className="relative w-20 h-[52px] rounded-[14px] overflow-hidden flex-shrink-0 shadow-sm border border-black/5">
                  <Image src={property.gallery.exterior[0] || property.heroImage} alt="Thumbnail" fill sizes="10vw" className="object-cover" />
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-neutral-400 mb-1">Developer:</span>
                    <span className="text-[13px] text-neutral-700 font-medium">{property.developer}</span>
                  </div>
                  <div className="flex flex-col border-l border-black/10 pl-8">
                    <span className="text-[11px] text-neutral-400 mb-1">Project:</span>
                    <span className="text-[13px] text-neutral-700 font-medium">{property.title}</span>
                  </div>
                </div>
              </div>
              
              <h2 className="text-[36px] md:text-[38px] font-normal leading-[1.15] text-black mb-8 pr-4">
                {property.title} with Luxurious Design and Stunning Views
              </h2>
              
              <div className="space-y-5 text-[14px] text-neutral-400 leading-relaxed font-light pr-4">
                {property.description.map((para: string, i: number) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            
            <div className="relative w-[50%] h-full rounded-[1.5rem] overflow-hidden group">
              <Image src={property.gallery.interior[0] || property.heroImage} alt="About" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
            </div>
          </div>

          {/* Card 03: Characteristics */}
          <div 
            id="card-3"
            className="flex-shrink-0 w-[950px] h-[75vh] min-h-[550px] max-h-[650px] bg-[#F6F6F6] rounded-[2rem] p-4 flex gap-4 snap-center overflow-y-auto hide-scrollbar"
          >
            {(() => {
              const features = property.features || [];
              const col1 = features.slice(0, 9);
              const col2 = features.slice(9, 18);
              const col3 = features.slice(18);

              const renderFeature = (feature: string, i: number) => (
                <div key={i} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-4">
                    <div className="w-[42px] h-[42px] rounded-[12px] border border-neutral-100 flex items-center justify-center bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                      {getFeatureIcon(feature)}
                    </div>
                    <span className="text-[14px] text-neutral-600 font-medium">{feature}</span>
                  </div>
                  <Check className="w-4 h-4 text-black" strokeWidth={2} />
                </div>
              );

              return (
                <>
                  {/* Col 1 */}
                  <div className="flex-1 bg-white rounded-[1.5rem] p-6 flex flex-col gap-1">
                    {col1.map((f: string, i: number) => renderFeature(f, i))}
                  </div>
                  {/* Col 2 */}
                  <div className="flex-1 bg-white rounded-[1.5rem] p-6 flex flex-col gap-1">
                    {col2.map((f: string, i: number) => renderFeature(f, i))}
                  </div>
                  {/* Col 3 */}
                  <div className="flex-1 bg-white rounded-[1.5rem] p-6 flex flex-col gap-1">
                    {col3.length > 2 && col3.slice(0, 2).map((f: string, i: number) => renderFeature(f, i))}
                    <div className="relative w-full h-[300px] rounded-[1rem] overflow-hidden my-3 shadow-sm border border-neutral-100 group">
                      <Image src={property.gallery.exterior[1] || property.heroImage} alt="Feature" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
                    </div>
                    {(col3.length > 2 ? col3.slice(2) : col3).map((f: string, i: number) => renderFeature(f, i + 2))}
                  </div>
                </>
              );
            })()}
          </div>

          {/* Card 04: Exterior Gallery */}
          <div 
            id="card-4"
            className="flex-shrink-0 w-[950px] h-[75vh] min-h-[550px] max-h-[650px] bg-[#F6F6F6] rounded-[2rem] p-2 flex snap-center relative"
          >
            <div className="grid grid-cols-3 grid-rows-2 gap-2 w-full h-full">
              <RevealImage className="col-span-1 row-span-2" src={property.gallery.exterior[0] || property.heroImage} alt="Ext 1" delay={0} isActive={activeCardId === "card-4"} />
              <RevealImage className="col-span-1 row-span-1" src={property.gallery.exterior[1] || property.heroImage} alt="Ext 2" delay={0.1} isActive={activeCardId === "card-4"} />
              <RevealImage className="col-span-1 row-span-1" src={property.gallery.exterior[2] || property.heroImage} alt="Ext 3" delay={0.2} isActive={activeCardId === "card-4"} />
              <RevealImage className="col-span-1 row-span-1" src={property.gallery.exterior[3] || property.heroImage} alt="Ext 4" delay={0.15} isActive={activeCardId === "card-4"} />
              <RevealImage className="col-span-1 row-span-1" src={property.gallery.exterior[4] || property.heroImage} alt="Ext 5" delay={0.25} isActive={activeCardId === "card-4"} />
            </div>
          </div>

          {/* Card 05: Interior Gallery */}
          <div 
            id="card-5"
            className="flex-shrink-0 w-[950px] h-[75vh] min-h-[550px] max-h-[650px] bg-[#F6F6F6] rounded-[2rem] p-2 flex snap-center relative"
          >
            <div className="grid grid-cols-3 grid-rows-2 gap-2 w-full h-full">
              <RevealImage className="col-span-1 row-span-2" src={property.gallery.interior[0] || property.heroImage} alt="Int 1" delay={0} isActive={activeCardId === "card-5"} />
              <RevealImage className="col-span-1 row-span-1" src={property.gallery.interior[1] || property.heroImage} alt="Int 2" delay={0.1} isActive={activeCardId === "card-5"} />
              <RevealImage className="col-span-1 row-span-1" src={property.gallery.interior[2] || property.heroImage} alt="Int 3" delay={0.2} isActive={activeCardId === "card-5"} />
              <RevealImage className="col-span-1 row-span-1" src={property.gallery.interior[3] || property.heroImage} alt="Int 4" delay={0.15} isActive={activeCardId === "card-5"} />
              <RevealImage className="col-span-1 row-span-1" src={property.gallery.interior[4] || property.heroImage} alt="Int 5" delay={0.25} isActive={activeCardId === "card-5"} />
            </div>
          </div>

          {/* Card 06: Layout */}
          <div 
            id="card-6"
            className="flex-shrink-0 w-[950px] h-[75vh] min-h-[550px] max-h-[650px] bg-white rounded-[2rem] p-10 flex snap-center"
          >
            <div className="w-full h-full flex justify-between relative">
              {/* Left Column */}
              <div className="w-[25%] h-full flex flex-col justify-between py-4">
                <h2 className="text-[32px] font-medium text-black whitespace-nowrap">Building Layout</h2>
                <div>
                  <div className="flex items-baseline gap-2 mb-16">
                    <span className="text-[11px] text-neutral-400">Square</span>
                    <span className="text-2xl font-medium text-black">{property.overview.area.replace(' Sqft', 'm²')}</span>
                  </div>
                  <h3 className="text-2xl font-medium text-black mb-4">Ground floor</h3>
                  <p className="text-[13px] text-neutral-400 leading-relaxed pr-2">
                    The total living area of the mansion is {property.overview.area}, which opens up incredible opportunities for creating personal design projects.
                  </p>
                </div>
              </div>

              {/* Right Area (Map + Buttons) */}
              <div className="w-[75%] h-full flex flex-col justify-between items-end py-4 pl-8">
                {/* Huge Map */}
                <div className="relative w-full flex-1 mb-4">
                  <Image src={property.floorPlans[activeFloor]?.image || property.heroImage} alt="Floor Plan" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain object-center scale-[1.15] origin-center" />
                </div>

                {/* Bottom Actions removed per request */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 w-full px-10 pt-12 pb-8 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
          <div className="max-w-[1200px] mx-auto flex gap-2 overflow-x-auto hide-scrollbar w-full pointer-events-auto">
            {navItems.map((item) => {
              const isActive = activeCardId === item.id;
              return (
                <button 
                  key={item.id}
                  onClick={() => scrollToCard(item.id)}
                  className="flex-1 min-w-[140px] group flex flex-col gap-3 transition-all focus:outline-none text-left text-[13px] font-medium"
                >
                  <div className={`flex items-center gap-1.5 transition-colors ${isActive ? 'text-white' : 'text-white/50 group-hover:text-white'}`}>
                    <span>{item.num}</span> 
                    <span>{item.label}</span>
                  </div>
                  <div className="w-full h-[2px] bg-white/20 relative overflow-hidden group-hover:bg-white/40 transition-colors">
                    {isActive && (
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        style={{ originX: 0 }}
                        className="absolute inset-0 bg-white"
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
