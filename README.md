# Modern SaaS Template

A SaaS application template built with Next.js 15, TypeScript, and modern web technologies. Features complete authentication, subscription management, and a beautiful Helium-inspired UI.

## ✨ Features

### 🔐 Authentication System
- NextAuth.js with credentials provider
- Secure user registration and login
- Session management with automatic redirects
- Protected routes and middleware
- **Demo Account**: `demo@example.com` / `password123`

### 💳 Subscription Management
- Stripe integration with webhook handlers
- Three-tier pricing (Free/Pro/Max)
- Customer portal for subscription management
- Checkout session creation
- Real-time subscription status updates

### 🎨 Modern UI/UX
- Helium-inspired sidebar with gradient design
- Fully responsive layout (desktop & mobile)
- Tailwind CSS with custom components
- Dark mode ready architecture
- Professional dashboard with analytics cards

### 🗄️ Database & Backend
- PostgreSQL with Prisma ORM
- Docker containerization
- Type-safe database operations
- Migration system
- Database seeding scripts

## 🚀 Tech Stack

- **Frontend**: Next.js 15.3.3, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, NextAuth.js
- **Database**: PostgreSQL, Prisma ORM
- **Payments**: Stripe
- **DevOps**: Docker, Docker Compose
- **Code Quality**: ESLint, TypeScript

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   ├── stripe/       # Stripe integration
│   │   └── user/         # User management
│   ├── auth/             # Auth pages
│   ├── dashboard/        # Protected dashboard
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
│   ├── auth/            # Authentication forms
│   ├── landing/         # Landing page sections
│   ├── layout/          # Layout components
│   ├── subscription/    # Pricing & subscription
│   └── ui/              # Base UI components
└── lib/                 # Utilities & configurations
    ├── auth.ts          # NextAuth configuration
    ├── prisma.ts        # Database client
    └── stripe.ts        # Stripe configuration
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- Docker & Docker Compose
- Git

### 1. Clone & Install
```bash
git clone <repository-url>
cd Payment_template
npm install
```

### 2. Environment Setup
Create a `.env.local` file:
```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=postgresql://postgres:password@localhost:5432/saas_template
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 3. Database Setup
```bash
# Start PostgreSQL container
docker-compose up -d

# Apply database schema
npx prisma db push

# Generate Prisma client
npx prisma generate

# (Optional) Seed with demo data
npx tsx scripts/seed.ts
```

### 4. Start Development
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🧪 Testing the Application

### Authentication Flow
1. Visit the landing page at `http://localhost:3000`
2. Click "Get Started" or "Sign In"
3. Use demo credentials: `demo@example.com` / `password123`
4. Verify automatic redirect to dashboard

### Subscription System
1. Navigate to pricing section
2. Select a subscription tier
3. Complete Stripe checkout (use test cards)
4. Verify subscription status in dashboard

### Database Management
```bash
# Visual database browser
npx prisma studio
# Opens at http://localhost:5555

# View users via CLI
docker exec saas_postgres psql -U postgres -d saas_template -c 'SELECT * FROM "User";'
```

## 🔧 Development Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Production build
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run type-check      # TypeScript checking

# Database
npx prisma studio       # Database GUI
npx prisma db push      # Apply schema changes
npx prisma migrate dev  # Create migration
npx prisma generate     # Update client

# Docker
docker-compose up -d    # Start database
docker-compose down     # Stop containers
docker-compose logs     # View logs
```

## 🏗️ Architecture Decisions

### Why Next.js 15?
- Latest App Router for better performance
- Built-in API routes eliminate need for separate backend
- Server-side rendering for SEO optimization
- TypeScript integration out of the box

### Why Prisma?
- Type-safe database operations
- Automatic schema migrations
- Excellent developer experience
- Built-in connection pooling

### Why Stripe?
- Industry standard for SaaS payments
- Comprehensive webhook system
- Customer portal for self-service
- International payment support

## 🚦 Current Status

- ✅ **Project Setup**: Next.js 15, TypeScript, Tailwind
- ✅ **UI/UX Design**: Responsive layout with Helium-inspired sidebar
- ✅ **Authentication**: NextAuth.js with secure session management
- ✅ **Database**: PostgreSQL with Prisma ORM
- ✅ **Payments**: Stripe integration with subscription management
- 🚧 **Security**: Enhanced security features (in progress)
- 📋 **Internationalization**: Multi-language support (planned)

## 📋 API Documentation

### Authentication Endpoints
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `GET /api/auth/session` - Current session

### Stripe Endpoints  
- `POST /api/stripe/create-checkout-session` - Create payment session
- `POST /api/stripe/customer-portal` - Access customer portal
- `POST /api/stripe/webhook` - Handle Stripe events

### User Management
- `GET /api/user/subscription` - Get subscription status

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open Pull Request

## 📄 License

This project is licensed under the MIT License.
