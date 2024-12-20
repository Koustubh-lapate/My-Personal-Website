"use client"

import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'profiles', label: 'Profiles' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

export const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting section
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);
        
        // If no section is intersecting, clear the active section
        if (!intersectingEntry) {
          setActiveSection('');
          return;
        }

        setActiveSection(intersectingEntry.target.id);
      },
      {
        rootMargin: '-50% 0px',
        threshold: 0,
      }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (sectionId: string) => {
    // Force scroll to top if home section
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className={`
              px-4 py-2 rounded-full transition-all duration-300
              ${activeSection === id 
                ? 'bg-white/20 text-white font-serif scale-105'
                : 'text-white/70 hover:text-white hover:bg-white/10'
              }
            `}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
};