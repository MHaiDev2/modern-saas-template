# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern SaaS template built with Next.js 14+, TypeScript, and Tailwind CSS. It serves as a boilerplate for future SaaS projects with authentication, subscription management, and modern security features.

## Current Status & Milestones

### ✅ Completed Milestones:
- **Milestone 1**: Project Setup ✅
  - Next.js 15.3.3 with TypeScript & App Router
  - Tailwind CSS v3 configuration 
  - Git workflow (main/dev/feature branches)
  - Development environment working

- **Milestone 2**: Sidebar Layout ✅
  - Helium-inspired sidebar with gradient design
  - Responsive layout (Desktop + Mobile)
  - Header with search and user menu
  - Dashboard page with stats cards

- **Milestone 3**: Authentication System ✅
  - NextAuth.js setup with credentials provider
  - Login/signup forms with modern UI
  - Landing page with hero section and features
  - Session management and auto-redirect
  - Demo user: demo@example.com / password123

### ✅ Completed Milestones (continued):
- **Milestone 4**: Database Setup ✅
  - Prisma ORM with SQLite (development)
  - User model with subscription fields
  - NextAuth.js Prisma adapter integration
  - Database connectivity working

### ✅ Completed Milestones (continued):
- **Milestone 5**: Stripe Integration ✅
  - Stripe SDK setup and configuration
  - 3-tier subscription system (FREE/PRO/MAX)
  - Checkout session creation
  - Webhook handlers for subscription events
  - Customer portal integration
  - Subscription management UI

### 🚧 Ready for Tomorrow:
- **Milestone 6**: Security Features & Internationalization
  - Current branch: `feature/stripe-integration` (ready to merge to `dev`)

### 📋 Pending Milestones:
- **Milestone 6**: Security Features & Internationalization
- **Milestone 7**: Dashboard & Final Polish

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run type checking
npm run type-check

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Database operations
npx prisma generate
npx prisma db push
npx prisma studio
npx prisma migrate dev
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: Prisma ORM with PostgreSQL
- **Payments**: Stripe
- **Internationalization**: next-intl

### Key Directories
- `app/` - Next.js App Router pages and API routes
- `components/` - Reusable React components
- `lib/` - Utility functions and configurations
- `prisma/` - Database schema and migrations
- `middleware.ts` - Route protection and internationalization
- `types/` - TypeScript type definitions

### Authentication Flow
Uses NextAuth.js with multiple providers. Protected routes are handled via middleware that checks session status and subscription tiers.

### Subscription System
Three-tier system (Free, Pro, Max) managed through Stripe. Subscription status is stored in the database and checked via middleware for feature access control.

## Git Workflow

- `main` - Production branch
- `dev` - Development branch
- `feature/[name]` - Feature branches

Always work on feature branches and merge to `dev` first before merging to `main`.

## Environment Variables Required

```env
NEXTAUTH_SECRET=
NEXTAUTH_URL=
DATABASE_URL=
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Testing Instructions

After each milestone, test the following:
1. Development server starts without errors
2. Authentication flow (register/login/logout)
3. Subscription upgrade/downgrade flows
4. Protected route access based on subscription
5. Internationalization switching
6. Database connectivity and operations