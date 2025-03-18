# Google Sheets Template

## Sheet Name: Locations

### Column Headers:
- id
- name
- type
- image
- address
- rating
- reviewCount
- latitude
- longitude
- babyAmenities
- description
- priceLevel
- openingHours

### Example Row:
- id: 1
- name: La Terraza del Sol
- type: restaurant
- image: https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80
- address: Av. de Las Canteras 32, Las Palmas de Gran Canaria
- rating: 4.7
- reviewCount: 128
- latitude: 28.141
- longitude: -15.4301
- babyAmenities: changing_table, high_chair, kids_menu, stroller_friendly
- description: A bright, airy café with a dedicated kids' corner and a menu that caters to the whole family. The spacious layout makes it easy to navigate with strollers.
- priceLevel: 2
- openingHours: {"Monday":"8:00 AM - 8:00 PM","Tuesday":"8:00 AM - 8:00 PM","Wednesday":"8:00 AM - 8:00 PM","Thursday":"8:00 AM - 8:00 PM","Friday":"8:00 AM - 9:00 PM","Saturday":"9:00 AM - 9:00 PM","Sunday":"9:00 AM - 7:00 PM"}

### Notes:
1. The `babyAmenities` column should be a comma-separated list
2. The `openingHours` column should be a valid JSON string
3. `type` must be either 'restaurant' or 'place'
4. `priceLevel` must be 1, 2, or 3
5. `rating` should be between 0 and 5
6. `latitude` and `longitude` should be valid coordinates

### Sample Google Sheets Formula for Validation:
- For type: `=AND(B2="restaurant",B2="place")`
- For priceLevel: `=AND(L2>=1,L2<=3)`
- For rating: `=AND(F2>=0,F2<=5)`
