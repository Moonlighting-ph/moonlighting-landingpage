
import { useEffect, useRef, RefObject } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number; // Value between 0 and 1 indicating how much of the element should be visible
  rootMargin?: string; // Margin around the root element
  animationClass?: string; // CSS class to add when element is visible
}

/**
 * A hook that adds animation classes to elements when they enter the viewport
 * Generic type T extends HTMLElement to allow for different element types
 */
export const useScrollAnimation = <T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px',
  animationClass = 'animate-fade-in opacity-0 translate-y-10'
}: UseScrollAnimationOptions = {}): RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Add the initial animation classes that set initial state
    const classes = animationClass.split(' ');
    classes.forEach(cls => {
      if (cls) currentRef.classList.add(cls);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When element enters viewport
          if (entry.isIntersecting) {
            // Remove opacity-0 and translate-y-10 to make it visible
            currentRef.classList.remove('opacity-0');
            currentRef.classList.remove('translate-y-10');
            
            // If animation class is set, wait for animation to complete before removing observer
            const animationDuration = 1000; // 1 second animation duration
            setTimeout(() => {
              observer.unobserve(currentRef);
            }, animationDuration);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationClass, rootMargin, threshold]);

  return ref;
};
