import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Location } from '@/lib/types';
import { MapPin, Baby } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapViewProps {
  locations: Location[];
  selectedLocation: Location | null;
  onSelectLocation: (location: Location) => void;
  className?: string;
}

const MapView = ({ locations, selectedLocation, onSelectLocation, className }: MapViewProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<{[key: string]: mapboxgl.Marker}>({});
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  
  // Use environment variable for Mapbox token
  const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;
  
  useEffect(() => {
    // Don't initialize map if container ref is not available
    if (!mapContainerRef.current) return;
    
    // Clean up any existing map instance
    if (map.current) {
      map.current.remove();
    }
    
    try {
      // Initialize Mapbox
      mapboxgl.accessToken = mapboxToken;
      
      const newMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-15.5972, 27.9653], // Center of Gran Canaria
        zoom: 9.5 // Zoomed out to show more of the island
      });
      
      map.current = newMap;
      
      // Add navigation controls
      newMap.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );
      
      newMap.on('load', () => {
        setIsMapLoaded(true);
        
        // Add markers for each location
        locations.forEach(location => {
          addMarker(location);
        });
        
        // Fit bounds to include all markers
        if (locations.length > 0) {
          const bounds = new mapboxgl.LngLatBounds();
          locations.forEach(location => {
            bounds.extend([location.coordinates.lng, location.coordinates.lat]);
          });
          newMap.fitBounds(bounds, { padding: 50 });
        }
      });
      
      return () => {
        // Cleanup on component unmount
        newMap.remove();
      };
    } catch (err) {
      console.error('Error initializing Mapbox:', err);
      setIsMapLoaded(false);
    }
  }, [locations.length]);
  
  // Update markers when locations change
  useEffect(() => {
    if (!map.current || !isMapLoaded) return;
    
    // Remove all existing markers
    Object.values(markers.current).forEach(marker => marker.remove());
    markers.current = {};
    
    // Add new markers
    locations.forEach(location => {
      addMarker(location);
    });
    
    // Update the selected marker if there is one
    if (selectedLocation) {
      const marker = markers.current[selectedLocation.id];
      if (marker) {
        // Make the selected marker more prominent
        const markerElement = marker.getElement();
        markerElement.classList.add('marker-selected');
        
        // Center the map on the selected location
        map.current.flyTo({
          center: [selectedLocation.coordinates.lng, selectedLocation.coordinates.lat],
          zoom: 14,
          essential: true
        });
      }
    }
  }, [locations, selectedLocation, isMapLoaded]);
  
  const addMarker = (location: Location) => {
    if (!map.current) return;
    
    // Create custom element for marker
    const el = document.createElement('div');
    el.className = 'marker-container';
    
    // Create pin element
    const pin = document.createElement('div');
    pin.className = `marker ${location.type === 'restaurant' ? 'marker-restaurant' : 'marker-place'}`;
    
    // Add icon to pin
    const icon = document.createElement('div');
    icon.className = 'marker-icon';
    icon.innerHTML = location.type === 'restaurant' 
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01"></path><path d="M15 12h.01"></path><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path></svg>';
    
    pin.appendChild(icon);
    el.appendChild(pin);
    
    // Create new marker
    const marker = new mapboxgl.Marker(el)
      .setLngLat([location.coordinates.lng, location.coordinates.lat])
      .addTo(map.current);
    
    // Add click event to marker
    marker.getElement().addEventListener('click', () => {
      onSelectLocation(location);
    });
    
    // Store marker reference
    markers.current[location.id] = marker;
    
    return marker;
  };
  
  return (
    <div className={cn("relative w-full h-full", className)}>
      {/* Add styles for custom markers */}
      <style>
        {`
          .marker-container {
            cursor: pointer;
          }
          .marker {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }
          .marker:hover {
            transform: scale(1.1);
          }
          .marker-restaurant {
            background-color: hsl(var(--primary));
            color: white;
          }
          .marker-place {
            background-color: #10b981;
            color: white;
          }
          .marker-selected {
            transform: scale(1.2);
            z-index: 10;
          }
          .marker-icon {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mapboxgl-popup-content {
            padding: 15px;
            border-radius: 8px;
          }
        `}
      </style>
      
      <div 
        ref={mapContainerRef}
        className={cn(
          "relative w-full h-full rounded-xl overflow-hidden bg-slate-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
          !isMapLoaded && "animate-pulse",
        )}
      />
      
      {!isMapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-full h-8 w-8 border-4 border-primary border-t-transparent animate-spin"></div>
            <div className="text-gray-600 dark:text-gray-300">Loading map...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;
