
import { useEffect, useState } from 'react';

// Hook to handle image loading with blur effect
export const useImageLoader = (src: string): { isLoaded: boolean; currentSrc: string } => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    
    const img = new Image();
    img.src = src;
    
    // Set low-quality placeholder
    setCurrentSrc(src);
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src]);

  return { isLoaded, currentSrc };
};

// Animation timing function helpers
export const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export const easeInOutQuart = (t: number): number => {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
};

// Function to stagger animations for list items
export const staggeredDelay = (index: number, baseDelay: number = 50): number => {
  return index * baseDelay;
};

// Hook for element entrance animation based on viewport visibility
export const useInViewAnimation = (ref: React.RefObject<HTMLElement>, options = {}) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1,
      ...options
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isInView;
};
