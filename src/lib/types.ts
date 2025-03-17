
export interface Location {
  id: string;
  name: string;
  type: 'restaurant' | 'place';
  image: string;
  address: string;
  rating: number;
  reviewCount: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  babyAmenities: BabyAmenity[];
  description: string;
  priceLevel: 1 | 2 | 3; // 1-3 represent $ to $$$
  openingHours: {
    [day: string]: string;
  };
}

export type BabyAmenity = 
  | 'changing_table' 
  | 'high_chair' 
  | 'kids_menu' 
  | 'stroller_friendly' 
  | 'nursing_area' 
  | 'play_area' 
  | 'quiet_space';

export interface ViewState {
  activeView: 'list' | 'map';
  selectedLocation: Location | null;
}
