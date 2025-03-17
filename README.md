# Baby Map Gran Canaria

A web application that helps parents find baby-friendly locations in Gran Canaria, including restaurants and places with amenities like changing tables, high chairs, and nursing areas.

## Features

- Interactive map view of baby-friendly locations
- List view with detailed information
- Search functionality
- Filter by amenities
- Mobile-responsive design

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Mapbox GL JS

## Development

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/psiesta/orimapa.git

# Navigate to project directory
cd orimapa

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Mapbox token to .env file

# Start development server
npm run dev
```

## Environment Variables

Before running the application, you need to set up your environment variables:

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update the `.env` file with your Mapbox API token:
```
VITE_MAPBOX_TOKEN=your_mapbox_token_here
```

You can get a Mapbox API token by signing up at [Mapbox](https://www.mapbox.com/).

## Deployment

This project is deployed using GitHub Pages and can be accessed at [babymap.psiesta.com](https://babymap.psiesta.com).

To deploy your own version:

1. Fork this repository
2. Set up GitHub Pages in your repository settings
3. Add your Mapbox token as a repository secret named `VITE_MAPBOX_TOKEN`
4. Push to the main branch and GitHub Actions will handle the deployment
