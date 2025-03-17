
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Location } from '@/lib/types';
import { useImageLoader } from '@/lib/animations';
import { Star, MapPin, Baby } from 'lucide-react';

interface LocationCardProps {
  location: Location;
  onSelect: (location: Location) => void;
  className?: string;
}

const LocationCard = ({ location, onSelect, className }: LocationCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
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
  
  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(location)}
      className={cn(
        "group relative rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-700",
        "transform hover:-translate-y-1 hover:scale-[1.01]",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={currentSrc}
          alt={location.name}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            isLoaded ? "img-loaded" : "img-loading-blur"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 transition-opacity group-hover:opacity-70"></div>
        
        <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-white/90 dark:bg-gray-800/90 text-xs font-medium flex items-center">
          {location.type === 'restaurant' ? (
            <span className="text-primary">Restaurant</span>
          ) : (
            <span className="text-emerald-500">Place</span>
          )}
        </div>
        
        <div className="absolute top-3 right-3 flex items-center">
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-white/90 dark:bg-gray-800/90 text-xs font-medium">
            <Star className="h-3 w-3 text-amber-400 mr-1" fill="currentColor" />
            {location.rating}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate group-hover:text-primary transition-colors">
          {location.name}
        </h3>
        
        <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="truncate">{location.address}</span>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-1.5">
          {location.babyAmenities.slice(0, 3).map((amenity) => (
            <span 
              key={amenity}
              className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
            >
              <Baby className="h-3 w-3 mr-1" />
              {babyAmenityLabels[amenity]}
            </span>
          ))}
          {location.babyAmenities.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium">
              +{location.babyAmenities.length - 3} more
            </span>
          )}
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {getPriceLevel(location.priceLevel)}
          </span>
          
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {location.reviewCount} reviews
          </span>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

export default LocationCard;
