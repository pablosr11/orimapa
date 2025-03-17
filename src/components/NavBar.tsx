
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Baby } from 'lucide-react';

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-8 bg-white/80 backdrop-blur-lg dark:bg-gray-900/80",
        scrolled ? "shadow-sm dark:shadow-none border-b border-gray-200 dark:border-gray-800" : "",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Baby className="h-7 w-7 text-primary" />
          <span className="ml-2 text-lg font-semibold">BabyFriendly Finder</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#" 
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 dark:text-gray-300 dark:hover:text-white"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 dark:text-gray-300 dark:hover:text-white"
          >
            About
          </a>
          <a 
            href="#" 
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 dark:text-gray-300 dark:hover:text-white"
          >
            Contact
          </a>
          <button 
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Add Location
          </button>
        </nav>
        
        <button 
          className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition-colors duration-200"
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
