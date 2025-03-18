import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Location } from '@/lib/types';
import { fetchLocations } from '@/lib/sheets';
import MapView from '@/components/MapView';
import LocationList from '@/components/LocationList';
import SearchBar from '@/components/SearchBar';
import { ViewToggle } from '@/components/ViewToggle';

export default function Index() {
  const [view, setView] = useState<'list' | 'map'>('list');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch locations using React Query
  const { data: locations = [], isLoading, error } = useQuery({
    queryKey: ['locations'],
    queryFn: fetchLocations
  });

  // Filter locations based on search query
  const filteredLocations = locations.filter(loc =>
    loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.babyAmenities.some(amenity => amenity.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    toast.success({
      title: 'Search Results',
      description: `Found ${filteredLocations.length} locations for "${query || 'all'}"`,
    });
  };

  // Handle view toggle
  const handleViewToggle = (newView: 'list' | 'map') => {
    setView(newView);
    toast.success({
      title: 'View Changed',
      description: `You're now viewing locations in ${newView} view.`,
    });
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen">Error loading locations</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Find Baby-Friendly Locations</h1>
      <p className="text-gray-600 mb-8">
        Discover the best restaurants and places that welcome babies and young children.
      </p>

      <div className="flex flex-col gap-4 mb-8">
        <SearchBar onSearch={handleSearch} />
        <ViewToggle view={view} onViewChange={handleViewToggle} />
      </div>

      <p className="text-sm text-gray-500 mb-4">
        {filteredLocations.length} Locations Found
      </p>

      <div className="relative min-h-[600px]">
        {view === 'map' ? (
          <MapView
            locations={filteredLocations}
            selectedLocation={selectedLocation}
            onSelectLocation={setSelectedLocation}
            className="rounded-lg shadow-lg"
          />
        ) : (
          <LocationList
            locations={filteredLocations}
            onSelectLocation={setSelectedLocation}
            className="space-y-4"
          />
        )}
      </div>
    </div>
  );
}
