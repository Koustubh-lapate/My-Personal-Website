"use client";

import React from 'react';
import proImage from '@/assets/images/programmer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { StarOrbit } from '@/components/StarOrbit';

export const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section with id '${sectionId}' not found.`);
    }
  };

  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      {/* Background */}
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent, black_10%, black_70%, transparent)]'>
        <div
          className='absolute inset-0 -z-30 opacity-5'
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        {/* Gradient Circles */}
        <div className='absolute inset-0 size-[620px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5'></div>
        <div className='absolute inset-0 size-[820px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5'></div>
        <div className='absolute inset-0 size-[1020px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5'></div>
        <div className='absolute inset-0 size-[1220px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5'></div>

        {/* Star Orbit */}
        <StarOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </StarOrbit>

        <StarOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </StarOrbit>

        <StarOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </StarOrbit>

        <StarOrbit size={900} rotation={120}>
          <StarIcon className="size-20 text-emerald-300" />
        </StarOrbit>
      </div>

      {/* Content */}
      <div className='container'>
        {/* Profile Image and Availability */}
        <div className='flex flex-col items-center'>
          <Image
            src={proImage}
            className='size-[100px]'
            alt='Person coding on his laptop'
          />

          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full'></div>
            <div className='text-sm font-medium'>Available for new Projects</div>
          </div>
        </div>

        {/* Title and Description */}
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
            Building Exceptional Web Applications
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I specialize in creating tailored web solutions that meet client needs, ensuring seamless performance and engaging designs. Let's build something exceptional together!
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button
            className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 hover:shadow-lg transition z-10'
            onClick={() => scrollToSection('profiles')}
          >
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>

          <button
            className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:bg-gray-100 hover:shadow-lg transition z-10'
            onClick={() => scrollToSection('contact')}
          >
            <span>👋</span>
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
