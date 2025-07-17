# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and professional experience.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Theme toggle for better user experience
- **Interactive Components**: Engaging UI elements and animations
- **Project Showcase**: Detailed project descriptions and demos
- **Contact Form**: Direct communication capabilities
- **Skills & Timeline**: Professional experience and technical skills
- **Testimonials**: Client and colleague feedback

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with modern design
- **Deployment**: Optimized for Vercel deployment

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

- `/app/page.tsx` - Homepage with hero section and overview
- `/app/about/page.tsx` - About page with detailed background
- `/app/projects/page.tsx` - Projects showcase
- `/app/contact/page.tsx` - Contact form and information
- `/app/components/` - Reusable UI components
- `/app/constants/` - Project data and configuration
- `/public/` - Static assets and project images

## Customization

To customize this portfolio for your own use:

1. Update project data in `/app/constants/project.ts`
2. Replace project images in `/public/` folder
3. Modify personal information in component files
4. Adjust styling and theme in `/app/globals.css`

## Deployment

This portfolio is optimized for deployment on Vercel:

```bash
npm run build
```

For other platforms, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contact

Feel free to reach out through the contact form on the website or connect with me on professional platforms.
