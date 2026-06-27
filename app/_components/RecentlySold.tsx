"use client";

import React from 'react';
import Image from 'next/image';
import styles from './RecentlySold.module.scss';
import data from '../../data/RecentlySold.json';

const RecentlySold = () => {
  return (
    <div className="w-full font-instrument-sans">
      {data.map((project) => (
        <div key={project.id} className={styles.gallery}>
          <div className={styles.imageContainer}>
            <Image
              src={project.BigImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* Content overlay */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto w-full px-4 md:px-12 lg:px-24">
                <div className="max-w-sm md:max-w-md lg:max-w-xl">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-[1.05] mb-8 drop-shadow-2xl">
                    {project.title.split(' ').map((word, i) => (
                      <React.Fragment key={i}>
                        {word}
                        {/* Keep spaces or let it naturally wrap based on max-w */}
                        {' '}
                      </React.Fragment>
                    ))}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.features.map((feature, i) => (
                      <span key={i} className="px-5 py-2 rounded-full border border-white/30 bg-[#2A231C]/60 backdrop-blur-md text-white text-xs md:text-sm tracking-wide shadow-xl">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.vignette}>
            <Image
              src={project.SmallImage}
              alt={`${project.title} Interior`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentlySold;