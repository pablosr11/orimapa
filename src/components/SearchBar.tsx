import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Search, MapPin, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string, location: string) => void;
  className?: string;
}

const SearchBar = ({ onSearch, className }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('Las Palmas, Gran Canaria');
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, location);
  };

  const handleClearQuery = () => {
    setQuery('');
  };

  return (
    <div 
      className={cn(
        "w-full max-w-2xl transition-all duration-300 transform",
        focused ? "scale-[1.01]" : "scale-100",
        className
      )}
    >
      <form 
        onSubmit={handleSubmit}
        className={cn(
          "relative flex flex-col sm:flex-row items-center w-full rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300",
          focused ? "ring-2 ring-primary/20 dark:ring-primary/30" : ""
        )}
      >
        <div className="flex items-center flex-1 px-4 py-3 w-full border-b sm:border-b-0 sm:border-r border-gray-100 dark:border-gray-700">
          <Search className="h-5 w-5 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search baby-friendly places..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="flex-1 ml-3 bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 text-sm"
          />
          {query && (
            <button
              type="button"
              onClick={handleClearQuery}
              className="p-1 ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
        </div>
        
        <div className="flex items-center flex-1 px-4 py-3 w-full">
          <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="flex-1 ml-3 bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 text-sm"
          />
        </div>
        
        <button 
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-colors duration-200 focus:outline-none"
        >
          Search
        </button>
      </form>
      
      <div className="mt-3 flex flex-wrap gap-2 px-1.5">
        <button className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
          Restaurants
        </button>
        <button className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
          Parks
        </button>
        <button className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
          High Chair
        </button>
        <button className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
          Changing Table
        </button>
        <button className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
          Kids Menu
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
