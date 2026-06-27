"use client";

import Image from "next/image";
import featuredData from "@/data/FeaturedProperty.json";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FilterDropdown({ 
  isOpen,
  onClose,
  initialPrice = "All",
  initialLocation = "All Areas",
  onApply
}: { 
  isOpen: boolean;
  onClose: () => void;
  initialPrice?: string;
  initialLocation?: string;
  onApply: (price: string, location: string) => void;
}) {
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isLocationOpen, setIsLocationOpen] = useState(true);

  // Local state for the filter options before applying
  const [selectedPrice, setSelectedPrice] = useState(initialPrice);
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0% round 24px)", y: -10 }}
          animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 24px)", y: 0 }}
          exit={{ opacity: 0, clipPath: "inset(0% 0% 100% 0% round 24px)", y: -10 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-full left-0 mt-3 w-[280px] bg-white rounded-3xl shadow-2xl border border-neutral-100 p-5 z-50 origin-top"
        >
      {/* Price Section */}
      <div className="mb-5">
        <div 
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => setIsPriceOpen(!isPriceOpen)}
        >
          <h4 className="text-base font-medium text-neutral-800">Price</h4>
          {isPriceOpen ? <ChevronUp className="w-4 h-4 text-neutral-600" /> : <ChevronDown className="w-4 h-4 text-neutral-600" />}
        </div>
        
        {isPriceOpen && (
          <div className="space-y-2.5">
            <label 
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => setSelectedPrice("All")}
            >
              <div className={`w-4 h-4 rounded-[4px] flex-shrink-0 transition-colors ${selectedPrice === "All" ? 'bg-black' : 'border border-neutral-200 group-hover:border-[#9da3af]'}`} />
              <span className={`text-[13px] font-medium transition-colors ${selectedPrice === "All" ? 'text-neutral-800' : 'text-neutral-600 group-hover:text-neutral-800'}`}>All</span>
            </label>
            {[
              "Under $750K",
              "$750K–$1.5M",
              "$1.5M–$3M",
              "$3M+",
            ].map((price) => (
              <label 
                key={price} 
                className="flex items-center gap-2.5 cursor-pointer group"
                onClick={() => setSelectedPrice(price)}
              >
                <div className={`w-4 h-4 rounded-[4px] flex-shrink-0 transition-colors ${selectedPrice === price ? 'bg-black border-black' : 'border border-neutral-200 group-hover:border-[#9da3af]'}`} />
                <span className={`text-[13px] transition-colors ${selectedPrice === price ? 'text-neutral-800 font-medium' : 'text-neutral-600 group-hover:text-neutral-800'}`}>
                  {price}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Location Section */}
      <div className="mb-5">
        <div 
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => setIsLocationOpen(!isLocationOpen)}
        >
          <h4 className="text-base font-medium text-neutral-800">Location</h4>
          {isLocationOpen ? <ChevronUp className="w-4 h-4 text-neutral-600" /> : <ChevronDown className="w-4 h-4 text-neutral-600" />}
        </div>
        
        {isLocationOpen && (
          <div className="space-y-2.5">
            {/* All location card */}
            <div 
              className={`flex items-center gap-2.5 p-1.5 rounded-2xl cursor-pointer transition-colors ${selectedLocation === "All Areas" ? 'bg-black text-white border border-black shadow-sm shadow-black/30' : 'border border-neutral-100 hover:bg-neutral-50'}`}
              onClick={() => setSelectedLocation("All Areas")}
            >
              <div className={`grid grid-cols-2 gap-1 w-10 h-10 flex-shrink-0 rounded-xl overflow-hidden ${selectedLocation === "All Areas" ? 'border-2 border-white/20 bg-white/20' : ''}`}>
                <div className="relative overflow-hidden"><Image src={featuredData[0].heroImage} alt="loc" fill sizes="50px" className="object-cover" /></div>
                <div className="relative overflow-hidden"><Image src={featuredData[1].heroImage} alt="loc" fill sizes="50px" className="object-cover" /></div>
                <div className="relative overflow-hidden"><Image src={featuredData[2].heroImage} alt="loc" fill sizes="50px" className="object-cover" /></div>
                <div className="relative overflow-hidden"><Image src={featuredData[0].heroImage} alt="loc" fill sizes="50px" className="object-cover" /></div>
              </div>
              <span className={`text-[13px] font-medium ${selectedLocation === "All Areas" ? '' : 'text-neutral-700'}`}>All Areas</span>
            </div>

            {/* Location Grid */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "St. Petersburg", img: featuredData[0].heroImage },
                { name: "Palm Harbor", img: featuredData[1].heroImage },
                { name: "Seminole", img: featuredData[2].heroImage },
                { name: "Tampa", img: featuredData[0].heroImage }
              ].map((loc) => (
                <div 
                  key={loc.name}
                  className={`flex items-center gap-2 p-1.5 rounded-2xl cursor-pointer transition-colors ${selectedLocation === loc.name ? 'bg-black text-white border border-black shadow-sm shadow-black/30' : 'border border-neutral-100 hover:bg-neutral-50'}`}
                  onClick={() => setSelectedLocation(loc.name)}
                >
                  <div className={`relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 ${selectedLocation === loc.name ? 'border-2 border-white/20' : ''}`}>
                    <Image src={loc.img} alt={loc.name} fill sizes="50px" className="object-cover" />
                  </div>
                  <span className={`text-[12px] font-medium ${selectedLocation === loc.name ? '' : 'text-neutral-700 leading-tight'}`}>{loc.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Buttons */}
      <div className="flex items-center gap-2.5 pt-1">
        <button 
          onClick={() => {
            setSelectedPrice("All");
            setSelectedLocation("All Areas");
            onApply("All", "All Areas");
            onClose();
          }}
          className="cursor-pointer flex-1 py-2 rounded-full border border-neutral-200 text-[13px] font-medium text-neutral-600 hover:bg-neutral-50 transition-colors"
        >
          Reset Filters
        </button>
        <button 
          onClick={() => {
            onApply(selectedPrice, selectedLocation);
            onClose();
          }}
          className="cursor-pointer flex-1 py-2 rounded-full bg-[#414141] hover:bg-black transition-colors text-[13px] font-medium text-white shadow-md shadow-black/10"
        >
          Apply Filter
        </button>
      </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
