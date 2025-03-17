
import { Location } from '../lib/types';

export const locations: Location[] = [
  {
    id: '1',
    name: 'La Terraza del Sol',
    type: 'restaurant',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    address: 'Av. de Las Canteras 32, Las Palmas de Gran Canaria',
    rating: 4.7,
    reviewCount: 128,
    coordinates: {
      lat: 28.1410,
      lng: -15.4301
    },
    babyAmenities: ['changing_table', 'high_chair', 'kids_menu', 'stroller_friendly'],
    description: 'A bright, airy café with a dedicated kids\' corner and a menu that caters to the whole family. The spacious layout makes it easy to navigate with strollers.',
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
    name: 'Parque Doramas',
    type: 'place',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: 'Calle León y Castillo s/n, Las Palmas de Gran Canaria',
    rating: 4.9,
    reviewCount: 215,
    coordinates: {
      lat: 28.1317,
      lng: -15.4380
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
    name: 'Restaurante La Marinera',
    type: 'restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: 'Paseo de Las Canteras 12, Las Palmas de Gran Canaria',
    rating: 4.5,
    reviewCount: 103,
    coordinates: {
      lat: 28.1405,
      lng: -15.4320
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
    name: 'Museo Elder de la Ciencia',
    type: 'place',
    image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: 'Parque Santa Catalina, Las Palmas de Gran Canaria',
    rating: 4.8,
    reviewCount: 176,
    coordinates: {
      lat: 28.1428,
      lng: -15.4308
    },
    babyAmenities: ['changing_table', 'nursing_area', 'stroller_friendly', 'quiet_space'],
    description: 'An interactive museum designed for families with exhibits suitable for children of all ages. Includes multiple changing stations and quiet nursing rooms.',
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
    name: 'Café Botánico',
    type: 'restaurant',
    image: 'https://images.unsplash.com/photo-1564759224907-65b945ff0e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    address: 'Jardín Botánico Viera y Clavijo, Las Palmas de Gran Canaria',
    rating: 4.6,
    reviewCount: 92,
    coordinates: {
      lat: 28.0681,
      lng: -15.4630
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
    name: 'Biblioteca Insular',
    type: 'place',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: 'Calle Remedios 7, Las Palmas de Gran Canaria',
    rating: 4.7,
    reviewCount: 108,
    coordinates: {
      lat: 28.1344,
      lng: -15.4331
    },
    babyAmenities: ['changing_table', 'nursing_area', 'quiet_space', 'stroller_friendly'],
    description: 'A public library with an excellent children\'s section, regular story times for babies, and comfortable seating for parents. Features a supervised play area.',
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
    name: 'Pizzería Amarcord',
    type: 'restaurant',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
    address: 'Calle Secretario Artiles 35, Las Palmas de Gran Canaria',
    rating: 4.4,
    reviewCount: 87,
    coordinates: {
      lat: 28.1229,
      lng: -15.4357
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
    name: 'Playa de Las Canteras',
    type: 'place',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
    address: 'Paseo de Las Canteras, Las Palmas de Gran Canaria',
    rating: 4.5,
    reviewCount: 156,
    coordinates: {
      lat: 28.1408,
      lng: -15.4300
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
  },
  // New locations around the island of Gran Canaria
  {
    id: '9',
    name: 'Restaurante La Marea',
    type: 'restaurant',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: 'Paseo de Meloneras, Maspalomas',
    rating: 4.8,
    reviewCount: 132,
    coordinates: {
      lat: 27.7448,
      lng: -15.5975
    },
    babyAmenities: ['high_chair', 'kids_menu', 'changing_table', 'stroller_friendly'],
    description: 'Beachfront restaurant with views of the Atlantic and a dedicated children\'s play corner. Their kids menu includes healthy options and the staff is trained to accommodate families with young children.',
    priceLevel: 3,
    openingHours: {
      'Monday': '12:00 PM - 10:00 PM',
      'Tuesday': '12:00 PM - 10:00 PM',
      'Wednesday': '12:00 PM - 10:00 PM',
      'Thursday': '12:00 PM - 10:00 PM',
      'Friday': '12:00 PM - 11:00 PM',
      'Saturday': '12:00 PM - 11:00 PM',
      'Sunday': '12:00 PM - 10:00 PM'
    }
  },
  {
    id: '10',
    name: 'Parque Natural de Pilancones',
    type: 'place',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: 'GC-60, San Bartolomé de Tirajana',
    rating: 4.9,
    reviewCount: 87,
    coordinates: {
      lat: 27.8367,
      lng: -15.6203
    },
    babyAmenities: ['stroller_friendly', 'play_area', 'changing_table'],
    description: 'A beautiful natural park with accessible trails for strollers and dedicated picnic areas designed for families. The visitor center has clean changing facilities.',
    priceLevel: 1,
    openingHours: {
      'Monday': '8:00 AM - 7:00 PM',
      'Tuesday': '8:00 AM - 7:00 PM',
      'Wednesday': '8:00 AM - 7:00 PM',
      'Thursday': '8:00 AM - 7:00 PM',
      'Friday': '8:00 AM - 7:00 PM',
      'Saturday': '8:00 AM - 7:00 PM',
      'Sunday': '8:00 AM - 7:00 PM'
    }
  },
  {
    id: '11',
    name: 'Café Mogán',
    type: 'restaurant',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: 'Calle Damasco 2, Puerto de Mogán',
    rating: 4.6,
    reviewCount: 112,
    coordinates: {
      lat: 27.8141,
      lng: -15.7652
    },
    babyAmenities: ['high_chair', 'kids_menu', 'changing_table', 'stroller_friendly'],
    description: 'A charming café in the picturesque port of Mogán with a spacious terrace perfect for families with strollers. They offer a special menu for toddlers with gentle flavors.',
    priceLevel: 2,
    openingHours: {
      'Monday': '8:00 AM - 9:00 PM',
      'Tuesday': '8:00 AM - 9:00 PM',
      'Wednesday': '8:00 AM - 9:00 PM',
      'Thursday': '8:00 AM - 9:00 PM',
      'Friday': '8:00 AM - 10:00 PM',
      'Saturday': '8:00 AM - 10:00 PM',
      'Sunday': '9:00 AM - 9:00 PM'
    }
  },
  {
    id: '12',
    name: 'Aqualand Maspalomas',
    type: 'place',
    image: 'https://images.unsplash.com/photo-1602108987428-4768d7c7ecbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: 'Ctra. Palmitos Park, km 3, Maspalomas',
    rating: 4.5,
    reviewCount: 203,
    coordinates: {
      lat: 27.7662,
      lng: -15.5858
    },
    babyAmenities: ['changing_table', 'nursing_area', 'play_area', 'stroller_friendly'],
    description: 'A water park with dedicated areas for babies and toddlers. Features shallow pools, mini slides, and multiple baby care facilities throughout the park.',
    priceLevel: 3,
    openingHours: {
      'Monday': '10:00 AM - 6:00 PM',
      'Tuesday': '10:00 AM - 6:00 PM',
      'Wednesday': '10:00 AM - 6:00 PM',
      'Thursday': '10:00 AM - 6:00 PM',
      'Friday': '10:00 AM - 6:00 PM',
      'Saturday': '10:00 AM - 6:00 PM',
      'Sunday': '10:00 AM - 6:00 PM'
    }
  },
  {
    id: '13',
    name: 'El Rincón Canario',
    type: 'restaurant',
    image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: 'Calle Bentejuí 8, Agaete',
    rating: 4.7,
    reviewCount: 95,
    coordinates: {
      lat: 28.0997,
      lng: -15.7036
    },
    babyAmenities: ['high_chair', 'kids_menu', 'changing_table'],
    description: 'A traditional Canarian restaurant that welcomes families with open arms. They serve smaller portions of local dishes for children and have clean high chairs available.',
    priceLevel: 2,
    openingHours: {
      'Monday': '1:00 PM - 10:00 PM',
      'Tuesday': '1:00 PM - 10:00 PM',
      'Wednesday': '1:00 PM - 10:00 PM',
      'Thursday': '1:00 PM - 10:00 PM',
      'Friday': '1:00 PM - 11:00 PM',
      'Saturday': '1:00 PM - 11:00 PM',
      'Sunday': '1:00 PM - 10:00 PM'
    }
  },
  {
    id: '14',
    name: 'Parque de Aventuras Arucas',
    type: 'place',
    image: 'https://images.unsplash.com/photo-1500576992153-0271099def59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    address: 'Camino de Los Castaños, Arucas',
    rating: 4.8,
    reviewCount: 147,
    coordinates: {
      lat: 28.1200,
      lng: -15.5225
    },
    babyAmenities: ['changing_table', 'nursing_area', 'play_area', 'quiet_space'],
    description: 'An adventure park with dedicated activities for toddlers, including mini obstacle courses designed for the youngest adventurers. Spacious changing rooms and nursing areas are available.',
    priceLevel: 2,
    openingHours: {
      'Monday': '9:00 AM - 6:00 PM',
      'Tuesday': '9:00 AM - 6:00 PM',
      'Wednesday': '9:00 AM - 6:00 PM',
      'Thursday': '9:00 AM - 6:00 PM',
      'Friday': '9:00 AM - 7:00 PM',
      'Saturday': '9:00 AM - 7:00 PM',
      'Sunday': '9:00 AM - 6:00 PM'
    }
  },
  {
    id: '15',
    name: 'Cafetería El Faro',
    type: 'restaurant',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80',
    address: 'Av. Marítima del Sur 35, Telde',
    rating: 4.4,
    reviewCount: 86,
    coordinates: {
      lat: 27.9920,
      lng: -15.3700
    },
    babyAmenities: ['high_chair', 'stroller_friendly', 'kids_menu'],
    description: 'A seaside café with a relaxed atmosphere and panoramic views. Offers simple but tasty menu options for young children and plenty of space for strollers.',
    priceLevel: 2,
    openingHours: {
      'Monday': '8:00 AM - 8:00 PM',
      'Tuesday': '8:00 AM - 8:00 PM',
      'Wednesday': '8:00 AM - 8:00 PM',
      'Thursday': '8:00 AM - 8:00 PM',
      'Friday': '8:00 AM - 10:00 PM',
      'Saturday': '8:00 AM - 10:00 PM',
      'Sunday': '9:00 AM - 8:00 PM'
    }
  },
  {
    id: '16',
    name: 'Cuevas de Valeron',
    type: 'place',
    image: 'https://images.unsplash.com/photo-1583266499253-5bbe5aa6ee9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    address: 'Montaña de Valeron, Santa María de Guía',
    rating: 4.7,
    reviewCount: 109,
    coordinates: {
      lat: 28.1399,
      lng: -15.6137
    },
    babyAmenities: ['changing_table', 'stroller_friendly'],
    description: 'A fascinating archaeological site with accessible pathways suitable for strollers. The visitor center has clean changing facilities and helpful staff who can explain the site in child-friendly terms.',
    priceLevel: 1,
    openingHours: {
      'Monday': '9:00 AM - 5:00 PM',
      'Tuesday': '9:00 AM - 5:00 PM',
      'Wednesday': '9:00 AM - 5:00 PM',
      'Thursday': '9:00 AM - 5:00 PM',
      'Friday': '9:00 AM - 5:00 PM',
      'Saturday': '9:00 AM - 5:00 PM',
      'Sunday': '9:00 AM - 5:00 PM'
    }
  }
];
