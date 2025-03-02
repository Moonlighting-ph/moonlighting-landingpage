
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 800,
  className = '',
  once = true,
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Define transform based on direction
    let initialTransform = '';
    switch (direction) {
      case 'up':
        initialTransform = 'translateY(40px)';
        break;
      case 'down':
        initialTransform = 'translateY(-40px)';
        break;
      case 'left':
        initialTransform = 'translateX(40px)';
        break;
      case 'right':
        initialTransform = 'translateX(-40px)';
        break;
      case 'none':
        initialTransform = 'scale(0.96)';
        break;
    }
    
    // Apply initial styles
    element.style.opacity = '0';
    element.style.transform = initialTransform;
    element.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`;
    element.style.willChange = 'opacity, transform';
    
    // Delay the animation if specified
    if (delay > 0) {
      element.style.transitionDelay = `${delay}ms`;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view, apply animation
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0) scale(1)';
            
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            // Element is not in view and we want to re-animate
            element.style.opacity = '0';
            element.style.transform = initialTransform;
          }
        });
      },
      { 
        threshold: threshold,
        root: null,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, direction, duration, once, threshold]);
  
  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      {children}
    </div>
  );
};

export default Reveal;
