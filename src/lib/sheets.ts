import { GoogleSpreadsheet } from 'google-spreadsheet';
import { Location } from './types';

const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;

export async function fetchLocations(): Promise<Location[]> {
  try {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    
    // Initialize with API key
    await doc.useApiKey(API_KEY);
    
    // Load the first sheet
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    
    // Load all rows
    const rows = await sheet.getRows();
    
    // Convert rows to Location objects
    return rows.map((row: any) => ({
      id: row.id,
      name: row.name,
      type: row.type as 'restaurant' | 'place',
      image: row.image,
      address: row.address,
      rating: Number(row.rating),
      reviewCount: Number(row.reviewCount),
      coordinates: {
        lat: Number(row.latitude),
        lng: Number(row.longitude)
      },
      babyAmenities: row.babyAmenities.split(',').map((a: string) => a.trim()),
      description: row.description,
      priceLevel: Number(row.priceLevel) as 1 | 2 | 3,
      openingHours: JSON.parse(row.openingHours)
    }));
  } catch (error) {
    console.error('Error fetching locations from Google Sheets:', error);
    throw error;
  }
} 