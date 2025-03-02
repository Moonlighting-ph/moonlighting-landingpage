
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

  // Enhanced pill styles with improved sizing, padding, and font size
  const baseCircleClass = "text-white rounded-full px-6 py-3 font-semibold shadow-sm text-xl md:text-2xl inline-flex items-center justify-center min-w-[160px]";
  const professionClass = `${baseCircleClass} bg-blue-600/90 dark:bg-blue-600/90 border border-blue-400/30`;
  const locationClass = `${baseCircleClass} bg-indigo-500/90 dark:bg-indigo-500/90 border border-indigo-400/30`;
  const scheduleClass = `${baseCircleClass} bg-cyan-600/90 dark:bg-cyan-600/90 border border-cyan-500/30`;

  // Apply custom styles or default styles for static text
  const firstElementClass = customStyles.firstElementClass || 
    "text-gray-900 dark:text-white font-semibold";
  
  const lastElementClass = customStyles.lastElementClass || 
    "text-gray-900 dark:text-white";

  return (
    <div className={`flex flex-col md:flex-row flex-wrap gap-2 text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight hero-text-container ${className}`}>
      <div className="flex items-center flex-wrap">
        <span className={firstElementClass}>{staticTexts[0]}</span>{' '}
        
        {/* First animated text (professions) */}
        <span className="relative inline-block mx-2 my-1">
          <span 
            className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${professionClass}`}
          >
            {textGroups[0][currentIndices[0]]}
          </span>
        </span>{' '}
      </div>

      <div className="flex items-center flex-wrap">
        <span className={firstElementClass}>{staticTexts[1]}</span>{' '}
        
        {/* Second animated text (locations) */}
        <span className="relative inline-block mx-2 my-1">
          <span 
            className={`inline-block transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${locationClass}`}
          >
            {textGroups[1][currentIndices[1]]}
          </span>
        </span>{' '}
      </div>

      <div className="flex items-center flex-wrap">
        <span className={lastElementClass}>{staticTexts[2]}</span>{' '}
        
        {/* Third animated text (schedules) */}
        <span className="relative inline-block mx-2 my-1">
          <span 
            className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${scheduleClass}`}
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
