
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

  // Apply custom styles or default styles
  const middleElementClass = customStyles.middleElementClass || 
    "rounded-full px-4 py-1 bg-blue-600/90 dark:bg-blue-600/90 text-white font-semibold shadow-sm border border-blue-400/30";
  
  const firstElementClass = customStyles.firstElementClass || 
    "text-gray-900 dark:text-white font-semibold";
  
  const lastElementClass = customStyles.lastElementClass || 
    "text-gray-900 dark:text-white";

  // Specific styles for profession and schedule items
  const professionClass = "bg-blue-800/90 dark:bg-blue-700/90 text-white rounded-full px-4 py-1 font-semibold shadow-sm border border-blue-700/30";
  const scheduleClass = "bg-cyan-600/90 dark:bg-cyan-600/90 text-white rounded-full px-4 py-1 font-semibold shadow-sm border border-cyan-500/30";

  return (
    <div className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight ${className}`}>
      <span className={firstElementClass}>{staticTexts[0]}</span>{' '}
      
      {/* First animated text (professions) */}
      <span className="relative inline-block">
        <span 
          className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${professionClass}`}
        >
          {textGroups[0][currentIndices[0]]}
        </span>
      </span>{' '}
      
      <span className={firstElementClass}>{staticTexts[1]}</span>{' '}
      
      {/* Second animated text (locations) */}
      <span className="relative inline-block">
        <span 
          className={`inline-block transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${middleElementClass}`}
        >
          {textGroups[1][currentIndices[1]]}
        </span>
      </span>{' '}
      
      <span className={lastElementClass}>{staticTexts[2]}</span>{' '}
      
      {/* Third animated text (schedules) */}
      <span className="relative inline-block">
        <span 
          className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${scheduleClass}`}
        >
          {textGroups[2][currentIndices[2]]}
        </span>
      </span>{' '}
      
      <span className={lastElementClass}>{staticTexts[3]}</span>
    </div>
  );
}

export default AnimatedTextCycler;
