import { BabyAmenity } from '../src/lib/types';
import fs from 'fs';

const amenities: BabyAmenity[] = [
  'changing_table',
  'high_chair',
  'kids_menu',
  'stroller_friendly',
  'nursing_area',
  'play_area',
  'quiet_space'
];

const amenityDescriptions: Record<BabyAmenity, string> = {
  changing_table: 'Baby changing facilities available',
  high_chair: 'High chairs for babies/toddlers',
  kids_menu: 'Special menu for children',
  stroller_friendly: 'Easy access with strollers',
  nursing_area: 'Private space for nursing',
  play_area: 'Dedicated children\'s play area',
  quiet_space: 'Quiet area for babies/children'
};

// Create CSV content for amenities sheet
const csvContent = [
  'Amenity,Description,Icon',
  ...amenities.map(amenity => 
    `${amenity},"${amenityDescriptions[amenity]}",🔵`
  )
].join('\n');

fs.writeFileSync('amenities.csv', csvContent);

console.log('Amenities CSV file created! Import this as a new sheet named "Amenities"'); 