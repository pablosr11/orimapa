
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Location } from '@/lib/types';
import { useImageLoader } from '@/lib/animations';
import { X, Star, MapPin, Baby, Clock, ExternalLink } from 'lucide-react';

interface LocationDetailProps {
  location: Location;
  onClose: () => void;
  className?: string;
}

const LocationDetail = ({ location, onClose, className }: LocationDetailProps) => {
  const detailRef = useRef<HTMLDivElement>(null);
  const { isLoaded, currentSrc } = useImageLoader(location.image);
  
  const babyAmenityLabels: Record<string, string> = {
    'changing_table': 'Changing Table',
    'high_chair': 'High Chair',
    'kids_menu': 'Kids Menu',
    'stroller_friendly': 'Stroller Friendly',
    'nursing_area': 'Nursing Area',
    'play_area': 'Play Area',
    'quiet_space': 'Quiet Space'
  };
  
  const getPriceLevel = (level: number) => {
    return Array(level).fill('$').join('');
  };
  
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (detailRef.current && !detailRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        ref={detailRef}
        className={cn(
          "relative bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden animate-scale-in",
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors"
          aria-label="Close details"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img
            src={currentSrc}
            alt={location.name}
            className={cn(
              "w-full h-full object-cover transition-all duration-500",
              isLoaded ? "img-loaded" : "img-loading-blur"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center mb-2">
              <span className="px-2.5 py-1 rounded-full bg-white/90 dark:bg-gray-800/90 text-xs font-medium mr-2">
                {location.type === 'restaurant' ? (
                  <span className="text-primary">Restaurant</span>
                ) : (
                  <span className="text-emerald-500">Place</span>
                )}
              </span>
              
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/90 dark:bg-gray-800/90 text-xs font-medium">
                <Star className="h-3.5 w-3.5 text-amber-400 mr-1" fill="currentColor" />
                {location.rating} ({location.reviewCount} reviews)
              </span>
            </div>
            
            <h2 className="text-2xl font-bold text-white">{location.name}</h2>
            
            <div className="mt-2 flex items-center text-sm text-white/90">
              <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0" />
              <span>{location.address}</span>
            </div>
          </div>
        </div>
        
        <div className="overflow-y-auto p-6 max-h-[calc(90vh-20rem)]">
          <div className="mb-5">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 dark:text-gray-300">{location.description}</p>
          </div>
          
          <div className="mb-5">
            <h3 className="text-lg font-semibold mb-2">Baby & Child Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {location.babyAmenities.map((amenity) => (
                <span 
                  key={amenity}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  <Baby className="h-3.5 w-3.5 mr-1.5" />
                  {babyAmenityLabels[amenity]}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-5">
            <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(location.openingHours).map(([day, hours]) => (
                <div key={day} className="flex items-center">
                  <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-sm">
                    <span className="font-medium">{day}:</span> {hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Price Level: {getPriceLevel(location.priceLevel)}
            </span>
            
            <button className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">
              <ExternalLink className="h-4 w-4 mr-1.5" />
              Visit Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;
