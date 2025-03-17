
import { Location } from '../lib/types';

export const locations: Location[] = [
  {
    id: '1',
    name: 'Sunny Side Café',
    type: 'restaurant',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    address: '123 Bright Ave, San Francisco, CA',
    rating: 4.7,
    reviewCount: 128,
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    },
    babyAmenities: ['changing_table', 'high_chair', 'kids_menu', 'stroller_friendly'],
    description: 'A bright, airy café with a dedicated kids' corner and a menu that caters to the whole family. The spacious layout makes it easy to navigate with strollers.',
    priceLevel: 2,
    openingHours: {
      'Monday': '8:00 AM - 8:00 PM',
      'Tuesday': '8:00 AM - 8:00 PM',
      'Wednesday': '8:00 AM - 8:00 PM',
      'Thursday': '8:00 AM - 8:00 PM',
      'Friday': '8:00 AM - 9:00 PM',
      'Saturday': '9:00 AM - 9:00 PM',
      'Sunday': '9:00 AM - 7:00 PM'
    }
  },
  {
    id: '2',
    name: 'Little Explorers Park',
    type: 'place',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: '456 Park Way, San Francisco, CA',
    rating: 4.9,
    reviewCount: 215,
    coordinates: {
      lat: 37.7694,
      lng: -122.4862
    },
    babyAmenities: ['changing_table', 'nursing_area', 'play_area', 'stroller_friendly'],
    description: 'A family-friendly park with clean facilities, baby-changing stations, and a fenced toddler play area. Plenty of shade and seating for parents.',
    priceLevel: 1,
    openingHours: {
      'Monday': '6:00 AM - 8:00 PM',
      'Tuesday': '6:00 AM - 8:00 PM',
      'Wednesday': '6:00 AM - 8:00 PM',
      'Thursday': '6:00 AM - 8:00 PM',
      'Friday': '6:00 AM - 8:00 PM',
      'Saturday': '6:00 AM - 8:00 PM',
      'Sunday': '6:00 AM - 8:00 PM'
    }
  },
  {
    id: '3',
    name: 'Family Table',
    type: 'restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: '789 Family Rd, San Francisco, CA',
    rating: 4.5,
    reviewCount: 103,
    coordinates: {
      lat: 37.7833,
      lng: -122.4167
    },
    babyAmenities: ['changing_table', 'high_chair', 'kids_menu', 'play_area'],
    description: 'A family-owned restaurant with a warm atmosphere. Features a small play area for kids and a varied menu with healthy options for children.',
    priceLevel: 2,
    openingHours: {
      'Monday': '11:00 AM - 9:00 PM',
      'Tuesday': '11:00 AM - 9:00 PM',
      'Wednesday': '11:00 AM - 9:00 PM',
      'Thursday': '11:00 AM - 9:00 PM',
      'Friday': '11:00 AM - 10:00 PM',
      'Saturday': '10:00 AM - 10:00 PM',
      'Sunday': '10:00 AM - 9:00 PM'
    }
  },
  {
    id: '4',
    name: 'Tiny Tots Museum',
    type: 'place',
    image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: '101 Museum Circle, San Francisco, CA',
    rating: 4.8,
    reviewCount: 176,
    coordinates: {
      lat: 37.8021,
      lng: -122.4059
    },
    babyAmenities: ['changing_table', 'nursing_area', 'stroller_friendly', 'quiet_space'],
    description: 'An interactive museum designed for babies and toddlers with sensory exhibits and crawling spaces. Includes multiple changing stations and quiet nursing rooms.',
    priceLevel: 2,
    openingHours: {
      'Monday': '10:00 AM - 5:00 PM',
      'Tuesday': '10:00 AM - 5:00 PM',
      'Wednesday': '10:00 AM - 5:00 PM',
      'Thursday': '10:00 AM - 5:00 PM',
      'Friday': '10:00 AM - 5:00 PM',
      'Saturday': '9:00 AM - 6:00 PM',
      'Sunday': '9:00 AM - 6:00 PM'
    }
  },
  {
    id: '5',
    name: 'Green Sprout Bistro',
    type: 'restaurant',
    image: 'https://images.unsplash.com/photo-1564759224907-65b945ff0e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    address: '555 Garden Lane, San Francisco, CA',
    rating: 4.6,
    reviewCount: 92,
    coordinates: {
      lat: 37.7879,
      lng: -122.4074
    },
    babyAmenities: ['high_chair', 'kids_menu', 'stroller_friendly'],
    description: 'A health-focused bistro with organic baby food options and a menu that accommodates common allergies. Wide aisles for stroller accessibility.',
    priceLevel: 3,
    openingHours: {
      'Monday': '7:00 AM - 8:00 PM',
      'Tuesday': '7:00 AM - 8:00 PM',
      'Wednesday': '7:00 AM - 8:00 PM',
      'Thursday': '7:00 AM - 8:00 PM',
      'Friday': '7:00 AM - 9:00 PM',
      'Saturday': '8:00 AM - 9:00 PM',
      'Sunday': '8:00 AM - 8:00 PM'
    }
  },
  {
    id: '6',
    name: 'Coastal Kid's Library',
    type: 'place',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: '321 Book Blvd, San Francisco, CA',
    rating: 4.7,
    reviewCount: 108,
    coordinates: {
      lat: 37.7786,
      lng: -122.3893
    },
    babyAmenities: ['changing_table', 'nursing_area', 'quiet_space', 'stroller_friendly'],
    description: 'A public library with an excellent children's section, regular story times for babies, and comfortable seating for parents. Features a supervised play area.',
    priceLevel: 1,
    openingHours: {
      'Monday': '9:00 AM - 7:00 PM',
      'Tuesday': '9:00 AM - 7:00 PM',
      'Wednesday': '9:00 AM - 7:00 PM',
      'Thursday': '9:00 AM - 7:00 PM',
      'Friday': '9:00 AM - 7:00 PM',
      'Saturday': '10:00 AM - 6:00 PM',
      'Sunday': '1:00 PM - 5:00 PM'
    }
  },
  {
    id: '7',
    name: 'Bambino Pizzeria',
    type: 'restaurant',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
    address: '222 Pizza Way, San Francisco, CA',
    rating: 4.4,
    reviewCount: 87,
    coordinates: {
      lat: 37.7646,
      lng: -122.4247
    },
    babyAmenities: ['high_chair', 'kids_menu', 'stroller_friendly'],
    description: 'A neighborhood pizzeria where kids can watch their pizza being made. Offers smaller portions for children and has high chairs available.',
    priceLevel: 2,
    openingHours: {
      'Monday': '11:00 AM - 9:00 PM',
      'Tuesday': '11:00 AM - 9:00 PM',
      'Wednesday': '11:00 AM - 9:00 PM',
      'Thursday': '11:00 AM - 9:00 PM',
      'Friday': '11:00 AM - 10:00 PM',
      'Saturday': '11:00 AM - 10:00 PM',
      'Sunday': '12:00 PM - 9:00 PM'
    }
  },
  {
    id: '8',
    name: 'Baby Bay Beach',
    type: 'place',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
    address: '1 Shoreline Dr, San Francisco, CA',
    rating: 4.5,
    reviewCount: 156,
    coordinates: {
      lat: 37.8073,
      lng: -122.4301
    },
    babyAmenities: ['changing_table', 'play_area', 'stroller_friendly'],
    description: 'A sheltered beach area with calm waters, clean sand, and facilities designed for families with young children. Features shaded areas and restrooms with changing tables.',
    priceLevel: 1,
    openingHours: {
      'Monday': '6:00 AM - 10:00 PM',
      'Tuesday': '6:00 AM - 10:00 PM',
      'Wednesday': '6:00 AM - 10:00 PM',
      'Thursday': '6:00 AM - 10:00 PM',
      'Friday': '6:00 AM - 10:00 PM',
      'Saturday': '6:00 AM - 10:00 PM',
      'Sunday': '6:00 AM - 10:00 PM'
    }
  }
];
