
import React, { useState, useEffect } from 'react';

interface AnimatedTextCyclerProps {
  textGroups: string[][];
  staticTexts: string[];
  className?: string;
}

const AnimatedTextCycler: React.FC<AnimatedTextCyclerProps> = ({ 
  textGroups, 
  staticTexts,
  className = ""
}) => {
  const [currentIndices, setCurrentIndices] = useState<number[]>(textGroups.map(() => 0));
  const [isAnimating, setIsAnimating] = useState<boolean[]>(textGroups.map(() => false));

  useEffect(() => {
    const intervals = textGroups.map((_, index) => {
      return setInterval(() => {
        setIsAnimating(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
        
        setTimeout(() => {
          setCurrentIndices(prev => {
            const newIndices = [...prev];
            newIndices[index] = (newIndices[index] + 1) % textGroups[index].length;
            return newIndices;
          });
          
          setTimeout(() => {
            setIsAnimating(prev => {
              const newState = [...prev];
              newState[index] = false;
              return newState;
            });
          }, 300);
        }, 300);
      }, 3000);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [textGroups]);

  return (
    <div className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${className}`}>
      {staticTexts.map((text, i) => (
        <React.Fragment key={`static-${i}`}>
          <span>{text}</span>
          {i < textGroups.length && (
            <span 
              className={`relative mx-2 inline-block rounded-full px-4 py-1 ${
                i === 0 ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400' : 
                i === 1 ? 'bg-secondary/20 text-secondary dark:text-secondary' : 
                'bg-sky-500/20 text-sky-600 dark:text-sky-400'
              } transition-all duration-300 ${isAnimating[i] ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}
            >
              {textGroups[i][currentIndices[i]]}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AnimatedTextCycler;
