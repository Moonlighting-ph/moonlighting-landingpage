
import React, { useEffect, useState } from 'react';

const PageTransition: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background transition-transform duration-700 ease-in-out ${
        isLoading ? 'transform-none' : 'transform -translate-y-full'
      }`}
    >
      <div className="flex items-center justify-center h-full">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default PageTransition;
