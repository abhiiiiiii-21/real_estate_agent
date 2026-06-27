"use client";

import Image from "next/image";
import featuredData from "@/data/FeaturedProperty.json";
import { ArrowUpRight, ArrowRight, ChevronDown, ChevronUp, MapPin, SlidersHorizontal } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { FilterDropdown } from "./_FeaturedProperties/FilterDropdown";
import { PropertyModal } from "./_FeaturedProperties/PropertyModal";

const FeaturedProperties = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activePrice, setActivePrice] = useState("All");
  const [activeLocation, setActiveLocation] = useState("All Areas");
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Helper to parse price string to number for comparison
  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
  };

  // Filter logic
  const filteredData = featuredData.filter(property => {
    // Location filter
    if (activeLocation !== "All Areas" && !property.location.includes(activeLocation)) {
      return false;
    }
    // Price filter
    if (activePrice !== "All") {
      const propPrice = parsePrice(property.price);
      if (activePrice === "Under $750K" && propPrice >= 750000) return false;
      if (activePrice === "$750K–$1.5M" && (propPrice < 750000 || propPrice > 1500000)) return false;
      if (activePrice === "$1.5M–$3M" && (propPrice < 1500000 || propPrice > 3000000)) return false;
      if (activePrice === "$3M+" && propPrice < 3000000) return false;
    }
    return true;
  });

  return (
    <section className="py-20 font-instrument-sans w-full max-w-[1400px] mx-auto px-4">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            <span className="text-sm text-neutral-500 font-medium tracking-wide">
              Recent Recommendations
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-neutral-900">
            Featured Projects
          </h2>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl md:text-7xl font-light tracking-tight text-neutral-900">
            384
          </span>
          <span className="text-sm text-neutral-400 font-medium">offers</span>
        </div>
      </div>

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
        {/* Left: Filter */}
        <div className="w-full md:w-1/3 flex justify-start">
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="cursor-pointer flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 transition-colors px-6 py-3 rounded-full text-sm font-medium"
            >
              Filter <SlidersHorizontal className="w-4 h-4" />
            </button>

            {/* Filter Dropdown Modal */}
            <FilterDropdown 
              isOpen={isFilterOpen} 
              onClose={() => setIsFilterOpen(false)}
              initialPrice={activePrice}
              initialLocation={activeLocation}
              onApply={(price, location) => {
                setActivePrice(price);
                setActiveLocation(location);
              }}
            />
          </div>
        </div>

        {/* Center: Dropdowns */}
        <div className="w-full md:w-1/3 flex justify-center items-center gap-3 overflow-x-auto pb-2 md:pb-0">
          {["Buy", "Any property", "All areas"].map((label) => (
            <button
              key={label}
              className="flex items-center gap-3 bg-neutral-100 hover:bg-neutral-200 transition-colors px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap"
            >
              {label} <ChevronDown className="w-4 h-4 text-neutral-500" />
            </button>
          ))}
        </div>

        {/* Right: View All */}
        <div className="w-full md:w-1/3 flex justify-end">
          <button className="bg-black hover:bg-neutral-800 text-white transition-colors px-8 py-3 rounded-full text-sm font-medium whitespace-nowrap">
            View All
          </button>
        </div>
      </div>

      {/* Properties Grid */}
      {filteredData.length === 0 ? (
        <div className="py-20 text-center text-neutral-500 font-medium">
          No properties found matching the selected filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredData.slice(0, 4).map((property, index) => (
            <div
              key={index}
              onClick={() => setSelectedProperty(property)}
              className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden cursor-pointer bg-[#F0F0F0]"
            >
              {/* Default State (Fades out on hover) */}
              <div className="absolute inset-0 z-10 transition-opacity duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-0">
                {/* Background Image */}
                <Image
                  src={property.heroImage}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Left Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 bg-black/10 backdrop-blur-md text-white text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  {property.location.split(",")[0]}
                </div>

                {/* Top Right Button */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-8 left-8 text-white pr-8">
                  <span className="text-4xl font-light opacity-90 block mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-medium leading-tight max-w-[80%]">
                    {property.title}
                  </h3>
                </div>
              </div>

              {/* Hover State (Fades in on hover) */}
              <div className="absolute inset-0 z-20 flex flex-col p-6 opacity-0 -translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-100 group-hover:translate-y-0 bg-[#F0F0F0]">
                {/* Top Row */}
                <div className="flex items-center justify-between pb-4 border-b border-black/10">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-medium text-black">{String(index + 1).padStart(2, "0")}</span>
                    <div className="flex gap-2">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 text-[13px] text-neutral-600 bg-white shadow-sm">
                        <MapPin className="w-3.5 h-3.5" /> {property.location.split(",")[0]}
                      </span>
                      <span className="px-3 py-1.5 rounded-full border border-black/10 text-[13px] text-neutral-600 bg-white shadow-sm">
                        {property.propertyType.split(' ').pop()}
                      </span>
                    </div>
                  </div>
                  <span className="text-xl font-medium text-black">{property.price}</span>
                </div>

                {/* Middle Row */}
                <div className="flex items-center justify-between mt-4 mb-5">
                  <div>
                    <div className="text-[13px] text-neutral-500 mb-1">
                      Developer: <span className="text-neutral-700">{property.developer}</span>
                    </div>
                    <h3 className="text-2xl md:text-[28px] font-medium leading-tight max-w-[280px] text-black">
                      {property.title}
                    </h3>
                  </div>
                  
                  {/* View Details Button */}
                  <div className="bg-[#EBEBEB] p-3 rounded-2xl flex flex-col justify-between items-start w-[88px] h-[88px] hover:bg-[#E0E0E0] transition-colors flex-shrink-0 shadow-sm border border-black/5">
                    <div className="w-full flex justify-end">
                      <div className="w-[22px] h-[22px] rounded-full border border-black/20 flex items-center justify-center bg-transparent">
                        <ArrowRight className="w-3 h-3 text-black" />
                      </div>
                    </div>
                    <div className="text-[11px] font-medium leading-tight text-black mt-auto flex flex-col items-start gap-1">
                      <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-black border-b-[4px] border-b-transparent" />
                      View<br/>Details
                    </div>
                  </div>
                </div>

                {/* Bottom Image */}
                <div className="relative w-full flex-grow rounded-[1.5rem] overflow-hidden">
                  <Image src={property.heroImage} alt={property.title} fill className="object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Property Details Modal */}
      <PropertyModal 
        property={selectedProperty} 
        onClose={() => setSelectedProperty(null)} 
      />
    </section>
  );
};

export default FeaturedProperties;