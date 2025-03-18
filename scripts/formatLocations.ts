import { locations } from '../src/data/locations';
import fs from 'fs';

// Convert locations to CSV format
const headers = [
  'id',
  'name',
  'type',
  'image',
  'address',
  'rating',
  'reviewCount',
  'latitude',
  'longitude',
  'babyAmenities',
  'description',
  'priceLevel',
  'openingHours'
];

const rows = locations.map(location => [
  location.id,
  location.name,
  location.type,
  location.image,
  location.address,
  location.rating,
  location.reviewCount,
  location.coordinates.lat,
  location.coordinates.lng,
  location.babyAmenities.join(', '),
  location.description,
  location.priceLevel,
  JSON.stringify(location.openingHours)
]);

// Create CSV content
const csvContent = [
  headers.join(','),
  ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
].join('\n');

// Write to file
fs.writeFileSync('locations.csv', csvContent);

console.log('CSV file created successfully! You can now import this into Google Sheets.');

// Also create a markdown template for manual copy-paste
const markdownContent = `# Google Sheets Template

## Sheet Name: Locations

### Column Headers:
${headers.map(header => `- ${header}`).join('\n')}

### Example Row:
${rows[0].map((cell, index) => `- ${headers[index]}: ${cell}`).join('\n')}

### Notes:
1. The \`babyAmenities\` column should be a comma-separated list
2. The \`openingHours\` column should be a valid JSON string
3. \`type\` must be either 'restaurant' or 'place'
4. \`priceLevel\` must be 1, 2, or 3
5. \`rating\` should be between 0 and 5
6. \`latitude\` and \`longitude\` should be valid coordinates

### Sample Google Sheets Formula for Validation:
- For type: \`=AND(B2="restaurant",B2="place")\`
- For priceLevel: \`=AND(L2>=1,L2<=3)\`
- For rating: \`=AND(F2>=0,F2<=5)\`
`;

fs.writeFileSync('SHEETS_TEMPLATE.md', markdownContent);

console.log('Template markdown file created! Check SHEETS_TEMPLATE.md for instructions.'); 