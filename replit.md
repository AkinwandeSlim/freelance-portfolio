# Freelance Portfolio - Fakorede Akinwande Alexander

## Overview

This is a professional freelance portfolio website built for Fakorede Akinwande Alexander, showcasing expertise in data science and fullstack development. The application is designed as a single-page React application with a clean, modern interface targeting multinational clients worldwide.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety and modern development
- **Vite** as the build tool for fast development and optimized production builds
- **Tailwind CSS** for utility-first styling with custom CSS variables for theming
- **shadcn/ui** component library for consistent, accessible UI components
- **Wouter** for lightweight client-side routing
- **TanStack Query** for efficient data fetching and state management

### Component Structure
- Modular component architecture with reusable UI components
- Custom hooks for mobile detection and toast notifications
- Form handling with validation capabilities
- Responsive design with mobile-first approach

## Key Components

### UI Framework
- **Component Library**: shadcn/ui components including buttons, cards, forms, navigation, and feedback components
- **Styling**: Tailwind CSS with custom design tokens and neutral color scheme
- **Icons**: Lucide React for consistent iconography
- **Typography**: Inter font family for professional appearance

### Backend Setup (Minimal)
- **Express.js** server with TypeScript
- **Drizzle ORM** configured for PostgreSQL with Neon Database integration
- **RESTful API** structure ready for expansion
- Memory storage implementation for development

### Database Schema
- Basic user authentication schema with username/password fields
- Configured for PostgreSQL deployment with migration support
- Extensible schema structure for future portfolio features

## Data Flow

### Client-Side
1. React components render the portfolio sections (Hero, About, Skills, Experience, Projects, Contact)
2. Form submissions handled through controlled components with validation
3. Toast notifications provide user feedback
4. Responsive design adapts to different screen sizes

### Server-Side (Ready for Expansion)
1. Express.js handles API routes with `/api` prefix
2. Drizzle ORM manages database interactions
3. Memory storage serves as development fallback
4. Error handling middleware for consistent API responses

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui**: Accessible component primitives
- **class-variance-authority**: Component variant management

### Development Tools
- **Vite**: Build tool with hot module replacement
- **TypeScript**: Type checking and enhanced developer experience
- **PostCSS**: CSS processing with Tailwind CSS
- **ESBuild**: Fast JavaScript bundling for production

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development environment integration

## Deployment Strategy

### Development
- Vite development server with hot module replacement
- Memory storage for rapid prototyping
- Development-specific error overlays and debugging tools

### Production
1. **Build Process**: Vite builds optimized React application and ESBuild bundles Express server
2. **Database**: Neon PostgreSQL with Drizzle migrations
3. **Static Assets**: Served from Express with Vite-built frontend
4. **Environment**: Node.js runtime with production optimizations

### Database Migration
- Drizzle Kit handles schema migrations
- PostgreSQL connection via environment variable
- Schema defined in shared directory for type consistency

## Recent Changes
- July 01, 2025: Complete hero section redesign with professional portfolio layout
  - Full-screen centered design with glassmorphism effects
  - Professional profile image with verification badge
  - Modern specialization tags and stats cards
  - Enhanced visual hierarchy and responsive design
- July 01, 2025: Initial project setup with React/TypeScript foundation

## User Preferences

Preferred communication style: Simple, everyday language.