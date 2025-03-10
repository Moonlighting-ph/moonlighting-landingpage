import React, { useState, useEffect } from 'react';

interface AnimatedTextCyclerProps {
  textGroups: string[][];
  staticTexts: string[];
  className?: string;
  customStyles?: {
    middleElementClass?: string;
    firstElementClass?: string;
    lastElementClass?: string;
  };
}

const AnimatedTextCycler: React.FC<AnimatedTextCyclerProps> = ({ 
  textGroups, 
  staticTexts, 
  className = "",
  customStyles = {}
}) => {
  const [currentIndices, setCurrentIndices] = useState<number[]>(textGroups.map(() => 0));
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndices(prevIndices => 
          prevIndices.map((currentIndex, groupIndex) => 
            (currentIndex + 1) % textGroups[groupIndex].length
          )
        );
        setIsVisible(true);
      }, 500); // Time to fade out before changing text
      
    }, 3000); // Total time for each item

    return () => clearInterval(interval);
  }, [textGroups]);

  // Using simpler pill styles with consistent font size
  const baseCircleClass = "text-white text-5xl py-2 px-4 rounded-full font-semibold shadow-sm items-center justify-center";
  const professionClass = `${baseCircleClass} bg-blue-600/90 dark:bg-blue-600/90 border border-blue-400/30`;
  const locationClass = `${baseCircleClass} bg-indigo-500/90 dark:bg-indigo-500/90 border border-indigo-400/30`;
  const scheduleClass = `${baseCircleClass} bg-cyan-600/90 dark:bg-cyan-600/90 border border-cyan-500/30`;

  // Apply custom styles or default styles for static text
  const firstElementClass = customStyles.firstElementClass || 
    "font-semibold text-gray-900 dark:text-white text-5xl";
  
  const lastElementClass = customStyles.lastElementClass || 
    "font-semibold text-gray-900 dark:text-white text-5xl";

  return (
    <div className={`flex flex-col md:flex-row flex-wrap gap-2 text-center leading-tight hero-text-container justify-center ${className}`}>
      
      <div className="flex items-center flex-wrap justify-center">
        <span className={firstElementClass}>{staticTexts[0]}</span>{' '}
        
        {/* First animated text (professions) */}
        <span className="mx-2 my-1">
          <span 
            className={`inline-block transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${professionClass}`}
          >
            {textGroups[0][currentIndices[0]]}
          </span>
        </span>{' '}
      </div>

      <div className="flex items-center flex-wrap justify-center">
        <span className={firstElementClass}>{staticTexts[1]}</span>{' '}
        
        {/* Second animated text (locations) */}
        <span className="mx-2 my-1">
          <span 
            className={`inline-block transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${locationClass}`}
          >
            {textGroups[1][currentIndices[1]]}
          </span>
        </span>{' '}
      </div>

      <div className="flex items-center flex-wrap justify-center">
        <span className={lastElementClass}>{staticTexts[2]}</span>{' '}
        
        {/* Third animated text (schedules) */}
        <span className="mx-2 my-1">
          <span 
            className={`inline-block transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${scheduleClass}`}
          >
            {textGroups[2][currentIndices[2]]}
          </span>
        </span>{' '}
        
        <span className={lastElementClass}>{staticTexts[3]}</span>
      </div>
    </div>
  );
}

export default AnimatedTextCycler;
