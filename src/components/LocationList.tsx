
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Location } from '@/lib/types';
import LocationCard from './LocationCard';

interface LocationListProps {
  locations: Location[];
  onSelectLocation: (location: Location) => void;
  className?: string;
}

const LocationList = ({ locations, onSelectLocation, className }: LocationListProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<string[]>([]);

  useEffect(() => {
    if (!listRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { 
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
    
    const cards = listRef.current.querySelectorAll('.location-card');
    cards.forEach((card) => observer.observe(card));
    
    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [locations]);
  
  return (
    <div 
      ref={listRef}
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {locations.map((location, index) => (
        <div 
          key={location.id}
          id={location.id}
          className={cn(
            "location-card animate-slide-in opacity-0",
            visibleCards.includes(location.id) && "opacity-100"
          )}
          style={{ 
            animationDelay: `${index * 100}ms`,
            animationFillMode: 'forwards'
          }}
        >
          <LocationCard 
            location={location} 
            onSelect={onSelectLocation} 
          />
        </div>
      ))}
    </div>
  );
};

export default LocationList;
