import fs from 'fs';

// Dashboard rows with formulas and formatting
const dashboardRows = [
  ['📊 Baby Map Gran Canaria Dashboard'],
  [''],
  ['Overall Statistics'],
  ['Total Locations', '=COUNTA(Locations!A2:A)'],
  ['Restaurants', '=COUNTIF(Locations!C2:C, "restaurant")'],
  ['Places', '=COUNTIF(Locations!C2:C, "place")'],
  [''],
  ['Ratings'],
  ['Average Rating', '=AVERAGE(Locations!F2:F)', '⭐'],
  ['5★ Locations', '=COUNTIF(Locations!F2:F, ">=4.5")'],
  ['4★ Locations', '=COUNTIF(Locations!F2:F, ">=3.5") - COUNTIF(Locations!F2:F, ">=4.5")'],
  [''],
  ['Price Distribution'],
  ['Budget (€)', '=COUNTIF(Locations!L2:L, 1)'],
  ['Mid-Range (€€)', '=COUNTIF(Locations!L2:L, 2)'],
  ['Premium (€€€)', '=COUNTIF(Locations!L2:L, 3)'],
  [''],
  ['Amenities Analysis'],
  ['Most Common Amenity', '=INDEX(Amenities!A:A, MATCH(MAX(COUNTIF(SPLIT(Locations!J2:J, ", "), Amenities!A2:A)), ARRAYFORMULA(COUNTIF(SPLIT(Locations!J2:J, ", "), Amenities!A2:A)), 0) + 1)'],
  ['Average Amenities per Location', '=AVERAGE(ARRAYFORMULA(LEN(Locations!J2:J) - LEN(SUBSTITUTE(Locations!J2:J, ",", "")) + 1))'],
  [''],
  ['Amenities Breakdown'],
  ...['changing_table', 'high_chair', 'kids_menu', 'stroller_friendly', 'nursing_area', 'play_area', 'quiet_space'].map(amenity => 
    [`${amenity.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`, `=COUNTIF(SPLIT(Locations!J2:J, ", "), "${amenity}")`]
  )
];

// Convert rows to CSV format
const csvContent = dashboardRows
  .map(row => row.map(cell => 
    cell.includes(',') || cell.includes('"') || cell.includes('\n') 
      ? `"${cell.replace(/"/g, '""')}"` 
      : cell
  ).join(','))
  .join('\n');

// Write to file
fs.writeFileSync('dashboard.csv', csvContent);

console.log('Dashboard CSV created! Import this as a new sheet named "Dashboard"');
console.log('After importing:');
console.log('1. Select A1:C30');
console.log('2. Format > Text wrapping > Wrap');
console.log('3. Resize columns to fit content');
console.log('4. Add any charts or graphs as needed'); 