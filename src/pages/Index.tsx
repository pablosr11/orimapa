
import { useState, useEffect } from 'react';
import { locations } from '@/data/locations';
import { Location, ViewState } from '@/lib/types';
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import ViewToggle from '@/components/ViewToggle';
import LocationList from '@/components/LocationList';
import MapView from '@/components/MapView';
import LocationDetail from '@/components/LocationDetail';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [viewState, setViewState] = useState<ViewState>({
    activeView: 'list',
    selectedLocation: null
  });
  const [filteredLocations, setFilteredLocations] = useState<Location[]>(locations);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Simulate page loading and animate entrance
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleViewChange = (view: 'list' | 'map') => {
    setViewState(prev => ({
      ...prev,
      activeView: view
    }));
    
    toast({
      title: `Switched to ${view} view`,
      description: `You're now viewing locations in ${view} view.`,
      duration: 2000,
    });
  };

  const handleSelectLocation = (location: Location) => {
    setViewState(prev => ({
      ...prev,
      selectedLocation: location
    }));
  };

  const handleCloseLocationDetail = () => {
    setViewState(prev => ({
      ...prev,
      selectedLocation: null
    }));
  };

  const handleSearch = (query: string, location: string) => {
    // In a real app, this would make an API call
    // For demo purposes, we're just filtering the static data
    
    const lowercaseQuery = query.toLowerCase();
    
    const filtered = locations.filter(loc => 
      loc.name.toLowerCase().includes(lowercaseQuery) ||
      loc.type.toLowerCase().includes(lowercaseQuery) ||
      loc.address.toLowerCase().includes(lowercaseQuery) ||
      loc.babyAmenities.some(amenity => 
        amenity.toLowerCase().includes(lowercaseQuery)
      )
    );
    
    setFilteredLocations(filtered);
    
    toast({
      title: `Search results`,
      description: `Found ${filtered.length} locations for "${query || 'all'}"`,
      duration: 3000,
    });
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <NavBar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8 text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-balance">
            Find Baby-Friendly Locations
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the best restaurants and places that welcome babies and young children.
          </p>
        </div>
        
        <div className="flex flex-col items-center mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <SearchBar onSearch={handleSearch} />
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <h2 className="text-xl font-semibold mb-4 sm:mb-0">
            {filteredLocations.length} Locations Found
          </h2>
          
          <ViewToggle
            view={viewState.activeView}
            onChange={handleViewChange}
          />
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
          {viewState.activeView === 'list' ? (
            <LocationList
              locations={filteredLocations}
              onSelectLocation={handleSelectLocation}
              className="animate-view-transition"
            />
          ) : (
            <div className="h-[70vh] rounded-xl overflow-hidden animate-view-transition">
              <MapView
                locations={filteredLocations}
                selectedLocation={viewState.selectedLocation}
                onSelectLocation={handleSelectLocation}
              />
            </div>
          )}
        </div>
      </main>
      
      {viewState.selectedLocation && (
        <LocationDetail
          location={viewState.selectedLocation}
          onClose={handleCloseLocationDetail}
        />
      )}
    </div>
  );
};

export default Index;
