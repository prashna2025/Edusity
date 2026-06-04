# LearningHub

A modern, responsive educational institution website built with React and Vite. LearningHub provides information about academic programs, campus life, student testimonials, and contact information.

## Features

- **Responsive Navigation**: Easy-to-use navigation bar with smooth scrolling
- **Hero Section**: Eye-catching landing section with call-to-action button
- **Programs Showcase**: Display of academic offerings (Bachelor's, Master's, Post Graduation)
- **About Us**: Detailed information about the institution and its mission
- **Campus Gallery**: Visual showcase of campus facilities and student life
- **Student Testimonials**: Reviews and feedback from current and past students
- **Contact Form**: Interactive form for inquiries and messages
- **Smooth Scrolling**: Integrated scroll navigation using react-scroll library

## Tech Stack

- **Frontend Framework**: React 19.2.6
- **Build Tool**: Vite 8.0.12
- **Styling**: CSS3 with modular component-based styling
- **Routing/Scrolling**: react-scroll 1.9.3
- **Linting**: ESLint with React-specific rules

<<<<<<< HEAD
## Project Structure
=======
##live demo 
https://brilliant-beignet-8faa36.netlify.app/

## Expanding the ESLint configuration
>>>>>>> 623afbd6c5cf7c41c42e8a06d4997ff5a8b38068

```
src/
├── Components/
│   ├── About/          # About institution section
│   ├── Campus/         # Campus gallery section
│   ├── Contact/        # Contact form section
│   ├── Footer/         # Footer component
│   ├── Hero/           # Hero section with CTA
│   ├── Navbar/         # Navigation bar
│   ├── Programs/       # Programs showcase
│   ├── Testimonials/   # Student reviews section
│   ├── Title/          # Reusable title component
│   └── VideoPlayer/    # Video player component
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
├── index.css           # Global styles
└── assets/             # Static assets
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd LearningHub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5174/`

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build optimized production bundle
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Features in Detail

### Navigation
The navbar component provides seamless navigation to all sections of the website with smooth scrolling functionality.

### Programs Section
Displays three main academic offerings:
- Bachelor's Degree
- Master's Degree
- Post Graduation

### About Section
Contains comprehensive information about LearningHub's mission, teaching approach, and commitment to student success.

### Campus Life
Gallery section showcasing the institution's facilities and student experiences.

### Testimonials
Features reviews from students including:
- Saraswoti Koirala
- Anish Pathak
- Sara Limbu
- Pratik Thapa

### Contact Section
Includes:
- Contact form for inquiries
- Email: learninghub26@gmail.com
- Phone: 02598453, +977-9845375424
- Location: Halgada Itahari-4 Sunsari, Koshi Province, Nepal

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

The project uses Vite for fast development and hot module replacement (HMR). Any changes to files will automatically refresh the browser.

### Code Quality

ESLint is configured with React-specific rules including:
- react-refresh for fast refresh support
- react-hooks for proper hook usage
- @eslint/js for core JavaScript rules

## Performance

- Optimized bundle with Vite
- CSS modules for scoped styling
- Lazy loading of components
- Responsive images and assets

## License

© 2023 Learning Hub. All rights reserved.

## Contact

For more information about LearningHub, visit our website or contact us at:
- **Email**: learninghub26@gmail.com
- **Phone**: 02598453, +977-9845375424
- **Address**: Halgada Itahari-4 Sunsari, Koshi Province, Nepal
