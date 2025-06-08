'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { 
  CheckIcon, 
  SparklesIcon, 
  ShieldCheckIcon, 
  BoltIcon,
  CreditCardIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

export default function LandingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SaaS Template
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/signin"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Build Your SaaS
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                In Minutes
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Modern SaaS template with authentication, subscriptions, and everything you need 
              to launch your next project. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/auth/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Start Free Trial
              </Link>
              <Link
                href="/auth/signin"
                className="text-gray-900 hover:text-blue-600 text-lg font-semibold"
              >
                Demo Login <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Everything You Need</h2>
            <p className="mt-4 text-lg text-gray-600">
              Production-ready features to launch your SaaS faster
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShieldCheckIcon className="h-8 w-8" />}
              title="Authentication"
              description="Secure login with NextAuth.js, supporting email/password and OAuth providers"
            />
            <FeatureCard
              icon={<CreditCardIcon className="h-8 w-8" />}
              title="Stripe Integration"
              description="Built-in subscription management with Stripe for seamless payments"
            />
            <FeatureCard
              icon={<BoltIcon className="h-8 w-8" />}
              title="Modern Stack"
              description="Next.js 15, TypeScript, Tailwind CSS, and Prisma for maximum productivity"
            />
            <FeatureCard
              icon={<SparklesIcon className="h-8 w-8" />}
              title="Beautiful UI"
              description="Helium-inspired design with responsive layouts and smooth animations"
            />
            <FeatureCard
              icon={<GlobeAltIcon className="h-8 w-8" />}
              title="Internationalization"
              description="Multi-language support ready to scale globally"
            />
            <FeatureCard
              icon={<CheckIcon className="h-8 w-8" />}
              title="Production Ready"
              description="Security best practices, testing, and deployment configurations"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of developers who are building amazing SaaS products with our template.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/auth/signup"
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Start Building Now
            </Link>
            <div className="text-blue-100">
              <p className="text-sm">
                <strong>Demo:</strong> demo@example.com / password123
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">SaaS Template</h3>
            <p className="text-gray-400">
              Built with Next.js, TypeScript, and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}