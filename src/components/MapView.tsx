
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Location } from '@/lib/types';
import { MapPin, Baby } from 'lucide-react';

interface MapViewProps {
  locations: Location[];
  selectedLocation: Location | null;
  onSelectLocation: (location: Location) => void;
  className?: string;
}

const MapView = ({ locations, selectedLocation, onSelectLocation, className }: MapViewProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  
  // This is a placeholder for actual map implementation
  // In a real project, you would use a library like Mapbox or Google Maps
  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const mockPinPosition = (location: Location) => {
    // This is just a mock function to position pins on our fake map
    // In a real implementation, you would use actual coordinates
    const baseLeft = (location.coordinates.lng + 122.5) * 100;
    const baseTop = (37.85 - location.coordinates.lat) * 100;
    
    return {
      left: `${baseLeft}%`,
      top: `${baseTop}%`
    };
  };
  
  return (
    <div 
      ref={mapContainerRef}
      className={cn(
        "relative w-full h-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
        !isMapLoaded && "animate-pulse",
        className
      )}
    >
      {!isMapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400 dark:text-gray-500">Loading map...</div>
        </div>
      )}
      
      {isMapLoaded && (
        <>
          {/* Mock map background - In real implementation, this would be a map library */}
          <div className="absolute inset-0 bg-[#f8f9fa] dark:bg-[#1a1b1e]">
            <div className="absolute inset-0 opacity-10 dark:opacity-20">
              <svg width="100%" height="100%">
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
          
          {/* Location pins */}
          {locations.map((location) => {
            const isSelected = selectedLocation?.id === location.id;
            const position = mockPinPosition(location);
            
            return (
              <button
                key={location.id}
                onClick={() => onSelectLocation(location)}
                className={cn(
                  "absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
                  isSelected ? "z-20 scale-125" : "z-10 hover:scale-110"
                )}
                style={{ top: position.top, left: position.left }}
                aria-label={location.name}
              >
                <div className={cn(
                  "flex flex-col items-center",
                )}>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shadow-md mb-1",
                    location.type === 'restaurant' 
                      ? "bg-primary text-white" 
                      : "bg-emerald-500 text-white",
                    isSelected && "map-pin-pulse"
                  )}>
                    {location.type === 'restaurant' ? (
                      <MapPin className="h-5 w-5" />
                    ) : (
                      <Baby className="h-5 w-5" />
                    )}
                  </div>
                  
                  {isSelected && (
                    <div className="px-2 py-1 rounded-md bg-white dark:bg-gray-800 shadow-lg text-xs font-medium whitespace-nowrap">
                      {location.name}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </>
      )}
    </div>
  );
};

export default MapView;
