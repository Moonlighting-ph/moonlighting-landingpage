
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
    "relative mx-2 inline-block rounded-full px-4 py-1 bg-secondary/20 text-secondary dark:text-secondary transition-all duration-300 opacity-100 transform translate-y-0";
  
  const firstElementClass = customStyles.firstElementClass || 
    "relative mx-2 inline-block font-semibold";
  
  const lastElementClass = customStyles.lastElementClass || 
    "relative mx-2 inline-block";

  return (
    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight ${className}`}>
      <span className={firstElementClass}>{staticTexts[0]}</span>
      
      <span className="relative mx-2 inline-block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        <span 
          className={`absolute inset-0 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {textGroups[0][currentIndices[0]]}
        </span>
      </span>
      
      <span className={firstElementClass}>{staticTexts[1]}</span>
      
      <span className={middleElementClass}>
        <span 
          className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {textGroups[1][currentIndices[1]]}
        </span>
      </span>
      
      <span className={lastElementClass}>{staticTexts[2]}</span>
      
      <span className="relative mx-2 inline-block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        <span 
          className={`absolute inset-0 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {textGroups[2][currentIndices[2]]}
        </span>
      </span>
      
      <span className={lastElementClass}>{staticTexts[3]}</span>
    </h1>
  );
};

export default AnimatedTextCycler;
