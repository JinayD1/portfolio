# Jinay Desai - Portfolio

A professional, minimalist portfolio built with Next.js, Tailwind CSS, Framer Motion, and next-themes.

## Features

- ✨ **Theme Toggle**: Light/Dark mode switching using next-themes
- 🎨 **Interactive Project Dropdowns**: Hover over projects to see detailed descriptions, skill badges, and screenshots
- 💼 **Experience Section**: Timeline-style experience showcase with company logos
- 📱 **Fully Responsive**: Mobile-friendly design with max-width of 700px on desktop
- 🎭 **Smooth Animations**: Framer Motion powers buttery-smooth transitions

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Theme Support

- **Light Mode**: Clean off-white background (#f9f9f9) with subtle gray text
- **Dark Mode**: Dark theme (#0a0a0a) with diagonal grid pattern overlay

Toggle between themes using the button in the top right corner.

## Adding Content

### Profile Image
Place your profile image in the `public` folder as `profile.png` and update the placeholder in `app/page.tsx`.

### Project Images
Place project screenshots in `public/projects/` and update paths in `PROJECTS_DATA`.

### Company Logos
Place company logos in `public/companies/` (recommended size: 48x48px) and update paths in `EXPERIENCES_DATA`.

### Updating Data
All content is stored in constants at the top of `app/page.tsx`:
- `PROJECTS_DATA` - Your projects
- `EXPERIENCES_DATA` - Work experiences
- `EDUCATION_DATA` - Education information
- `SOCIALS_DATA` - Social links

## Deployment

This project is optimized for deployment on Vercel:

```bash
npm run build
```

The site will automatically detect and use the correct theme based on user preference.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (with dark mode support)
- **Framer Motion** (animations)
- **next-themes** (theme management)
- **Lucide React** (icons)

