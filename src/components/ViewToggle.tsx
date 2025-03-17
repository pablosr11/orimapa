
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { List, Map } from 'lucide-react';

interface ViewToggleProps {
  view: 'list' | 'map';
  onChange: (view: 'list' | 'map') => void;
  className?: string;
}

const ViewToggle = ({ view, onChange, className }: ViewToggleProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleViewChange = (newView: 'list' | 'map') => {
    if (view === newView || isAnimating) return;
    
    setIsAnimating(true);
    onChange(newView);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div 
      className={cn(
        "flex items-center bg-white dark:bg-gray-800 rounded-full p-1 shadow-md dark:shadow-none border border-gray-100 dark:border-gray-700 transition-all duration-300",
        className
      )}
    >
      <button
        onClick={() => handleViewChange('list')}
        className={cn(
          "flex items-center justify-center py-2 px-4 rounded-full text-sm font-medium transition-all duration-300",
          view === 'list' 
            ? "bg-primary text-white shadow-sm" 
            : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        )}
        disabled={isAnimating}
        aria-label="List view"
      >
        <List size={16} className="mr-1.5" />
        <span>List</span>
      </button>
      
      <button
        onClick={() => handleViewChange('map')}
        className={cn(
          "flex items-center justify-center py-2 px-4 rounded-full text-sm font-medium transition-all duration-300",
          view === 'map' 
            ? "bg-primary text-white shadow-sm" 
            : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        )}
        disabled={isAnimating}
        aria-label="Map view"
      >
        <Map size={16} className="mr-1.5" />
        <span>Map</span>
      </button>
    </div>
  );
};

export default ViewToggle;
