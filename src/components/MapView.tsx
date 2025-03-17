
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
        "relative w-full h-full rounded-xl overflow-hidden bg-slate-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
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
          {/* Improved mock map background with grid and colors */}
          <div className="absolute inset-0 bg-blue-50 dark:bg-slate-900">
            {/* Map grid */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(156, 163, 175, 0.2)" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            {/* Map terrain features */}
            <div className="absolute inset-0">
              {/* Parks and green areas */}
              <div className="absolute rounded-full bg-green-200/30 dark:bg-green-900/20" style={{ width: '20%', height: '20%', left: '10%', top: '30%' }}></div>
              <div className="absolute rounded-full bg-green-200/30 dark:bg-green-900/20" style={{ width: '15%', height: '15%', left: '30%', top: '60%' }}></div>
              
              {/* Water features */}
              <div className="absolute bg-blue-200/40 dark:bg-blue-900/30" style={{ width: '30%', height: '15%', left: '70%', top: '20%', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}></div>
              
              {/* Roads */}
              <div className="absolute bg-gray-300/50 dark:bg-gray-700/40" style={{ width: '90%', height: '2px', left: '5%', top: '50%' }}></div>
              <div className="absolute bg-gray-300/50 dark:bg-gray-700/40" style={{ width: '2px', height: '80%', left: '50%', top: '10%' }}></div>
              <div className="absolute bg-gray-300/50 dark:bg-gray-700/40" style={{ width: '40%', height: '2px', left: '5%', top: '30%', transform: 'rotate(15deg)' }}></div>
              <div className="absolute bg-gray-300/50 dark:bg-gray-700/40" style={{ width: '30%', height: '2px', left: '60%', top: '70%', transform: 'rotate(-20deg)' }}></div>
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
                    "w-10 h-10 rounded-full flex items-center justify-center shadow-lg mb-1",
                    location.type === 'restaurant' 
                      ? "bg-primary text-white" 
                      : "bg-emerald-500 text-white",
                    isSelected && "animate-pulse"
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
          
          {/* Map attribution - as would be required by map providers */}
          <div className="absolute bottom-2 right-2 text-xs text-gray-500 dark:text-gray-400 bg-white/70 dark:bg-black/30 px-1 rounded">
            Mock Map | Baby-Friendly Locations
          </div>
        </>
      )}
    </div>
  );
};

export default MapView;
